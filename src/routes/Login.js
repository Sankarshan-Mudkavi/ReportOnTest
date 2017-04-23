import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';
import {
  Row,
  Col,
  Icon,
  Grid,
  Form,
  Badge,
  Panel,
  Button,
  PanelBody,
  FormGroup,
  LoremIpsum,
  InputGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';
import { connect } from 'react-redux';
import actions from '../redux/actions';
// import { push } from 'react-router';
import Loadable from 'react-loading-overlay';


@withRouter
@connect((state) => {
  return state
})
export default class Login extends React.Component {
  back(e) {
    console.log(';back?!@?!?@')
    e.preventDefault();
    e.stopPropagation();
    var userScreen = this;
    this.setState({
      loading:true
    });
    this.props.dispatch(actions.fetchLogin({username: this.state.email, password: this.state.password}))
    .then(() => {
      console.log("something just fetched login??!?!");
      var loginStatus = userScreen.props.loginStatus || {};
      var isLoggedIn = loginStatus.isLoggedIn;
      if (isLoggedIn) {
        var loginRedir = loginStatus.loginRedir || '/ltr/account/AddAccount';
        userScreen.props.dispatch(actions.fetchData('accounts'))
        .then(() => {
          userScreen.setState({
            loading:false
          });
          console.log("pushing to loginREdix " + loginRedir);
          userScreen.props.router.push(loginRedir);
        });
      } else {
        userScreen.setState({
            loading:false
          });
      }
    });
    // 
  }
  constructor(props) {
    super(props);
    this.state={
      loading:false
    }
  }

  componentDidMount() {
    $('html').addClass('authentication');
  }

  componentWillUnmount() {
    $('html').removeClass('authentication');
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    });
  }

  getValidationState(){
    var error = this.props.loginStatus.loginError;
    return error ? 'error' : null;
  }

  render() {
    return (
      <div id='auth-container' className='login'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <Loadable
                    active={this.state.loading}
                    spinner
                    text='Trying to log you in...'
                  >
                    <PanelContainer controls={false}>
                      <Panel>
                        <PanelBody style={{padding: 0}}>
                          <div className='text-center bg-darkblue fg-white'>
                            <h3 style={{margin: 0, padding: 25}}>Sign in to ReportON</h3>
                          </div>
                          <div>
                            
                            <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                              <Form onSubmit={::this.back}>
                                <FormGroup controlId='emailaddress' validationState={this.getValidationState()}>
                                  <InputGroup bsSize='large'>
                                    <InputGroup.Addon style={{backgroundColor:'transparent'}}>
                                      <Icon glyph='icon-fontello-mail' />
                                    </InputGroup.Addon>
                                    <FormControl onChange={e => this.handleEmailChange(e)} autoFocus type='email' style={{borderWidth:0, borderBottomWidth:3, padding:0}} className='border-focus-blue' placeholder='hello@okeylabs.com' />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup controlId='password' validationState={this.getValidationState()}>
                                  <InputGroup bsSize='large'>
                                    <InputGroup.Addon style={{backgroundColor:'transparent'}}>
                                      <Icon glyph='icon-fontello-key' />
                                    </InputGroup.Addon>
                                    <FormControl type='password' onChange={e => this.handlePasswordChange(e)} style={{borderWidth:0, borderBottomWidth:3, padding:0}} className='border-focus-blue' placeholder='password' />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <Grid>
                                    <Row>
                                      <Col  xs={12} md={12} style={{flex:1, alignItems:'flex-end'}} className='text-center'>
                                        <Button lg type='submit' style={{backgroundColor:'#4F555b'}} bsStyle='grey'>ReportON</Button>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col  xs={12} md={12} style={{flex:1, alignItems:'flex-end'}} className='text-center'>
                                        {/*<Button lg type='submit' bsStyle='link'>Forgot Password?</Button>*/}
                                      </Col>
                                    </Row>
                                  </Grid>
                                </FormGroup>
                              </Form>
                            </div>
                          </div>
                        </PanelBody>
                      </Panel>
                    </PanelContainer>
                  </Loadable>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
