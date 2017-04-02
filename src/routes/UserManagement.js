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
// var $ = require( 'jquery' );
// $.DataTable = require('datatables.net');
// var cunt = require( 'datatables.net-buttons' )( window, $ )



@connect((state) => {
  return state
})
class DatatableComponent extends React.Component {

  constructor(props) {
    super(props);
    
    var users = [['mike', 'alonso', 'mike@alonso.com', '391 charles street', 'kitchener', 'ON', '226-394-2981']];
    this.state={
      users
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
    this.table = $(ReactDOM.findDOMNode(this.example)).DataTable({
        // 'dom': "flBtrip",
        
        className:'compact',
        'buttons': [
           {
            extend: 'print',
            className:'btn-outlined btn btn-md btn-success'
            }
        ],
        responsive: true,
        columnDefs: [
          { targets: '_all', 
            className: 'dt-body-center dt-head-center word-break', 
           }
        ],
        columns: [
            
            { title: "First Name" },
            { title: "Last Name" },
            { title: "Email" },
            { title: "Address" },
            { title: "City" },
            { title: "Province" },
            { title: "Phone" },
            

        ],
        data:userScreen.state.users

    });

    this.table.buttons().container()
        .appendTo( $('.dataTables_length' ) );
  }


  newUser() {
    this.NewUser.open();
  }

  uploadPhoto() {
    this.UploadPhoto.open();
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


    this.uploadPhoto();
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
        <Button outlined lg style={{marginBottom: 2}} bsStyle='success' className='text-center'onClick={::this.newUser}>Invite Users</Button>
        </Col> 
      </Row>
      </Grid>
      <br/>
      <UploadPhoto ref={(c) => this.UploadPhoto = c} passedProp={this.state.editor} uploadPhoto={(v) => this.uploadedPhoto(v)}/>
      <NewUser ref={(c) => this.NewUser = c} 
        next={(v,desc) => {
          console.log("nexted bitches");

          // this.newedUser(v, desc)
          }
        }
        />
      <Table ref={(c) => this.example = c} className='display compact' cellSpacing='0' width='100%'>
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


class NewUser extends React.Component {
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

  next(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.next(this.state.value, this.state.desc);
  }


  render() {
    return (
      <Modal backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add Users</Modal.Title>
        </Modal.Header>
        <Form onSubmit={::this.next}>
        <Modal.Body>
        <h4> Let's make this personal. Complete your new user's information to create their account</h4>
        

          <FormGroup controlId='username'>
            <ControlLabel>Email *</ControlLabel>
            <FormControl type='email' autoFocus name='name' className='required'
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
                          fname:event.target.value
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
                        lname:event.target.value
                      })
                    }} />
                </FormGroup>
              </Col>
            </Row>
          </Grid>


          </FormGroup>
        

          {/*<p> <br/><br/>Your campaign will be at <br/> http://reportOn.com/campaigns/{this.state.value}</p>*/}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={(this.state.value.length < 1)} type='submit'>Next</Button>
        </Modal.Footer>
        </Form>
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


