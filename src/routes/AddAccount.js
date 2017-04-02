import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import DropZone from 'react-dropzone';
import {
  Row,
  Col,
  Icon,
  Lead,
  Grid,
  Panel,
  Modal,
  Button,
  PanelBody,
  LoremIpsum,
  PanelHeader,
  PanelContainer,
  ResponsiveEmbed,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
} from '@sketchpixy/rubix';
import actions from '../redux/actions';
import Loadable from 'react-loading-overlay';
// var request = require('superagent');
// var nocache = require('superagent-no-cache');







class AddAccountItem extends React.Component {
  render() {
    return (
      <PanelContainer controls={false}>
        <Panel>
          <PanelHeader>
            <div style={{position: 'relative', height: 350}}>
              <div className='blog-post-header'/>
              <div className='text-center' style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12} className='fg-white'>
                      <div style={{maxWidth: 600, margin: 'auto'}}>
                        <h3 style={{margin: 25, fontWeight: 100, color: 'rgba(255,255,255,0.35)'}}>&mdash;</h3>
                        <h1 style={{fontWeight: 800}}>Add a New Client Account</h1>
                        <p style={{fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: 25}}>
                          {/*}
                          <LoremIpsum query='5s' className='hidden-xs' />
                          fucking shit
                          <LoremIpsum query='3s' className='visible-xs' /> */}
                          

                        </p>
                        <div className='text-center blog-post-btn-holder'>
                        <br/>
                        <Button  bsStyle='primary' className='btn-lg' onClick={::this.props.newAccount}>
                            <Icon style={{fontSize:25}} glyph='icon-fontello-folder-add' />
                            {'    '}{'    '} Click to add new account
                        </Button>
                        </div>
                        {/*}
                        <div className='text-center blog-post-btn-holder'>
                          <Button bsStyle='darkblue' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-facebook' />
                          </Button>{' '}
                          <Button bsStyle='blue' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-twitter' />
                          </Button>{' '}
                          <Button bsStyle='red' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-gplus' />
                          </Button>{' '}
                          <Button bsStyle='orange75' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-instagram' />
                          </Button>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
          </PanelHeader>
        
        </Panel>
      </PanelContainer>
    );
  }
}


@withRouter
@connect((state) => {
  return state
})
export default class AddAccount extends React.Component {

  constructor(props) {
    super(props);
    console.log("")
    this.state={

    }
  }

  componentWillReceiveProps(nextProps) {

  }

  newAccount() {
    this.NewAccount.open();
  }

  uploadPhoto() {
    this.UploadPhoto.open();
  }

  pickColor(name) {
    this.PickColor.open();
  }
  
  newedAccount(v){
    this.props.dispatch(actions.createAccount({title: v}))
    .then((resp) => {
      console.log('dunno what this is ' + JSON.stringify(this.props.accounts.editing));
      this.setState({
        editor: {
          title: v,
          id: this.props.accounts.editing.id
        }
      });
      this.uploadPhoto();
      this.NewAccount.close();
    });
  }

  uploadedPhoto(v) {
    var editor = Object.assign({}, this.state.editor);
    editor.img = v;
    var userScreen= this;
    this.props.dispatch(actions.createAccount(editor))
    .then(()=>{
      userScreen.setState({
        photoLoading: false
      })
    });
    this.setState({
      editor,
      photoLoading:true
    });
  }


  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  renderAccounts(result) {
    var resLen = result.length;
    //lets say this is 4/
    var colLen = Math.ceil(resLen /2);
    //collen = 2
    var resArray = result.map((account, i) => {
      return (
        <PanelContainer key={i}>
          <Panel>
            <PanelBody style={{padding: 0}}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>{account.title}</h3>
                      <img style={{objectFit:'contain', height:130, width: 190, margin:'auto', display:'block'}} src={account.img_url}/> 
                      <Row style={{marginTop:5, marginBottom:10}}>
                      <Col sm={8} style={{paddingTop:4, }}>
                      <p>Campaigns: 0</p>
                      </Col>
                      <Col sm={4}>
                      <Button className='pull-right' onClick={() => {
                        console.log("clicked open for account + " + account.title);
                        this.props.router.push('/ltr/campaigns/' + account.title)}} bsStyle='primary'>Open</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
          </Panel>
        </PanelContainer>
      );
    })
    var colArray=[];
    var colArrayIndex = 0;
    var gridVar = Math.min(6,Math.max(4,12/colLen)); 
    while (resArray.length > 1) {
      colArray[colArrayIndex] = (
        <Col sm={gridVar} key={colArrayIndex} >
          {resArray.splice(0,1)}  
        </Col>
      );
      colArrayIndex++;
    }
    colArray[colArrayIndex] = (
      <Col sm={gridVar} key={colArrayIndex} >
      {resArray}
      </Col>
    )
    var colArrayLen = 12/gridVar
    var retArray = [];
    var i = 0;
    while (colArray.length > colArrayLen) {
      retArray[i] = (
        <Row key={i}>
        {colArray.splice(0,colArrayLen)}
        </Row>
      );
      i++;
    }
    retArray[i] = (
      <Row key={i}>
      {colArray}
      </Row>
    )
      

    return retArray;
    
  }

  render() {
    let { accounts, dispatch } = this.props;
    let { result, error } = accounts;


    return (
      <div>
      <UploadPhoto ref={(c) => this.UploadPhoto = c} passedProp={this.state.editor} uploadPhoto={(v) => this.uploadedPhoto(v)}/>
      <NewAccount ref={(c) => this.NewAccount = c} result={result} loading={this.state.photoLoading} next={(v) => this.newedAccount(v)}/>
      <Row>
        <AddAccountItem
          newAccount={::this.newAccount}
          tag='ENTERTAINMENT'
          comments='10'>
        </AddAccountItem>
      </Row>
      <div>
        {this.renderAccounts(result)} 
      </div>
      </div>
    );
  }
}

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      value:' '
     };
  }

  close() {
    this.setState({ showModal: false, value: ' ' });
  }

  open() {
    this.setState({ showModal: true, value: ' ' });
  }

  next(){

    this.props.next(this.state.value);
  }

  getValidationState(){
    const value = this.state.value.replace(/[^A-Z0-9]+/ig, "_").toLowerCase();
    // console.log("result is " + JSON.stringify(this.props.result));
    var result = this.props.result.map((res) => {
      var title = res.title || 'unknown';
      return title.replace(/[^A-Z0-9]+/ig, "_").toLowerCase();
    }) || [];
    if (result.indexOf(value) != -1) {
      return 'error'
    } else {
      return 'success'
    }
  }

  render() {
    return (
     
        <Modal backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Give your NEW Account a Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FormGroup controlId='name' validationState={this.getValidationState()}>
              <ControlLabel>Name *</ControlLabel>
              <FormControl type='text' name='name' className='required'
                onChange={(event) => {
                  this.setState({
                    value:event.target.value
                  })
                }} />
                <FormControl.Feedback />
                <HelpBlock> Please ensure the account name does not already exist</HelpBlock>
            </FormGroup>
            <p> <br/><br/>Your account will be at <br/> http://reportOn.com/accounts/{this.state.value.replace(/[^A-Z0-9]+/ig, "_").toLowerCase()}</p>

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
          <Modal.Title>Upload a Photo for {this.state.passedProp.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
            
              <Col sm={6} smOffset={3} xs={6} xsOffset={3} >
              
            
                  <div>
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
                    </div>
                  
                
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
