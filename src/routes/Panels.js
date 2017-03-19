import React from 'react';

import {
  Row,
  Col,
  Nav,
  Tab,
  Icon,
  Grid,
  Panel,
  NavItem,
  MenuItem,
  PanelLeft,
  PanelBody,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  PanelFooter,
  NavDropdown,
  PanelContainer,
  PanelTabContainer,
} from '@sketchpixy/rubix';

class BasicPanel extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Basic Panel</h3>
                  <p>
                    <LoremIpsum query='4s' />
                  </p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class PanelBodyFooterWithoutHeader extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <p>
                    <LoremIpsum query='5s' />
                  </p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-red'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>Panel Body + Footer without Panel Header</h4>
                  <h6>Mini Heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class PanelBodyHeaderWithoutFooter extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelHeader className='bg-green'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>Panel Body + Header without Panel Footer</h4>
                  <h6>Mini Heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <p>
                    <LoremIpsum query='5s' />
                  </p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class PanelBodyHeaderAndFooter extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelHeader className='bg-blue'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h3>Panel Header</h3>
                  <h6>Mini Heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <p>
                  <LoremIpsum query='5s' />
                </p>
              </Col>
            </Row>
          </Grid>
          </PanelBody>
          <PanelFooter className='bg-lightblue'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h3>Panel Footer</h3>
                  <h6>Mini heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class PanelBodyHeaderPlainTabFooter extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeTab: ''
    };
  }

  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey
    });
  }

  getItemProps(eventKey) {
    return {
      eventKey,
      active: this.state.activeTab === eventKey
    };
  }

  render() {
    return (
      <PanelTabContainer id='panel-body-header-tab-footer' defaultActiveKey="home">
        <Panel>
          <PanelHeader className='bg-purple fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
              <Col xs={12}>
                <h4>Panel Header + Plain Tabs</h4>
              </Col>
              </Row>
            </Grid>
            <Nav bsStyle="tabs" className='plain' onSelect={::this.handleActiveState}>
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
              <NavDropdown title={<Icon bundle='fontello' glyph='angle-down'/>} noCaret bsStyle='purple' pullRight>
                <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
              </NavDropdown>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="home">
                      <h4>home-0</h4>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h4>user-0</h4>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h4>cog-0</h4>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fat">
                      <h4>fat-0</h4>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mdo">
                      <h4>mdo-0</h4>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-lightpurple'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>Panel Footer</h4>
                  <h6>Mini heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelBodyHeaderFooterWithPlainTabs extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeTab: ''
    };
  }

  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey
    });
  }

  getItemProps(eventKey) {
    return {
      eventKey,
      active: this.state.activeTab === eventKey
    };
  }

  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
        <Panel>
          <PanelHeader className='bg-palepink'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>Panel Header</h4>
                  <h6>Mini heading</h6>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="home">
                      <h3>home-1</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-1</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-1</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fat">
                      <h3>fat-1</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mdo">
                      <h3>mdo-1</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-palepink fg-white' style={{ display: 'block' }}>
            <Nav bsStyle="tabs" className='plain' onSelect={::this.handleActiveState}>
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
              <NavDropdown title={<Icon bundle='fontello' glyph='angle-up'/>} noCaret dropup bsStyle='palepink' pullRight>
                <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
              </NavDropdown>
            </Nav>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Panel Footer + Plain Tabs</h4>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelBodyHeaderFooterBothPlainTabs extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="home">
        <Panel>
          <PanelHeader className='bg-red fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Panel Header + Plain Tabs</h4>
                </Col>
              </Row>
            </Grid>
            <Nav bsStyle="tabs" className='plain'>
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="home">
                      <h3>Home (header)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>User (header)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>Cog (header)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="home-1">
                      <h3>Home (footer)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user-1">
                      <h3>User (footer)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog-1">
                      <h3>Cog (footer)</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-purple fg-white' style={{ display: 'block' }}>
            <Nav bsStyle="tabs" className='plain'>
              <NavItem eventKey="home-1">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user-1">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog-1">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h4>Panel Footer</h4>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelBodyHeaderNormalTabs extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
        <Panel>
          <PanelHeader className='bg-palegreen fg-white'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>home-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-2</h3>
                      <p><LoremIpsum query='7s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelBodyFooterNormalTabs extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>home-3</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-3</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-3</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-orange fg-white'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='th'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='archive'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='docs-landscape'/>
              </NavItem>
            </Nav>
          </PanelFooter>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelBodyHeaderFooterNormalTabs extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-normal-tab' defaultActiveKey="home">
        <Panel>
          <PanelHeader className='bg-grayishcyan fg-white'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>Home (header)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>User (header)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>Cog (header)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="home-1">
                      <h3>Home (footer)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user-1">
                      <h3>User (footer)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog-1">
                      <h3>Cog (footer)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-darkcyan fg-white'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home-1">
                <Icon bundle='fontello' glyph='th'/>
              </NavItem>
              <NavItem eventKey="user-1">
                <Icon bundle='fontello' glyph='archive'/>
              </NavItem>
              <NavItem eventKey="cog-1">
                <Icon bundle='fontello' glyph='docs-landscape'/>
              </NavItem>
            </Nav>
          </PanelFooter>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelLeftHorizontal extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-left' defaultActiveKey="home">
        <Panel horizontal>
          <PanelLeft className='bg-red fg-white panel-sm-2'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelLeft>
          <PanelBody className='panel-sm-10' style={{paddingTop: 0}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>home-4</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-4</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-4</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelRightHorizontal extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-right' defaultActiveKey="home">
        <Panel horizontal>
          <PanelBody className='panel-sm-10' style={{paddingTop: 0}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>home-5</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>user-5</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>cog-5</h3>
                      <p><LoremIpsum query='2s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelRight className='bg-orange fg-darkorange fg-tab-active-text panel-sm-2'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelRight>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PanelLeftRight extends React.Component {
  render() {
    return (
      <PanelTabContainer id='panel-body-left-right' defaultActiveKey="home">
        <Panel horizontal>
          <PanelLeft className='bg-red fg-white panel-sm-1'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home">
                <Icon bundle='fontello' glyph='home'/>
              </NavItem>
              <NavItem eventKey="user">
                <Icon bundle='fontello' glyph='user'/>
              </NavItem>
              <NavItem eventKey="cog">
                <Icon bundle='fontello' glyph='cog'/>
              </NavItem>
            </Nav>
          </PanelLeft>
          <PanelBody className='panel-sm-10' style={{paddingTop: 0}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="home">
                      <h3>Home (left)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user">
                      <h3>User (left)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog">
                      <h3>Cog (left)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="home-1">
                      <h3>Home (right)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user-1">
                      <h3>User (right)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cog-1">
                      <h3>Cog (right)</h3>
                      <p><LoremIpsum query='4s'/></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelRight className='bg-purple fg-white panel-sm-1'>
            <Nav bsStyle="tabs">
              <NavItem eventKey="home-1">
                <Icon bundle='fontello' glyph='th'/>
              </NavItem>
              <NavItem eventKey="user-1">
                <Icon bundle='fontello' glyph='archive'/>
              </NavItem>
              <NavItem eventKey="cog-1">
                <Icon bundle='fontello' glyph='docs-landscape'/>
              </NavItem>
            </Nav>
          </PanelRight>
        </Panel>
      </PanelTabContainer>
    );
  }
}

export default class Panels extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={4} collapseRight>
            <BasicPanel />
            <PanelBodyHeaderAndFooter />
            <PanelBodyHeaderFooterBothPlainTabs />
          </Col>
          <Col sm={4} collapseRight>
            <PanelBodyFooterWithoutHeader />
            <PanelBodyHeaderPlainTabFooter />
            <PanelBodyHeaderNormalTabs />
          </Col>
          <Col sm={4}>
            <PanelBodyHeaderWithoutFooter />
            <PanelBodyHeaderFooterWithPlainTabs />
            <PanelBodyFooterNormalTabs />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <PanelBodyHeaderFooterNormalTabs />
          </Col>
        </Row>
        <Row>
          <Col sm={6} collapseRight>
            <PanelLeftHorizontal />
          </Col>
          <Col sm={6}>
            <PanelRightHorizontal />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <PanelLeftRight />
          </Col>
        </Row>
      </div>
    );
  }
}
