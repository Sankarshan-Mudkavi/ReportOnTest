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
} from '@sketchpixy/rubix';
import actions from '../redux/actions';


class NewAccount extends React.Component {
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
    this.props.next(this.state.value);
  }

  render() {
    return (
      <Modal backdrop={'static'} keyboard={false} show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Give your NEW Account a Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId='username'>
            <ControlLabel>Name *</ControlLabel>
            <FormControl type='text' name='name' className='required'
              onChange={(event) => {
                
                var stringValue = event.target.value.replace(/[^A-Z0-9]+/ig, "_").toLowerCase();
                
                this.setState({
                  value:stringValue
                })
              }} />
          </FormGroup>
          <p> <br/><br/>Your account will be at <br/> http://reportOn.com/accounts/{this.state.value}</p>
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
    this.state = { 
      showModal: false,
      passedProp: props.passedProp || {},
      
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.passedProp != this.props.passedProp) {
      this.setState({
        passedProp: nextProps.passedProp
      });
    }
  }



  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  next(){
    this.props.next(this.state.value.file[0]);
  }



  onDrop(file){
    console.log("dropped file " + JSON.stringify(file));
    if (file.length>0) {
      this.setState({
       file,
       showImage:true,
       error:false
      });
    } else {
      console.log("in ondrop else");
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
          <Modal.Title>Upload a Photo for {this.state.passedProp.accountName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
            
              <Col md={6} mdOffset={3} >

                <DropZone multiple={false} onDrop={this.onDrop.bind(this)} accept={'image/*'}>
                  
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
                </DropZone>
              </Col>
            </Row>
          </Grid>
          
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' disabled={!this.state.showImage} onClick={::this.next}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}





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



@connect((state) => {
  // console.log("doing some connection shit");
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
    // if nextProps.
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
    
    this.setState({
      editor: {
        accountName: v
      }
    });

    this.uploadPhoto();
    this.NewAccount.close();
    
  }

  uploadedPhoto(v) {
    
    var editor = Object.assign({}, this.state.editor);
    editor.accountPhoto = v;
    this.setState({
      editor
    });
  }


  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  renderAccounts(result) {
    var resLen = result.length;
    
    var colLen = Math.ceil(resLen /2);
    var resArray = result.map((account, i) => {
      
      return (
        <PanelContainer key={i}>
          <Panel>
            <PanelBody style={{padding: 0}}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>{account.name}</h3>
                      <img style={{objectFit:'contain', height:130, width: 190, margin:'auto', display:'block'}} src={account.img_src}/> 
                    <Row style={{marginTop:5, marginBottom:10}}>
                      
                        <Col sm={7} style={{paddingTop:4, }}>
                        <p>Campaigns: 0</p>
                        </Col>
                        <Col sm={3}>
                        <Button bsStyle='primary'>Open</Button>
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
    //get bootstrap dimensions... 
    //if we only have one column, we need to make the shit 12.
    //if we have two columns, we need shit to be 6
    //3 columns = 4

    //if we have 6 columns, our shit will be maximum 4
    var gridVar = Math.max(4,12/colLen);

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

    //we have this shit split into 2's
    //
    var retArray = [];
    var i = 0;

    while (colArray.length > 3) {

      retArray[i] = (
        <Row key={i}>
        {colArray.splice(0,3)}
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
      <UploadPhoto ref={(c) => this.UploadPhoto = c} passedProp={this.state.editor} next={(v) => this.uploadedPhoto(v)}/>
      <NewAccount ref={(c) => this.NewAccount = c} next={(v) => this.newedAccount(v)}/>
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
