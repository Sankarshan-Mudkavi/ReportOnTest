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



@withRouter
export default class Login extends React.Component {
  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
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

  render() {
    return (
      <div id='auth-container' className='login'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{padding: 0}}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{margin: 0, padding: 25}}>Sign in to ReportON</h3>
                        </div>
                        <div>
                          
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={::this.back}>
                              <FormGroup controlId='emailaddress'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon style={{backgroundColor:'transparent'}}>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='email' style={{borderWidth:0, borderBottomWidth:3, padding:0}} className='border-focus-blue' placeholder='support@sketchpixy.com' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon style={{backgroundColor:'transparent'}}>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' style={{borderWidth:0, borderBottomWidth:3, padding:0}} className='border-focus-blue' placeholder='password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col  xs={12} md={8} style={{flex:1, alignItems:'flex-end'}} className='text-center'>
                                      <Button lg type='submit' style={{backgroundColor:'#4F555b'}} bsStyle='grey' onClick={::this.back}>ReportON</Button>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col  xs={12} md={8} style={{flex:1, alignItems:'flex-end'}} className='text-center'>
                                      <Button lg type='submit' bsStyle='link' onClick={::this.back}>Forgot Password?</Button>
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
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
