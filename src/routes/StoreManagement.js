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
// import css from './editorbootstrap.css';8
// var $ = require( 'jquery' );
// $.DataTable = require('datatables.net');
// var cunt = require( 'datatables.net-buttons' )( window, $ )

var provinceAbbr={'Alberta' : 'AB', 'British Columbia' : 'BC', 'Manitoba' : 'MB', 'New Brunswick' : 'NB', 'Newfoundland' : 'NL', 'Nova Scotia' : 'NS', 'Northwest Territories' : 'NWT', 'Nunavut' : 'NU', 'Ontario' : 'ON', 'PEI' : 'PEI', 'Quebec' : 'QC', 'Saskatchewan' : 'SK', 'Yukon': 'YT'};

@connect((state) => {
  return state
})
class DatatableComponent extends React.Component {

  constructor(props) {
    super(props);
    // var stores = [[['mike', 'alonso' , 'ass@ass.com', '391 charles street', 'Kitchener', 'ON', 'N2G 1H6', '226-394-2981'], 'Manager', '15', '2.2 hrs', '2.1', 'B-' ]];

    this.state={

    }
  }


  _getModifiedCampaign(c) {
    var campaignsModified;
    var {news, stores, stores, mgrs} = c;
    news = news || [];
    stores = stores || [];
    stores = stores || [];
    mgrs = mgrs || [];
    var newsLen = news.length;
    // var userLen = c.stores.length;
    //var userLen = stores.length;
    var storesLen = stores.length;
    var manLen = mgrs.length;
    return [c.name,c.banner, storesLen, manLen];
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.page != this.props.page) {
    //   var page = this.props.page;
    //   var [accountID, account, campaigns, campaignsModified] = this._getAccount(page);

    //   this.setState({
    //     page,
    //     accountID,
    //     account,
    //     campaignsModified
    //   });
    //   this.table.clear().rows.add(campaignsModified).draw();
    // }
  }
  componentDidMount() {
    var Screen = this;

    // $(ReactDOM.findDOMNode(this.example))
    //   .addClass('nowrap')


    var editor = new $.fn.dataTable.Editor({

      table: ".classTable",

      ajax: function ( method, url, data, success, error ) {
        console.log("method is " + method);
        console.log("url is " + url);
        console.log("data is " + JSON.stringify(data));
        var url = 'http://34.205.72.170:3000/stores/change.json';
        if (data.action == 'remove') {
          url = 'http://34.205.72.170:3000/stores/remove';
        } 
        if (data.action == 'create') {
          url = 'http://34.205.72.170:3000/stores/create';
        } 
        console.log('url is... ' + url);
          $.ajax( {
            type: 'POST',
            url,
            data: data,
            dataType: "json",
            success: function (json) {
                success( json );
                storeScreen.table.ajax.reload();
            },
            error: function (xhr, error, thrown) {
                error( xhr, error, thrown );
            }
          } );
        

      },

      idSrc: "id",
      fields: [
        { 
          name: "storeName",
          label: 'Store Name'
         },
        { 
          name: "banner",
          label: 'Store Banner'
         }]
    });

    

    var table = $(ReactDOM.findDOMNode(this.example)).DataTable({
      'dom': "flBtrip",
      ajax: 
      function (data, callback, settings) {
       $.ajax({
          url: 'http://34.205.72.170:3000/stores/show.json',
          success: function(d) {
            console.log("ajax complet!" + typeof(d));
            var dee = {d}
            callback(d);  
          },
          dataType:'json'
        });
        
        
      },

      className: "compact",
      select: {
            style:    'multi',
            selector: 'td:first-child'
        },
      buttons: [

        {
          extend: "remove",
          className: "btn-outlined btn btn-md btn-danger",
          editor: editor,
          formButtons:[
            'remove'
            // {label:'save row'}
          ]
        },

        {
          extend: "edit",
          className: "btn-outlined btn btn-md btn-success",
          editor: editor,
          formButtons:[
            'save'
            // {label:'save row'}
          ]
        },
        {
          extend: "print",
          className: "btn-outlined btn btn-md btn-success"
        },

      ],
      responsive: true,
      columnDefs: [
        {
          targets: "_all",
          className: "dt-body-center dt-head-center word-break"
        },
        {
          targets:0,
          className:'select-checkbox',
          orderable:false
        }
      ],
      columns: [
          {
            data: null,
            defaultContent: '',
            className: 'select-checkbox',
            orderable: false,
            width:50
        },
        {
          title: "Store Name",
          data: 'storeName',
          width:50
        }
      ],
      // data: userScreen.state.users
    });

    table.buttons().container().appendTo($(".dataTables_length"));

    $(ReactDOM.findDOMNode(this.example)).on("click", "tr", function(e) {
      // table.row(this).edit();
      // var row_object = table.row(this).data();
      // var access = table.row(this).data()[0];
      // console.log("clicked on row " + JSON.stringify(row_object));
      // console.log("clicked on row access " + access);
    });

    $(ReactDOM.findDOMNode(this.example)).on("click", 'tbody td:not(:first-child)', function(e) {
      var index = $(this).index();
      console.log("clicked on index " + typeof(index));
      if ([4,5,6].indexOf(index) > -1 ) {
        console.log("returning");
        return;
      }
      if (index =='1') {
        console.log("fuck?2")
        editor.edit(this, 
          'Edit Entry',
          'Save'
         );
        return
      }


      // editor.bubble(this);

      editor.inline(this);
      // table.cell( this ).edit();
      // cell.data( cell.data() + 'fuckingcuntfuck' ).draw();
    });

    this.editor = editor;
    this.table = table;
  }

  newStore() {
    this.NewStore.open();
  }

  pickColor(name) {
    this.PickColor.open();
  }
  
  newStore(v, desc){

    this.props.dispatch(actions.createStore({storeName: v, banner: banner}))
    .then((resp) => {
      console.log('dunno what this is ' + JSON.stringify(this.props.store.editing));

      var campaignsModified = this.state.storeModified.slice(0);
      console.log('old entries count ' + storeModified.length);
      campaignsModified.unshift(this._getModifiedCampaign(this.props.store.editing));
      console.log('new entries count ' + storesModfied.length)
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
    this.NewStore.close();
    });
  }

    uploadedPhoto(v) {
    var editor = Object.assign({}, this.state.editor);
    editor.img = v;
    var storeScreen= this;
    this.props.dispatch(actions.createCampaign(editor))
    .then(()=>{
      var cIndex = storeScreen.state.campaignsModified.findIndex((ele, ind)=> {
        console.log("ele " + ind);
        console.log("ele " + ele[0]);
        console.log("name " + storeScreen.props.campaigns.editing.name);
        if (ele[0] == storeScreen.props.campaigns.editing.name) {
          console.log("returning index ?? " + ind);
          return ele;
        }
      });
      console.log("cindex is " + cIndex);
      var campaignsModified = storeScreen.state.campaignsModified.slice(0);

      campaignsModified[cIndex][1] = storeScreen.props.campaigns.editing.img_url;
      storeScreen.table.clear().rows.add(campaignsModified).draw();
      storeScreen.setState({
        photoLoading: false,
        campaignsModified
      });
    });

    storeScreen.setState({
      editor,
      photoLoading:true,
    });
  }

  render() {
    
    return (
      <div>
      <Grid>
      <Row><Col md={4} mdOffset={4} lg={2} lgOffset={5} sm={4} smOffset={4} xs={4} xsOffset={4}>
        </Col> 
      </Row>
      </Grid>
      <br/>
      <NewStore ref={(c) => this.newStore = c} 
        next={(v,multiStore) => {
          console.log("nexted bitches " + v);
          if (multiStore) {
            var banners = v.split(/[ ,]+/).filter(Boolean);
            console.log("banners are " + banners);
            while (banners.length > 0) {
              this.editor.create(false).set('banner', banners[0]).submit();
              emails.shift();
            }
          }
          else {
            this.editor.create(false)
              .set('banner', v.banner)
              .set('storeName', v.storeName)
              .set('number', v.storeNum)
              .set('manager', v.manager)
              .submit();
          }
          this.NewStore.close();
        }}
        />
      <Table ref={(c) => this.example = c} className='display compact classTable' cellSpacing='0' width='100%'>
        {/*<thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>News Items</th>
            <th>Stores</th>
            // <th>Managers</th>
            <th>stores</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </tfoot>*/}
        <tbody style={{'wordBreak': 'normal', 'verticalAlign' : 'middle'}}>
         {/* <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
         */}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default class storeManagement extends React.Component {
  render() {
    

    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <DatatableComponent/>
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


class NewStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      showModal: false,
      value:'',
      mValue:'',
      mError: null

     };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  next(e){
    e.preventDefault();
    e.stopPropagation();
    var v = {
      storeName: this.state.sname,
      banner: this.state.banner,
      manager: this.state.manager

    }
    var value = this.state.multiplestores ? this.state.mValue : v;
    console.log("value is " + JSON.stringify(value));

    this.props.next(value, this.state.multiplestores);
  }

  renderAccess(){
    return (
      <FormControl  componentClass="select" name='accessLevel' className='required'
                      onChange={(event) => {
                        this.setState({
                          accessLevel:event.target.value
                        })
                      }}>
                      //Have to add in the fetch for list of managers here
        <option value='Toby'>Toby</option>
        <option value='Chunky'>Chunky</option>
        <option value='Test'>Test</option>
      </FormControl>
    );
  }

  renderForm(){
    if (!this.state.multiplestores) {
      //not multi user
      return (
        <Form onSubmit={::this.next}>
        <Modal.Body>
        <h4> Let's make this professional. Complete your new stores's information to create the account</h4>
          <FormGroup controlId='username'>
            <ControlLabel>Email *</ControlLabel>
            <FormControl type='banner' autoFocus name='name' className='required'
              onChange={(event) => {
                this.setState({
                  value:event.target.value
                })
              }} />
          <br/>
          <Grid>
            <Row>
              <Col xs={6} collapseLeft collapseRight>
                <FormGroup>
                   <ControlLabel>First Name</ControlLabel>
                    <FormControl type='text' name='descrp' className='required'
                      onChange={(event) => {
                        this.setState({
                          name:event.target.value
                        })
                      }} />
                </FormGroup>
              </Col>
              <Col xs={6} collapseRight>
                <FormGroup>
                  <ControlLabel>Last Name</ControlLabel>
                  <FormControl type='text' name='descrp' className='required'
                    onChange={(event) => {
                      this.setState({
                        snumber:event.target.value
                      })
                    }} />
                </FormGroup>
              </Col>
            </Row>
          </Grid>
                <FormGroup>
                  <ControlLabel>Manager</ControlLabel>
                    
                      {this.renderManager()}


                </FormGroup>


                // <FormGroup>
                //    <ControlLabel>Wage</ControlLabel>
                //     <FormControl type='number' name='descrp' className='required'
                //      min="0.01" step="0.01" max="2500"
                //       onChange={(event) => {
                //         this.setState({
                //           wage:event.target.value
                //         })
                //       }} />
                // </FormGroup>

          <Button bsStyle='link' className='lightblue' onClick={()=>{this.setState({multiplestores:true, value:''})}}>Invite Multiple stores</Button>
            </FormGroup>
          </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={(this.state.value.length < 1)} type='submit'>Next</Button>
        </Modal.Footer>
        </Form>
      );
    } 
    else {
      return (
        <Form onSubmit={::this.next}>
        <Modal.Body>
        <h4> Enter stores' banners.</h4>
          <FormGroup controlId='banner'>
            <ControlLabel>Emails *</ControlLabel>
            <FormControl type='banner' componentClass='textarea' style={{resize:'none', height:200}} autoFocus name='name' className='required'
              onChange={(event) => {
                var v = event.target.value;
                var banners = v.split(/[ ,]+/).filter(Boolean);

                //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

                //var errorEmails = [];

                emails.forEach(function(email) {
                  var noError = true; //EMAIL_REGEXP.test(email.trim());  
                    if (!noError) {
                      errorEmails.push(email.trim());
                    }
                }) ;
                
                if (errorEmails.length > 0) {
                  this.setState({
                    mError: errorEmails,
                    mValue: ''
                  });
                } else {
                  this.setState({
                    mValue:event.target.value,
                    mError: null
                  });  
                }
              }} />
          
          {this.state.mError ? "There's an issue with formatting for the following email: " + this.state.mError  : null}
          <br/>
          <Button bsStyle='link' className='lightblue' onClick={()=>{this.setState({multiplestores:false, mValue:''})}}>Invite Single User</Button>
          </FormGroup>
          </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={(this.state.mValue.length < 1)} type='submit'>Next</Button>
        </Modal.Footer>
        </Form>
      );
    }
  }

  render() {
    return (
      <Modal backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add stores</Modal.Title>
        </Modal.Header>
        
        {this.renderForm()}
        
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
    var storeScreen = this;
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
        storeScreen.setState({
          loading:true,
          img:base64data
        });
        storeScreen.props.uploadPhoto(base64data);
      }

    } else {
      this.setState({
        file:[],
        showImage:false,
        error:true
      })
    }
    
  }
  dropPreview(){
    if (this.state.file) {
      console.log("file exists now");
      return <img src={this.state.file.preview}/> 
    } else {
      console.log('file doesnt exist');
      return <div style={{textAlign:'center'}}> <br/><br/>Drag & drop an image or <br/> click here to select an image to upload</div>
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


