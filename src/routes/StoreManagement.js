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
    // var users = [[['mike', 'alonso' , 'ass@ass.com', '391 charles street', 'Kitchener', 'ON', 'N2G 1H6', '226-394-2981'], 'Manager', '15', '2.2 hrs', '2.1', 'B-' ]];

    this.state={

    }
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
    return [c.name,c.img_url, c.description, newsLen, storesLen, manLen, userLen];
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
    var userScreen = this;

    // $(ReactDOM.findDOMNode(this.example))
    //   .addClass('nowrap')


    var editor = new $.fn.dataTable.Editor({

      table: ".classTable",

      ajax: function ( method, url, data, success, error ) {
        console.log("method is " + method);
        console.log("url is " + url);
        console.log("data is " + JSON.stringify(data));
        var url = 'http://34.205.72.170:3000/store/change.json';
        if (data.action == 'remove') {
          url = 'http://34.205.72.170:3000/store/remove';
        } 
        if (data.action == 'create') {
          url = 'http://34.205.72.170:3000/store/create';
        } 
        console.log('url is... ' + url);
          $.ajax( {
            type: 'POST',
            url,
            data: data,
            dataType: "json",
            success: function (json) {
                success( json );
                userScreen.table.ajax.reload();
            },
            error: function (xhr, error, thrown) {
                error( xhr, error, thrown );
            }
          } );
        

      },

      idSrc: "id",
      fields: [
        { 
          name: "banner",
          label: 'Store Banner'
         },
        { 
          name: "storeNumber",
          label: 'Store Number'
         },
        { 
          name: "name",
          label: 'Store Name'
         },
        { 
          name: "address.streetAddress",
          label: 'Address'
         },
        { 
          name: "address.city",
          label: 'City'
         },
        { 
          name: "address.province",
          label: 'Province',
          type:"select",
          options:[
            'AB',
            'BC',
            'MB',
            'NB',
            'NL',
            'NS',
            'NWT',
            'NU',
            'ON',
            'PEI',
            'QC',
            'SK',
            'YT'
          ]
         },
        { 
          name: "address.postalCode",
          label: 'Postal Code'
         },
        // {
        //   label:'User',
        //   name: "user",
        //   type: "select",
        //   options: [
        //     { label: "Toby", value: "Toby" },
        //     { label: "Chunky", value: "Chunky" },
        //     { label: "Brandon", value: "Brandon" }
        //   ]
        // },
        // etc
      ]
    });

    

    var table = $(ReactDOM.findDOMNode(this.example)).DataTable({
      'dom': "flBtrip",
      ajax: 
      function (data, callback, settings) {
       $.ajax({
          url: 'http://34.205.72.170:3000/store/show.json',
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
          title: "Store",
          data: null,
          editField: 'firstName',
          render: function(data, type, row) {
            var addr = data.address || {};
            var name = data.name || 'New Store'
            var storeNumber = data.storeNumber || '123'
            var banner = data.banner || 'New banner'
            var address = addr.streetAddress;
            //var email = data.email || 'no email';
            var city= addr.city;
            var prov = addr.province;
            var postal = addr.postalCode;
            //var tel = data.mobilePhoneNumber;
            var dataFilledOut = true;
            

            if (!address) {
             return "<b><u>" +
                  name +
                 "</u></b><br/>" +
                  storeNumber +
                  "<br/>" +
                  banner;
            }
            

            return (
              "<b><u>" +
              name +
              "</u></b><br/>" +
              storeNumber +
              "<br/>" +
              banner +
              "<br/>" +
              address +
              "<br/>" +
              city +
              " " +
              prov
              // "<br/>" +
              // postal +
            );
          }
        },
        {
          title: "User",
          width: 120,
          data:'access'
        },
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

  uploadStoreList() {
    this.uploadStoreList.open();
  }

  pickColor(name) {
    this.PickColor.open();
  }
  
  newedUser(v, desc){

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


    this.uploadStoreList();
    this.NewUser.close();
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
        <Button outlined lg style={{marginBottom: 2}} bsStyle='success' className='text-center'onClick={::this.newStore}>Add New Store</Button>
        </Col> 
      </Row>
      </Grid>
      <br/>
      <NewStore ref={(c) => this.NewStore = c} 
        next={(v,multiUser) => {
          console.log("nexted bitches " + v);
          if (multiUser) {
            var emails = v.split(/[ ,]+/).filter(Boolean);
            console.log("emails are " + emails);
            while (emails.length > 0) {
              this.editor.create(false).set('email', emails[0]).submit();
              emails.shift();
            }
          }
          else {
            this.editor.create(false)
              .set('name', v.name)
              .set('storeNumber', v.storeNumber)
              .set('banner', v.banner)
              //.set('wage', v.wage)
              //.set('access', v.access)
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
            <th>Users</th>
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

export default class UserManagement extends React.Component {
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

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add user to store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          One fine body...
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.close} bsStyle='danger'>Close</Button>
          <Button onClick={::this.close} bsStyle='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
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

  launchAddUserModal() {
    this.addUserModal.open();
  }

  open() {
    this.setState({ showModal: true });
  }

  next(e){
    e.preventDefault();
    e.stopPropagation();
    var v = {
      name: this.state.value,
      storeNumber: this.state.snum,
      banner: this.state.sbanner,
      
    }
    var value = this.state.multipleUsers ? this.state.mValue : v;
    console.log("value is " + JSON.stringify(value));

    this.props.next(value, this.state.multipleUsers);
  }

  renderAccess(){
    //Need to import user list here and build the options based on those values
    return (
      <FormControl  componentClass="select" name='access' className='required'
                      onChange={(event) => {
                        this.setState({
                          access:event.target.value
                        })
                      }}>
        <option value='Toby'>Toby</option>
        <option value='Chunky'>Chunky</option>
        <option value='Brandon'>Brandon</option>
      </FormControl>
    );
  }

  renderForm(){
    if (!this.state.multipleUsers) {
      //not multi user
      return (
        <Form onSubmit={::this.next}>
        <Modal.Body>
        <h4> Please enter your account information</h4>
          <FormGroup controlId='username'>
            <ControlLabel>Store Name *</ControlLabel>
            <FormControl type='text' autoFocus name='name' className='required'
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
                   <ControlLabel>Store Number</ControlLabel>
                    <FormControl type='text' name='descrp' className='required'
                      onChange={(event) => {
                        this.setState({
                          snum:event.target.value
                        })
                      }} />
                </FormGroup>
              </Col>
              <Col xs={6} collapseRight>
                <FormGroup>
                  <ControlLabel>Store Banner</ControlLabel>
                  <FormControl type='text' name='descrp' className='required'
                    onChange={(event) => {
                      this.setState({
                        sbanner:event.target.value
                      })
                    }} />
                </FormGroup>
              </Col>
            </Row>
          </Grid>
          <Button bsStyle='link' className='lightblue' onClick={()=>{this.setState({multipleUsers:true, value:''})}}>Add multiple stores</Button>
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
        <h4> Enter Stores' names seperated by commas or spaces.</h4>
          <FormGroup controlId='username'>
            <ControlLabel>Stores *</ControlLabel>
            <FormControl type='email' componentClass='textarea' style={{resize:'none', height:200}} autoFocus name='name' className='required'
              onChange={(event) => {
                var v = event.target.value;
                var emails = v.split(/[ ,]+/).filter(Boolean);

                var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

                var errorEmails = [];

                emails.forEach(function(email) {
                  var noError = EMAIL_REGEXP.test(email.trim());  
                    if (!noError) {
                      errorEmails.push(email.trim());
                    }
                }) ;

                errorEmails = nil;
                
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
          <Button bsStyle='link' className='lightblue' onClick={()=>{this.setState({multipleUsers:false, mValue:''})}}>Add a single store</Button>
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
          <Modal.Title>Add Stores</Modal.Title>
        </Modal.Header>
        
        {this.renderForm()}
        
      </Modal>
    );
  }
}

class UploadStoreList extends React.Component {
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
        userScreen.props.uploadStoreList(base64data);
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
      return <div style={{textAlign:'center'}}> <br/><br/>Drag & drop a storelist or <br/> click here to select a storelist to upload</div>
    }
  }


  render() {
    
    return (
      <Modal  show={this.state.showModal} backdrop='static' onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a Storelist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
            
              <Col sm={6} smOffset={3} xs={4} xsOffset={4} >

                <DropZone multiple={false} onDrop={this.onDrop.bind(this)} accept={'csv/*'}>
                  <Loadable
                  active={this.state.loading}
                  spinner
                  text='uploading...'
                  >
                  {this.state.showImage
                    ? 
                    <div style={{textAlign:'center'}}>
                      <img style={{objectFit:'contain', height:130, width: 190, margin:'auto', display:'block'}} src={this.state.file[0].preview}/> 
                      Click here to upload a different storelist...
                    </div>
                    :
                    null                  
                  }

                  { !this.state.file ? <div style={{textAlign:'center'}}><br/><br/> Drag & drop an storelist or <br/> click here to select an storelist to upload</div> : null }
                  {this.state.error
                    ?
                    <div style={{textAlign:'center'}}> <br/><br/><br/> Please upload a valid storelist. <br/> Click here to try again</div>
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