import React from 'react';

import {
  Row,
  Col,
  Grid,
  Panel,
  Button,
  MenuItem,
  PanelBody,
  PanelHeader,
  ButtonGroup,
  SplitButton,
  ButtonToolbar,
  PanelContainer,
  DropdownButton,
  SplitHoverButton,
  DropdownHoverButton,
} from '@sketchpixy/rubix';

class DropdownsAndDropups extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-darkgreen45 fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Dropdowns and Dropups</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownButton bsStyle='darkgreen45' title='Basic' id='dropdown-basic'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton bsStyle='lightblue' title='With headers' id='dropdown-headers'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownButton outlined bsStyle='darkgreen45' title='Outlined' id='dropdown-outlined' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton bsStyle='orange' title='Disabled' id='dropdown-disabled' disabled outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownButton bsStyle='darkgreen45' title='Basic' id='dropdown-basic-dropup' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton bsStyle='lightblue' title='With headers' id='dropdown-headers-dropup' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownButton outlined bsStyle='darkgreen45' title='Outlined' id='dropdown-outlined-dropup' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton bsStyle='orange' title='Disabled' id='dropdown-disabled-dropup' disabled dropup outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class DropdownsAndDropupsHover extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-brown fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Dropdowns and Dropups (Hover buttons)</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownHoverButton bsStyle='brown' title='Basic' id='dropdown-hover-basic'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                  <br />
                  <div>
                    <DropdownHoverButton bsStyle='lightblue' title='With headers' id='dropdown-hover-headers'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownHoverButton outlined bsStyle='darkgreen45' title='Outlined' id='dropdown-hover-outlined' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                  <br />
                  <div>
                    <DropdownHoverButton bsStyle='orange' title='Disabled' id='dropdown-hover-disabled' disabled outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownHoverButton bsStyle='brown' title='Basic' id='dropdown-hover-basic-dropup' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                  <br />
                  <div>
                    <DropdownHoverButton bsStyle='lightblue' title='With headers' id='dropdown-hover-headers-dropup' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownHoverButton outlined bsStyle='darkgreen45' title='Outlined' id='dropdown-hover-outlined-dropup' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                  <br />
                  <div>
                    <DropdownHoverButton bsStyle='orange' title='Disabled' id='dropdown-hover-disabled-dropup' disabled dropup outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownHoverButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class DropdownsAndDropupsInverse extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow containerClasses='bg-darkgreen45 fg-white'>
        <Panel>
          <PanelHeader className='bg-darkgreen45 fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Dropdowns and Dropups (inverse)</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownButton inverse bsStyle='darkgreen45' title='Basic' id='dropdown-basic-inverse'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton inverse bsStyle='lightblue' title='With headers' id='dropdown-headers-inverse'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownButton inverse bsStyle='darkgreen45' title='Outlined' id='dropdown-outlined-inverse' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton inverse bsStyle='orange' title='Disabled' id='dropdown-disabled-inverse' disabled>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
              </Row>
              <hr className='border-lightgreen' />
              <Row>
                <Col xs={6}>
                  <div>
                    <DropdownButton inverse bsStyle='darkgreen45' title='Basic' id='dropdown-basic-dropup-inverse' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton inverse bsStyle='lightblue' title='With headers' id='dropdown-headers-dropup-inverse' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <DropdownButton inverse bsStyle='darkgreen45' title='Outlined' id='dropdown-outlined-dropup-inverse' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                  <br />
                  <div>
                    <DropdownButton inverse bsStyle='orange' title='Disabled' id='dropdown-disabled-dropup-inverse' disabled dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </DropdownButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class SplitDropdownsAndDropups extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-pinkishred fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Split Button Dropdowns and Dropups</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitButton bsStyle='pinkishred' title='Basic' id='split-dropdown-basic'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton bsStyle='lightblue' title='With headers' id='split-dropdown-headers'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitButton outlined bsStyle='darkgreen45' title='Outlined' id='split-dropdown-outlined' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton bsStyle='orange' title='Disabled' id='split-dropdown-disabled' disabled outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitButton bsStyle='pinkishred' title='Basic' id='split-dropdown-basic-dropup' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton bsStyle='lightblue' title='With headers' id='split-dropdown-headers-dropup' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitButton outlined bsStyle='darkgreen45' title='Outlined' id='split-dropdown-outlined-dropup' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton bsStyle='orange' title='Disabled' id='split-dropdown-disabled-dropup' disabled dropup outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class SplitDropdownsAndDropupsHover extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-blue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Split Button Dropdowns and Dropups (Hover buttons)</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitHoverButton bsStyle='blue' title='Basic' id='split-hover-dropdown-basic'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                  <br />
                  <div>
                    <SplitHoverButton bsStyle='lightblue' title='With headers' id='split-hover-dropdown-headers'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitHoverButton outlined bsStyle='darkgreen45' title='Outlined' id='split-hover-dropdown-outlined' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                  <br />
                  <div>
                    <SplitHoverButton bsStyle='orange' title='Disabled' id='split-hover-dropdown-disabled' disabled outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitHoverButton bsStyle='blue' title='Basic' id='split-hover-dropdown-basic-dropup' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                  <br />
                  <div>
                    <SplitHoverButton bsStyle='lightblue' title='With headers' id='split-hover-dropdown-headers-dropup' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitHoverButton outlined bsStyle='darkgreen45' title='Outlined' id='split-hover-dropdown-outlined-dropup' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                  <br />
                  <div>
                    <SplitHoverButton bsStyle='orange' title='Disabled' id='split-hover-dropdown-disabled-dropup' disabled dropup outlined>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitHoverButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class SplitDropdownsAndDropupsInverse extends React.Component {
  render() {
    return (
      <PanelContainer noOverflow containerClasses='bg-pinkishred fg-white'>
        <Panel>
          <PanelHeader className='bg-pinkishred fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Split Button Dropdowns and Dropups (inverse)</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitButton inverse bsStyle='pinkishred' title='Basic' id='split-dropdown-basic-inverse'>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton inverse bsStyle='lightblue' title='With headers' id='split-dropdown-headers-inverse'>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitButton inverse bsStyle='pinkishred' title='Outlined' id='split-dropdown-outlined-inverse' pullRight>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton inverse bsStyle='orange' title='Disabled' id='split-dropdown-disabled-inverse' disabled>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
              </Row>
              <hr className='border-lightred' />
              <Row>
                <Col xs={6}>
                  <div>
                    <SplitButton inverse bsStyle='darkgreen45' title='Basic' id='split-dropdown-basic-dropup-inverse' dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton inverse bsStyle='lightblue' title='With headers' id='split-dropdown-headers-dropup-inverse' dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
                <Col xs={6} className='text-right'>
                  <div>
                    <SplitButton inverse bsStyle='darkgreen45' title='Outlined' id='split-dropdown-outlined-dropup-inverse' pullRight dropup>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                  <br />
                  <div>
                    <SplitButton inverse bsStyle='orange' title='Disabled' id='split-dropdown-disabled-dropup-inverse' disabled dropup>
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem eventKey="1">Action</MenuItem>
                      <MenuItem eventKey="2">Another action</MenuItem>
                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                      <MenuItem divider />
                      <MenuItem header>Dropdown Header</MenuItem>
                      <MenuItem disabled eventKey="4">Disabled link</MenuItem>
                      <MenuItem eventKey="5">Separated link</MenuItem>
                    </SplitButton>
                  </div>
                </Col>
              </Row>
              <br />
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

export default class Dropdowns extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} collapseRight>
            <DropdownsAndDropups />
            <DropdownsAndDropupsInverse />
            <DropdownsAndDropupsHover />
          </Col>
          <Col sm={6}>
            <SplitDropdownsAndDropups />
            <SplitDropdownsAndDropupsInverse />
            <SplitDropdownsAndDropupsHover />
          </Col>
        </Row>
      </div>
    );
  }
}
