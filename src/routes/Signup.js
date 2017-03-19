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
export default class Signup extends React.Component {
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
                          <h3 style={{margin: 0, padding: 25}}>Sign up</h3>
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={::this.back}>
                              <FormGroup controlId='username'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Username' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='emailaddress'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroup.Addon>
                                  <FormControl type='email' className='border-focus-blue' placeholder='support@sketchpixy.com' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={12} collapseLeft collapseRight>
                                      <Button type='submit' outlined lg bsStyle='blue' block onClick={::this.back}>Create account</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                          <div className='bg-hoverblue fg-black50 text-center' style={{padding: 25, paddingTop: 12.5}}>
                            <div style={{marginBottom: 12.5}}>SIGN UP WITH</div>
                            <Grid>
                              <Row>
                                <Col xs={12} sm={6} smCollapseRight>
                                  <Button block type='submit' id='facebook-btn' lg bsStyle='darkblue' onClick={::this.back}>
                                    <Icon glyph='icon-fontello-facebook' />
                                    <span>Facebook</span>
                                  </Button>
                                  <br className='visible-xs' />
                                </Col>
                                <Col xs={12} sm={6}>
                                  <Button block type='submit' id='twitter-btn' lg bsStyle='darkblue' onClick={::this.back}>
                                    <Icon glyph='icon-fontello-twitter' />
                                    <span>Twitter</span>
                                  </Button>
                                </Col>
                              </Row>
                            </Grid>
                            <div style={{marginTop: 25}}>
                              Already have an account? <Link to={::this.getPath('login')}>Login</Link>
                            </div>
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
