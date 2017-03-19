import React from 'react';

import {
  Row,
  Col,
  Nav,
  Grid,
  Icon,
  Form,
  Panel,
  Radio,
  Button,
  MenuItem,
  Checkbox,
  HelpBlock,
  PanelBody,
  FormGroup,
  InputGroup,
  SplitButton,
  PanelHeader,
  ButtonGroup,
  FormControl,
  PanelFooter,
  ControlLabel,
  DropdownButton,
  PanelContainer,
} from '@sketchpixy/rubix';

class DefaultForm extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-green fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Default form</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form>
                    <FormGroup controlId='emailaddress'>
                      <ControlLabel>Email address</ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-mail' />
                        </InputGroup.Addon>
                        <FormControl autoFocus type='email' placeholder='Email address' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='password'>
                      <ControlLabel>Password</ControlLabel>
                      <InputGroup>
                        <FormControl type='password' placeholder='Password' />
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-key' />
                        </InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='withIcon'>
                      <ControlLabel>With icon</ControlLabel>
                      <FormControl type='text' placeholder='Search' />
                      <FormControl.Feedback>
                        <Icon bundle='fontello' glyph='search' />
                      </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId='inputWithIcon'>
                      <ControlLabel>Input with Icon</ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-alert' />
                        </InputGroup.Addon>
                        <FormControl type='text' placeholder='Search' />
                        <FormControl.Feedback>
                          <Icon bundle='fontello' glyph='search' />
                        </FormControl.Feedback>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup controlId='disabled'>
                      <ControlLabel>Disabled</ControlLabel>
                      <FormControl disabled type='text' placeholder='Disabled' />
                    </FormGroup>
                    <FormGroup controlId='readOnly'>
                      <ControlLabel>Read only</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Read only' />
                    </FormGroup>
                    <FormGroup controlId="dropdownselect">
                      <ControlLabel>Dropdown Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="multiselect">
                      <ControlLabel>Multiple Select</ControlLabel>
                      <FormControl componentClass="select" multiple>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='textarea'>
                      <ControlLabel>Textarea</ControlLabel>
                      <FormControl componentClass='textarea' rows='3' placeholder='Some text here...' />
                    </FormGroup>
                    <FormGroup controlId="formControlsFile">
                      <ControlLabel>File input</ControlLabel>
                      <FormControl type="file" />
                      <HelpBlock>Example block-level help text here.</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                      <Checkbox name='checkbox-options' defaultValue='option1'>
                        Option one is great
                      </Checkbox>
                      <Checkbox name='checkbox-options' defaultValue='option2' defaultChecked>
                        Option two is checked
                      </Checkbox>
                      <Checkbox name='checkbox-options' defaultValue='option3' disabled>
                        Option three is disabled
                      </Checkbox>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                      <ControlLabel>Inline checkboxes</ControlLabel>
                      <div>
                        <Checkbox inline defaultValue='option1' name='inline-checkbox-options'>
                          Option one
                        </Checkbox>
                        <Checkbox inline defaultValue='option2' defaultChecked name='inline-checkbox-options'>
                          Option two
                        </Checkbox>
                        <Checkbox inline defaultValue='option3' disabled name='inline-checkbox-options'>
                          Option disabled
                        </Checkbox>
                      </div>
                      <hr/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Radios</ControlLabel>
                      <Radio defaultValue='option1' defaultChecked name='radio-options'>
                        Option 1
                      </Radio>
                      <Radio defaultValue='option2' name='radio-options'>
                        Option 2
                      </Radio>
                      <Radio defaultValue='option3' disabled name='radio-options'>
                        Option disabled
                      </Radio>
                      <hr/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Inline radios</ControlLabel>
                      <div>
                        <Radio inline defaultValue='option1' name='inline-radio-options'>
                          Option one
                        </Radio>
                        <Radio inline defaultValue='option2' defaultChecked name='inline-radio-options'>
                          Option two
                        </Radio>
                        <Radio inline defaultValue='option3' disabled name='inline-radio-options'>
                          Option disabled
                        </Radio>
                      </div>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-darkgreen45 text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightgreen'>submit</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class InputGroups extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-red fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Input groups</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form>
                    <FormGroup>
                      <ControlLabel>Checkbox addons</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={6} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Addon>
                                  <input type='checkbox' />
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder='Username' />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col xs={6} collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" placeholder='Username' />
                                <InputGroup.Addon>
                                  <input type='checkbox' />
                                </InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Radio addons</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={6} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Addon>
                                  <input type='radio' name='radioaddon' />
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder='Username' />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col xs={6} collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" placeholder='Username' />
                                <InputGroup.Addon>
                                  <input type='radio' name='radioaddon' />
                                </InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Button addons</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={6} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Button>
                                  <Button bsStyle='red'>Go!</Button>
                                </InputGroup.Button>
                                <FormControl type='text' placeholder='Username'/>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col xs={6} collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type='text' placeholder='Username'/>
                                <InputGroup.Button>
                                  <Button bsStyle='green'>Go!</Button>
                                </InputGroup.Button>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Button addons: Dual</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={12} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Button>
                                  <Button bsStyle='red'>Go!</Button>
                                </InputGroup.Button>
                                <FormControl type='text' placeholder='Username'/>
                                <InputGroup.Button>
                                  <Button bsStyle='green'>Go!</Button>
                                </InputGroup.Button>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Button with dropdowns</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={6} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <DropdownButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon"
                                  title="Action"
                                  bsStyle='primary'>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </DropdownButton>
                                <FormControl type='text' placeholder='Username'/>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col xs={6} collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type='text' placeholder='Username'/>
                                <DropdownButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon-2"
                                  title="Action"
                                  bsStyle='primary'
                                  pullRight>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </DropdownButton>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Button with dropdowns: Dual</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={12} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <DropdownButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon-dual"
                                  title="Action"
                                  bsStyle='green'>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </DropdownButton>
                                <FormControl type='text' placeholder='Username'/>
                                <DropdownButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon-dual-1"
                                  title="Action"
                                  bsStyle='orange'
                                  pullRight>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </DropdownButton>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Segmented dropdowns: Dual</ControlLabel>
                      <Grid>
                        <Row>
                          <Col xs={12} collapseLeft collapseRight>
                            <FormGroup>
                              <InputGroup>
                                <SplitButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon-dual"
                                  title="Action"
                                  bsStyle='green'>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </SplitButton>
                                <FormControl type='text' placeholder='Username'/>
                                <SplitButton
                                  componentClass={InputGroup.Button}
                                  id="input-dropdown-addon-dual-1"
                                  title="Action"
                                  bsStyle='orange'
                                  pullRight>
                                  <MenuItem key="1" active>Action</MenuItem>
                                  <MenuItem key="2">Another Action</MenuItem>
                                  <MenuItem key="3">Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem key="4">Separated link</MenuItem>
                                </SplitButton>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Grid>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-red text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightred'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightred'>submit</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class HorizontalForm extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-darkblue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Horizontal form</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form horizontal>
                    <FormGroup controlId='blockhelp'>
                      <Col sm={3} componentClass={ControlLabel}>Block help</Col>
                      <Col sm={9}>
                        <FormControl type='text' placeholder='Enter text' />
                        <HelpBlock>A block of help text.</HelpBlock>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlinehelp'>
                      <Col sm={3} componentClass={ControlLabel}>Inline help</Col>
                      <Col sm={9}>
                        <FormControl type='text' placeholder='Enter text' className='inline' />
                        <HelpBlock className='inline'>Inline help.</HelpBlock>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroup'>
                      <Col sm={3} componentClass={ControlLabel}>Input group</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-user' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Username' className='inline' />
                          <HelpBlock className='inline'>Inline help.</HelpBlock>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='inlineinputgroupmail'>
                      <Col sm={3} componentClass={ControlLabel}>Email address</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-mail' />
                          </InputGroup.Addon>
                          <FormControl type='email' placeholder='Email address' />
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='horizontalpassword'>
                      <Col sm={3} componentClass={ControlLabel}>Password</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <FormControl type='password' placeholder='Password' />
                          <InputGroup.Addon>
                            <Icon glyph='icon-fontello-key' />
                          </InputGroup.Addon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='withIcon'>
                      <Col sm={3} componentClass={ControlLabel}>With icon</Col>
                      <Col sm={9}>
                        <FormControl type='text' placeholder='Search' />
                        <FormControl.Feedback>
                          <Icon bundle='fontello' glyph='search' />
                        </FormControl.Feedback>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='searchbtnicon'>
                      <Col sm={3} componentClass={ControlLabel}>Input group with button</Col>
                      <Col sm={9}>
                        <InputGroup>
                          <FormControl type='text' placeholder='Enter keywords here ...' />
                          <InputGroup.Addon className='plain'>
                            <Button>
                              <span>Search </span>
                              <Icon bundle='fontello' glyph='search' />
                            </Button>
                          </InputGroup.Addon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='staticControl'>
                      <Col sm={3} componentClass={ControlLabel}>Email</Col>
                      <Col sm={9}>
                        <FormControl.Static>support@sketchpixy.com</FormControl.Static>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='disabledhorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Disabled</Col>
                      <Col sm={9}>
                        <FormControl type='text' placeholder='Disabled' disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='readonlyhorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Read only</Col>
                      <Col sm={9}>
                        <FormControl type='text' placeholder='Read only' readOnly />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='dropdownselecthorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Dropdown Select</Col>
                      <Col sm={9}>
                        <FormControl componentClass='select' defaultValue='1'>
                          <option value='1'>Option 1</option>
                          <option value='2'>Option 2</option>
                          <option value='3'>Option 3</option>
                          <option value='4'>Option 4</option>
                          <option value='5'>Option 5</option>
                        </FormControl>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='multiselecthorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Multiple Select</Col>
                      <Col sm={9}>
                        <FormControl componentClass='select' multiple>
                          <option value='1'>Option 1</option>
                          <option value='2'>Option 2</option>
                          <option value='3'>Option 3</option>
                          <option value='4'>Option 4</option>
                          <option value='5'>Option 5</option>
                        </FormControl>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='textareahorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>Textarea</Col>
                      <Col sm={9}>
                        <FormControl componentClass='textarea' rows='3' placeholder='Some text here...' />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='fileinputhorizontal'>
                      <Col sm={3} componentClass={ControlLabel}>File input</Col>
                      <Col sm={9}>
                        <FormControl type='file' />
                        <HelpBlock>Example block-level help text here.</HelpBlock>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='checkboxes'>
                      <Col sm={3} componentClass={ControlLabel}>Checkboxes</Col>
                      <Col sm={9}>
                        <Checkbox defaultValue='option1' name='horizontal-checkbox-options'>
                          Option one is great
                        </Checkbox>
                        <Checkbox defaultValue='option2' defaultChecked name='horizontal-checkbox-options'>
                          Option two is checked
                        </Checkbox>
                        <Checkbox defaultValue='option3' disabled name='horizontal-checkbox-options'>
                          Option three is disabled
                        </Checkbox>
                      </Col>
                      <hr/>
                    </FormGroup>
                    <FormGroup controlId='inline-checkboxes'>
                      <Col sm={3} componentClass={ControlLabel}>Inline checkboxes</Col>
                      <Col sm={9}>
                        <div>
                          <Checkbox inline defaultValue='option1' name='horizontal-inline-checkbox-options'>
                            Option 1
                          </Checkbox>
                          <Checkbox inline defaultValue='option2' defaultChecked name='horizontal-inline-checkbox-options'>
                            Option 2
                          </Checkbox>
                          <Checkbox inline defaultValue='option3' disabled name='horizontal-inline-checkbox-options'>
                            Disabled
                          </Checkbox>
                        </div>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='radios'>
                      <Col sm={3} componentClass={ControlLabel}>Radios</Col>
                      <Col sm={9}>
                        <Radio defaultValue='option1' defaultChecked name='horizontal-radio-options'>
                          Option 1
                        </Radio>
                        <Radio defaultValue='option2' name='horizontal-radio-options'>
                          Option 2
                        </Radio>
                        <Radio defaultValue='option3' disabled name='horizontal-radio-options'>
                          Option disabled
                        </Radio>
                      </Col>
                      <hr/>
                    </FormGroup>
                    <FormGroup controlId='inline-radios'>
                      <Col sm={3} componentClass={ControlLabel}>Inline radios</Col>
                      <Col sm={9}>
                        <div>
                          <Radio inline defaultValue='option1' name='horizontal-inline-radio-options'>
                            Option 1
                          </Radio>
                          <Radio inline defaultValue='option2' defaultChecked name='horizontal-inline-radio-options'>
                            Option 2
                          </Radio>
                          <Radio inline defaultValue='option3' disabled name='horizontal-inline-radio-options'>
                            Disabled
                          </Radio>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-blue text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightblue'>submit</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class HorizontalFormSizing extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <PanelHeader className='bg-purple fg-white'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>Horizontal form: Sizing</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Form horizontal>
                  <FormGroup controlId='largeinput' bsSize='large'>
                    <Col sm={3} componentClass={ControlLabel}>Large input</Col>
                    <Col sm={9}>
                      <FormControl type='text' placeholder='Large input' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='defaultinput'>
                    <Col sm={3} componentClass={ControlLabel}>Default input</Col>
                    <Col sm={9}>
                      <FormControl type='text' placeholder='Default input' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='smallinput' bsSize='small'>
                    <Col sm={3} componentClass={ControlLabel}>Small input</Col>
                    <Col sm={9}>
                      <FormControl type='text' placeholder='Small input' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='largeselect' bsSize='large'>
                    <Col sm={3} componentClass={ControlLabel}>Large Select</Col>
                    <Col sm={9}>
                      <FormControl componentClass='select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='defaultselect'>
                    <Col sm={3} componentClass={ControlLabel}>Default Select</Col>
                    <Col sm={9}>
                      <FormControl componentClass='select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='largeselect' bsSize='small'>
                    <Col sm={3} componentClass={ControlLabel}>Small Select</Col>
                    <Col sm={9}>
                      <FormControl componentClass='select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        <PanelFooter className='bg-purple text-right'>
          <Grid>
            <Row>
              <Col xs={12}>
                <br/>
                <div>
                  <Button outlined bsStyle='lightpurple'>cancel</Button>{' '}
                  <Button outlined bsStyle='lightpurple'>submit</Button>
                </div>
                <br/>
              </Col>
            </Row>
          </Grid>
        </PanelFooter>
      </PanelContainer>
    );
  }
}

export default class Controls extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={6} collapseRight>
          <DefaultForm />
          <InputGroups />
        </Col>
        <Col sm={6}>
          <HorizontalForm />
          <HorizontalFormSizing />
        </Col>
      </Row>
    );
  }
}
