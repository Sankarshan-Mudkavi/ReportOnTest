import React from 'react';
import ReactDOM from 'react-dom';
import DropZone from 'react-dropzone';
import { connect } from 'react-redux';
import slIcon from './fonts/simple-line-icons';
import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  Form,
  PanelBody,
  PanelHeader,
  Modal,
  FormGroup,
  ControlLabel,
  Button,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';
import { withRouter } from 'react-router';
import actions from '../redux/actions';
import Loadable from 'react-loading-overlay';
import Switch from 'react-bootstrap-switch';
import Select from 'react-select';
// var $ = require( 'jquery' );
// $.DataTable = require('datatables.net');
// var cunt = require( 'datatables.net-buttons' )( window, $ )



@connect((state) => {
  return state
})
class DatatableComponent extends React.Component {

  constructor(props) {
    super(props);
    var page = props.page;
    var [accountID, account, campaigns, campaignsModified] = this._getAccount(page);
    this.state={
      page,
      accountID,
      account,
      campaignsModified,
      campaigns,
    }
  }

  _getAccount(page) {
    var accounts = this.props.accounts.result
    var accountID ;
    var account;
    var campaigns;
    var campaignsModified = []
    var userScreen = this;
    for(var i = 0; i < accounts.length; i++)
    {
      
      if(accounts[i].title.replace(/[^A-Z0-9]+/ig, "_").toLowerCase() == page.toLowerCase())
      {
        
        accountID = accounts[i].id;
        account = accounts[i];
        campaigns = account.campaigns;
        
        campaignsModified = campaigns.map((c) => {
          return userScreen._getModifiedCampaign(c)
        });
        
        break;
      }
    };
    return [accountID, account, campaigns, campaignsModified];
  }

  _getModifiedCampaign(c) {
    var campaignsModified;
    var {news, users, stores, mgrs} = c;
    news = news || [];
    users = users || [];
    stores = stores || [];
    mgrs = mgrs || [];
    var newsLen = news.length;
    // var userLen = c.users.length;
    var userLen = users.length;
    var storesLen = stores.length;
    var manLen = mgrs.length;

    return [c.name,c.img_url, c.description, newsLen, storesLen, manLen, userLen, c.id];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page != this.props.page) {
      var page = this.props.page;
      var [accountID, account, campaigns, campaignsModified] = this._getAccount(page);

      this.setState({
        page,
        accountID,
        account,
        campaignsModified,
        campaigns,
      });
      this.table.clear().rows.add(campaignsModified).draw();
    }
  }

  componentDidMount() {
    var userScreen = this;
    
    // $(ReactDOM.findDOMNode(this.example))
    //   .addClass('nowrap')
    var table = $(ReactDOM.findDOMNode(this.example)).DataTable({
        // 'dom': "flBtrip",
        
        className:'compact',
        'buttons': [
           {
            extend: 'print',
            className:'btn-outlined btn btn-sm btn-success'
            }
        ],
        responsive: true,
        columnDefs: [
          { targets: '_all', 
            className: 'dt-body-center dt-head-center word-break', 
           },
           { targets: [7],
            visible:false,
            searchable:false
           }
        ],
        columns: [

            
            { 
              title: "Name",
              width:200,
              
             },
            { 
              title: 'Image',
              'render' : function(data,type,row) {
                return '<img src="'+data+'"style="height:100px;width:100px;"/>';
              }
            },
            { title: "Description",
            width:300 },
            { title: "News" },
            { title: "Stores" },
            { title: "Mgrs" },
            { title: "Users" },
        ],
        data:userScreen.state.campaignsModified

    });



    table.buttons().container()
        .appendTo( $('.dataTables_length' ) );


    $(ReactDOM.findDOMNode(this.example)).on("click", "tr", function(e) {
      //bring up modal to edit this row.
      var row_object = table.row(this).data();
      var access = table.row(this).data()[0];
      console.log('clicked on row ' + JSON.stringify(row_object));
      console.log("clicked on row access " + access);
      //find the campaign being edited:
      userScreen.setState({modifyingID:row_object[7]});
      userScreen.CampaignEditor.open(row_object);
    });

    this.table = table

  }


  newCampaign() {
    this.NewCampaign.open();
  }

  uploadPhoto() {
    this.UploadPhoto.open();
  }

  pickColor(name) {
    this.PickColor.open();
  }
  
  newedCampaign(v, desc){

    this.props.dispatch(actions.createCampaign({name: v, description: desc, merchant_account_id: this.state.accountID}))
    .then((resp) => {
      console.log('dunno what this is ' + JSON.stringify(this.props.campaigns.editing));

      var campaignsModified = this.state.campaignsModified.slice(0);
      console.log('old entries count ' + campaignsModified.length);
      campaignsModified.unshift(this._getModifiedCampaign(this.props.campaigns.editing));
      console.log('new entries count ' + campaignsModified.length)
      this.table.clear().rows.add(campaignsModified).draw();

      this.setState({
        editor: {
          name: v,
          description:desc,
          campaign_id: this.props.campaigns.editing.id,
          merchant_account_id: this.state.accountID,
        },
        campaignsModified
      });

      console.log('this state is now length ' + this.state.campaignsModified.length);


    this.uploadPhoto();
    this.NewCampaign.close();
    });
  }

  uploadedPhoto(v) {
    var editor = Object.assign({}, this.state.editor);
    editor.img = v;
    var userScreen= this;
    this.props.dispatch(actions.createCampaign(editor))
    .then(()=>{
      var cIndex = userScreen.state.campaignsModified.findIndex((ele, ind)=> {
        console.log("ele " + ind);
        console.log("ele " + ele[0]);
        console.log("name " + userScreen.props.campaigns.editing.name);
        if (ele[0] == userScreen.props.campaigns.editing.name) {
          console.log("returning index ?? " + ind);
          return ele;
        }
      });
      console.log("cindex is " + cIndex);
      var campaignsModified = userScreen.state.campaignsModified.slice(0);

      campaignsModified[cIndex][1] = userScreen.props.campaigns.editing.img_url;
      userScreen.table.clear().rows.add(campaignsModified).draw();
      userScreen.setState({
        photoLoading: false,
        campaignsModified
      });
    });

    userScreen.setState({
      editor,
      photoLoading:true,
    });
  }

  render() {
    
    return (
      <div>
      <Grid>
      <Row><Col md={4} mdOffset={4} lg={2} lgOffset={5} sm={4} smOffset={4} xs={4} xsOffset={4}>
        <Button outlined lg style={{marginBottom: 2}} bsStyle='success' className='text-center'onClick={::this.newCampaign}>Create New Campaign</Button>
        </Col> 
      </Row>
      </Grid>
      <br/>

      
      <CampaignEditor ref={(c) => this.CampaignEditor = c} 
        parentComp={this}>
      </CampaignEditor>
      <UploadPhoto ref={(c) => this.UploadPhoto = c} passedProp={this.state.editor} uploadPhoto={(v) => this.uploadedPhoto(v)}/>
      <NewCampaign ref={(c) => this.NewCampaign = c} next={(v,desc) => this.newedCampaign(v, desc)}/>
      <Table ref={(c) => this.example = c} className='display compact' cellSpacing='0' width='100%'>
        
        <tbody style={{'wordBreak': 'normal', 'verticalAlign' : 'middle'}}>
         
        </tbody>
      </Table>
      </div>
    );
  }
}

export default class Campaigns extends React.Component {
  render() {
    console.log("rendeirng campaigns " + this.props.routeParams.page)

    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <DatatableComponent page={this.props.routeParams.page}/>
                      <br/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}


class CampaignEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      value:''
     };
  }

  close() {
    this.setState({ showModal: false });
  }

  next(){

  }

  open(d) {
    var name = d[0] || "undefined";
    var image = d[1] || 'http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder.png';
    var desc = d[2] || 'no description set';
    var news = parseInt(d[3]) || 0;
    var stores = parseInt(d[4]) || 0;
    var mgrs = parseInt(d[5]) || 0;
    var users = parseInt(d[6]) || 0;
    var campId = parseInt(d[7]) || 0;
    this.setState({ 
      name,
      file : [
        {
          preview:image
        }
      ],
      desc,
      news,
      stores,
      mgrs,
      campId,
      users,
      showModal: true,
      showImage:true,
    });
  }


  onDrop(file){
    var userScreen = this;
    console.log("dropped file " + JSON.stringify(file));
    // console.log("dropped file type is" + (file[0].preview.type));
    if (file.length>0) {
      this.setState({
       file,
       showImage:true,
       error:false,
       uploaded:false,
      });
      var reader = new window.FileReader();
      // var blob = new File.createFromFileName(file[0].preview)
      console.log("file[0].preview is " + file[0].type)
      reader.readAsDataURL(file[0]);
      reader.onloadend = function() {
        var base64data=reader.result;
        console.log( "base64 ready" );
        userScreen.setState({
          loading:true,
          img:base64data
        });
        // userScreen.props.uploadPhoto(base64data);
      }

    } else {
      this.setState({
        file:[],
        showImage:false,
        error:true
      })
    }
  }

  childClosed(){
    this.setState({
      overlay:1
    });
  }
  childOpened(){
    this.setState({
      overlay:0.5
    });
  }

  render() {
    //assign campaign managers
    //assign stores
    //assign users to stores.
    return (
      <div>
      
      <Modal style={{opacity:this.state.overlay}} backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
      <EditUsers ref={(c)=> this.EditUsers = c} stores={this.state.stores} onClose={::this.childClosed} campId={this.state.campId}
        />
      <EditStores ref={(c)=> this.EditStores = c} stores={this.state.stores} campId={this.state.campId} onClose={::this.childClosed}
        />
        <Modal.Header closeButton>
          <Modal.Title>Edit Campaign: {this.state.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row>
          <Col xs={4} componentClass={ControlLabel}>Name</Col>
          <Col xs={8}>
            <FormControl type='text' placeholder='Enter text' className='inline' value={this.state.name} onChange={(e)=>{
              this.setState({
                name:e.target.value
              })
            }} />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4} componentClass={ControlLabel}>Image (not hooked up)</Col>
          <Col xs={8}>

            <DropZone multiple={false} onDrop={this.onDrop.bind(this)} accept={'image/*'}>
              <Loadable
              active={this.state.loading}
              spinner
              text='uploading...'
              >
              {this.state.showImage
                ? 
                <div style={{textAlign:'center'}}>
                  <img style={{objectFit:'contain', height:130, width: 190, margin:'auto', display:'block'}} src={this.state.file[0].preview}/> 
                  Click here to upload a different image...
                </div>
                :
                null                  
              }

              { !this.state.file ? <div style={{textAlign:'center'}}><br/><br/> Drag & drop an image or <br/> click here to select an image to upload</div> : null }
              {this.state.error
                ?
                <div style={{textAlign:'center'}}> <br/><br/><br/> Please upload a valid image. <br/> Click here to try again</div>
                :
                null
              }
              </Loadable>
            </DropZone>
            
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4} componentClass={ControlLabel}>Description</Col>
          <Col xs={8}>
            <FormControl type='text' componentClass='textarea' style={{resize:'none', height:100}}placeholder='Enter text' className='inline' value={this.state.desc} onChange={(e)=>{
              this.setState({
                desc:e.target.value
              })
            }}/>

          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4} componentClass={ControlLabel}>Stores: {this.state.stores}</Col>
          <Col xs={8}>
          <Button 
            onClick={() => {
              this.EditStores.open();
              this.childOpened();
            }}
            outlined sm style={{marginBottom: 5}} bsStyle='primary' className='inline'>Edit Assigned Stores</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4} componentClass={ControlLabel}>Mgrs: {this.state.mgrs}</Col>
          <Col xs={8}>
          <Button 
            onClick={this.props.aManager}
            outlined sm style={{marginBottom: 5}} bsStyle='primary' className='inline'> Edit Assigned Managers</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4} componentClass={ControlLabel}>Users: {this.state.users}</Col>
          <Col xs={8}>
          <Button 
            onClick={() => {
              this.EditUsers.open();
              this.childOpened();
            }}
            outlined sm style={{marginBottom: 5}} bsStyle='primary' className='inline'>Edit Assigned Users</Button>
          </Col>
        </Row>


          {/*<FormGroup controlId='username'>
            <ControlLabel>Name *</ControlLabel>
            <FormControl type='text' name='name' className='required'
              onChange={(event) => {
                
                
                this.setState({
                  value:event.target.value
                })
              }} />
          

            <ControlLabel>Description *</ControlLabel>
            <FormControl type='text' componentClass='textarea' style={{resize:'none', height:100}} name='descrp' className='required'
              onChange={(event) => {
                this.setState({
                  desc:event.target.value
                })
              }} />
          </FormGroup>*/}

        </Modal.Body>
        <Modal.Footer>
          <Button sm bsStyle='primary' onClick={::this.next}>Save</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

class EditUsers extends React.Component {
  constructor(props) {
    super(props);
    var loading = props.loading || false;
    this.state = { 
      showModal: false,
      passedProp: props.passedProp || {},
      loading,
      value:[]
    };
  }
  
    componentWillReceiveProps(nextProps) {
    if (nextProps.passedProp != this.props.passedProp) {
      this.setState({
        passedProp: nextProps.passedProp
      });
    }
    if (nextProps.loading != this.state.loading) {
      this.setState({
        loading: nextProps.loading
      });
    }
  }

  save(){
    var url = 'http://34.205.72.170:3000/banner/selected';
    var userScreen = this;
    $.ajax( {
      type: 'POST',
      url,
      data: this.state.value,
      dataType: "json",
      success: function (json) {
        console.log("json is " + JSON.stringify(json));
        userScreen.close(json);
        // userScreen.props.onClose({
        //   stores: json.stores
        // });
        // userScreen.setState({ showModal: false, file: null, error:false, uploaded:false, base64data:null, showImage:false });
      },
      error: function (xhr, error, thrown) {
          console.log("error is " + error);
      }
    });
  }


  close(json) {
    var json = json || {}
    this.props.onClose({
      stores: json.stores
    });  
    this.setState({ showModal: false, file: null, error:false, uploaded:false, base64data:null, showImage:false });
  }

  open() {
    var stores = this.props.stores || [];
    var userScreen=this;
    console.log("opening shit.  stores are " + stores);
    this.setState({ stores, showModal: true , file: null, error:false, uploaded:false, base64data:null, showImage:false });
    // var url = 'http://34.205.72.170:3000/banner/show';
    // $.ajax( {
    //         type: 'GET',
    //         url,
    //         dataType: "json",
    //         success: function (json) {
    //             // console.log("banners are " + JSON.stringify(json));
    //             var bannerValues = {};
    //             for (let banner of json) {
    //               if (typeof(banner.value) == 'undefined') {
    //                 bannerValues[banner.id] = false;  
    //               } else {
    //                 bannerValues[banner.id] = banner.value;
    //               }
    //             }
    //             userScreen.setState({banners: json, bannerValues});

    //         },
    //         error: function (xhr, error, thrown) {
    //           console.log("error !!! " + error);
                
    //         }
    // });
  }
  

  renderStores(){
    
    var dummyStores = [
    {
      id:1,
      name:'storeName',
      banner:'bannerName',
      storeNumber:'19239',
      address: {
        streetAddress:'123 charles street',
        city: 'kitchener',
        prov:'ON',
        postal:'M9R 2W5'
      }
    },
    {
      id:2,
      name:'storeName',
      banner:'bannerName',
      storeNumber:'19239',
      address: {
        streetAddress:'123 charles street',
        city: 'kitchener',
        prov:'ON',
        postal:'M9R 2W5'
      }
    },
    {
      id:3,
      name:'storeName',
      banner:'bannerName',
      storeNumber:'19239',
      address: {
        streetAddress:'123 charles street',
        city: 'kitchener',
        prov:'ON',
        postal:'M9R 2W5'
      }
    },
    ]
    // var stores = this.state.banners.map((banner) => {
      var sampleUserList=[ 
        {
          value:'1', label:'Mike Spinelli'
        },
        {
          value:'2', label:'Sank Mood'
        },
        {
          value:'3', label:'Tooby Gooby'
        },
        {
          value:'4', label:'Hoobo Aleh'
        },
        {
          value:'5', label:'Doug Demuro'
        },
        {
          value:'6', label:'David Tracey'
        },

      ]
      var stores = dummyStores.map((store) => {
      return (
        <Row key={store.id} style={{marginBottom:5}}>
          <Col xs={2} style={{verticalAlign:'middle'}}>
          <h4 style={{wordWrap:'break-word'}}>{store.banner}</h4>
          </Col>
          <Col xs={4} componentClass={ControlLabel}>
          <h4 style={{wordWrap:'break-word'}}>{store.name}</h4>
          <h4 style={{wordWrap:'break-word'}}>{store.address.streetAddress}</h4>
          <h4 style={{wordWrap:'break-word'}}>{store.address.city}</h4>
          <h4 style={{wordWrap:'break-word'}}>{store.address.prov}</h4>
          <h4 style={{wordWrap:'break-word'}}>{store.address.postal}</h4>
          </Col>
          <Col xs={6}>
          <h4>
            <Select
              multi
              simpleValue
              name="form-field-name"
              value={this.state.value[store.id] || ''}
              options={sampleUserList}
              onChange={(value)=> {
                console.log("onchange happend! " + value);
                this.setState({
                  value : {
                    ...this.state.value,
                    [store.id] : value,
                }})
              }}
              // value={this.state.bannerValues[banner.id]}
              // onChange={(el, state) => {
              //   var bannerValues = this.state.bannerValues;
              //   this.setState({
              //     bannerValues: {
              //     ...bannerValues,
              //     [banner.id] : state
              //     }
              //   });
              //   console.log("banner values are now " + JSON.stringify(this.state.bannerValues));
              // }}
            />
          </h4>
          </Col>
          <br/>
        </Row>
      );
    });
    return stores;
  }


  render() {
    return (
      <Modal bsSize='large' style={{paddingTop:'5%'}} show={this.state.showModal} backdrop='static' onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Assigned Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            {this.renderStores()}
          </Grid>
          
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' sm onClick={::this.save}>Finish</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



class EditStores extends React.Component {
  constructor(props) {
    super(props);
    var loading = props.loading || false;
    this.state = { 
      showModal: false,
      passedProp: props.passedProp || {},
      loading,
      banners: [],
      bannerValues: {},
    };
  }
  
    componentWillReceiveProps(nextProps) {
    if (nextProps.passedProp != this.props.passedProp) {
      this.setState({
        passedProp: nextProps.passedProp
      });
    }
    if (nextProps.loading != this.state.loading) {
      this.setState({
        loading: nextProps.loading
      });
    }
  }

  save(){
    var url = 'http://34.205.72.170:3000/banner/selected';
    var userScreen = this;
    var data = []
    var bannerValues = this.state.bannerValues;
    for (var i in bannerValues) {
      console.log("banner value " + i + " is " + bannerValues[i]);
      if (bannerValues[i] == true) {
        data.push(i);
      }
    }

    var body = {
      banners:data,
      campaign_id:this.props.campId
    }
    

    $.ajax( {
      type: 'POST',
      url,
      data: body,
      dataType: "json",
      success: function (json) {
        console.log("json is " + JSON.stringify(json));
        userScreen.close(json);
        // userScreen.props.onClose({
        //   stores: json.stores
        // });
        // userScreen.setState({ showModal: false, file: null, error:false, uploaded:false, base64data:null, showImage:false });
      },
      error: function (xhr, error, thrown) {
          console.log("error is " + error);
      }
    });
  }


  close(json) {
    var json = json || {}
    this.props.onClose({
      stores: json.stores
    });  
    this.setState({ showModal: false, file: null, error:false, uploaded:false, base64data:null, showImage:false });
  }

  open() {
    var stores = this.props.stores || [];
    var userScreen=this;
    console.log("opening shit.  stores are " + stores);
    this.setState({ stores, showModal: true , file: null, error:false, uploaded:false, base64data:null, showImage:false });
    var url = 'http://34.205.72.170:3000/banner/show';
    $.ajax( {
            type: 'GET',
            url,
            dataType: "json",
            success: function (json) {
                // console.log("banners are " + JSON.stringify(json));
                var bannerValues = {};
                for (let banner of json) {
                  bannerValues[banner.id] = false;
                }
                userScreen.setState({banners: json, bannerValues});

            },
            error: function (xhr, error, thrown) {
              console.log("error !!! " + error);
                
            }
    });
  }
  

  renderBanners(){
    var banners = this.state.banners.map((banner) => {
      console.log("rendering banner " + banner.name);
      return (
        <Row key={banner.id} style={{marginBottom:5}}>
          <Col xs={9} componentClass={ControlLabel}>
          <h3>{banner.name}</h3>
          </Col>
          <Col xs={3}>
          <h4>
            <Switch bsSize='small'
              value={this.state.bannerValues[banner.id]}
              onChange={(el, state) => {
                var bannerValues = this.state.bannerValues;
                this.setState({
                  bannerValues: {
                  ...bannerValues,
                  [banner.id] : state
                  }
                });
              }}
            />
          </h4>
          </Col>
          <br/>
        </Row>
      );
    });
    return banners;
  }


  render() {
    return (
      <Modal style={{paddingTop:'5%'}} show={this.state.showModal} backdrop='static' onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Stores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            {this.renderBanners()}
          </Grid>
          
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' sm onClick={::this.save}>Finish</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



class NewCampaign extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      showModal: false,
      value:''

     };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  next(){
    this.props.next(this.state.value, this.state.desc);
  }

  render() {
    return (
      <Modal backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Give your NEW Campaign a Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId='username'>
            <ControlLabel>Name *</ControlLabel>
            <FormControl type='text' name='name' className='required'
              onChange={(event) => {
                
                
                this.setState({
                  value:event.target.value
                })
              }} />
          

            <ControlLabel>Description *</ControlLabel>
            <FormControl type='text' componentClass='textarea' style={{resize:'none', height:100}} name='descrp' className='required'
              onChange={(event) => {
                this.setState({
                  desc:event.target.value
                })
              }} />
          </FormGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={(this.state.value.length < 1)} onClick={::this.next}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    var loading = props.loading || false;
    this.state = { 
      showModal: false,
      passedProp: props.passedProp || {},
      loading
    };
  }
  
    componentWillReceiveProps(nextProps) {
    if (nextProps.passedProp != this.props.passedProp) {
      this.setState({
        passedProp: nextProps.passedProp
      });
    }
    if (nextProps.loading != this.state.loading) {
      this.setState({
        loading: nextProps.loading
      });
    }
  }



  close() {
    this.setState({ showModal: false, file: null, error:false, uploaded:false, base64data:null, showImage:false });
  }

  open() {
    this.setState({ showModal: true , file: null, error:false, uploaded:false, base64data:null, showImage:false });
  }
  
  onDrop(file){
    var userScreen = this;
    console.log("dropped file " + JSON.stringify(file));
    // console.log("dropped file type is" + (file[0].preview.type));
    if (file.length>0) {
      this.setState({
       file,
       showImage:true,
       error:false,
       uploaded:false,
      });
      var reader = new window.FileReader();
      // var blob = new File.createFromFileName(file[0].preview)
      console.log("file[0].preview is " + file[0].type)
      reader.readAsDataURL(file[0]);
      reader.onloadend = function() {
        var base64data=reader.result;
        console.log( "base64 ready" );
        userScreen.setState({
          loading:true,
          img:base64data
        });
        userScreen.props.uploadPhoto(base64data);
      }

    } else {
      this.setState({
        file:[],
        showImage:false,
        error:true
      })
    }
  }
  


  render() {
    
    return (
      <Modal  show={this.state.showModal} backdrop='static' onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a Photo for {this.state.passedProp.campaignName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
            
              <Col sm={6} smOffset={3} xs={4} xsOffset={4} >

                <DropZone multiple={false} onDrop={this.onDrop.bind(this)} accept={'image/*'}>
                  <Loadable
                  active={this.state.loading}
                  spinner
                  text='uploading...'
                  >
                  {this.state.showImage
                    ? 
                    <div style={{textAlign:'center'}}>
                      <img style={{objectFit:'contain', height:130, width: 190, margin:'auto', display:'block'}} src={this.state.file[0].preview}/> 
                      Click here to upload a different image...
                    </div>
                    :
                    null                  
                  }

                  { !this.state.file ? <div style={{textAlign:'center'}}><br/><br/> Drag & drop an image or <br/> click here to select an image to upload</div> : null }
                  {this.state.error
                    ?
                    <div style={{textAlign:'center'}}> <br/><br/><br/> Please upload a valid image. <br/> Click here to try again</div>
                    :
                    null
                  }
                  </Loadable>
                </DropZone>
              </Col>
            </Row>
          </Grid>
          
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={!this.state.showImage} onClick={::this.close}>Finish</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


