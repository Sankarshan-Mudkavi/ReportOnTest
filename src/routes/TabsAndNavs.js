import React from 'react';

import {
  Row,
  Col,
  Nav,
  Tab,
  Tabs,
  Grid,
  Icon,
  Panel,
  Pager,
  Button,
  Navbar,
  BPanel,
  NavItem,
  MenuItem,
  PanelBody,
  Accordion,
  LoremIpsum,
  Breadcrumb,
  Pagination,
  SplitButton,
  PanelHeader,
  NavDropdown,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
  DropdownButton,
  SplitHoverButton,
  PanelTabContainer,
  DropdownHoverButton,
} from '@sketchpixy/rubix';

class AccordionExample extends React.Component {
  render() {
    return (
      <PanelContainer>
        <PanelHeader className='bg-lightred fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Accordion</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody style={{margin: 12.5, marginTop: 0}}>
          <Accordion defaultActiveKey='1'>
            <BPanel header="Collapsible Group Item #1" eventKey="1">
              <LoremIpsum query='7s' />
            </BPanel>
            <BPanel header="Collapsible Group Item #2" eventKey="2">
              <LoremIpsum query='7s' />
            </BPanel>
            <BPanel header="Collapsible Group Item #3" eventKey="3">
              <LoremIpsum query='7s' />
            </BPanel>
          </Accordion>
        </PanelBody>
      </PanelContainer>
    );
  }
}

class TabsBasic extends React.Component {
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
      <PanelTabContainer id='tabs-basic' defaultActiveKey="home">
        <PanelHeader className='bg-lightgreen fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Tabs: Basic</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
                <Nav bsStyle="tabs" onSelect={::this.handleActiveState} className='tab-lightgreen'>
                  <NavItem eventKey="home">Home</NavItem>
                  <NavItem eventKey="user">Profile</NavItem>
                  <NavDropdown title='Dropdown' bsStyle='lightgreen' pullRight>
                    <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                    <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
                  </NavDropdown>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <h3>home-1</h3>
                    <p><LoremIpsum query='2s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="user">
                    <h3>user-1</h3>
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
      </PanelTabContainer>
    );
  }
}

class PillsBasic extends React.Component {
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
      <PanelTabContainer id='pills-basic' defaultActiveKey="home">
        <PanelHeader className='bg-orange fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Pills: Basic</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
                <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='tab-orange'>
                  <NavItem eventKey="home">Home</NavItem>
                  <NavItem eventKey="user">Profile</NavItem>
                  <NavDropdown title='Dropdown' bsStyle='orange' pullRight>
                    <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                    <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
                  </NavDropdown>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <h3>home-1</h3>
                    <p><LoremIpsum query='2s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="user">
                    <h3>user-1</h3>
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
      </PanelTabContainer>
    );
  }
}

class TabsInline extends React.Component {
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
      <PanelTabContainer id='tabs-inline' defaultActiveKey="home">
        <PanelHeader className='bg-lightpurple fg-white nav-inline'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Tabs: Inline Justified</h3>
                <Nav bsStyle="tabs" onSelect={::this.handleActiveState} className='nav-purple'>
                  <NavItem eventKey="home">Home</NavItem>
                  <NavItem eventKey="user">Profile</NavItem>
                  <NavDropdown title='Dropdown' bsStyle='lightpurple' pullRight>
                    <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                    <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
                  </NavDropdown>
                </Nav>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <h3>home-1</h3>
                    <p><LoremIpsum query='2s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="user">
                    <h3>user-1</h3>
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
      </PanelTabContainer>
    );
  }
}

class PillsStacked extends React.Component {
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
      <PanelTabContainer id='pills-stacked' defaultActiveKey="home" noOverflow>
        <PanelHeader className='bg-blue fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Pills: Stacked</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={4}>
                <Nav bsStyle="pills" stacked onSelect={::this.handleActiveState} className='tab-blue'>
                  <NavItem eventKey="home">Home</NavItem>
                  <NavItem eventKey="user">Profile</NavItem>
                  <NavDropdown title='Dropdown' bsStyle='blue'>
                    <MenuItem {...this.getItemProps("fat")}>@fat</MenuItem>
                    <MenuItem {...this.getItemProps("mdo")}>@mdo</MenuItem>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <p><LoremIpsum query='2s'/></p>
                    <p><LoremIpsum query='1s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="user">
                    <p><LoremIpsum query='2s'/></p>
                    <p><LoremIpsum query='1s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fat">
                    <p><LoremIpsum query='2s'/></p>
                    <p><LoremIpsum query='1s'/></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mdo">
                    <p><LoremIpsum query='2s'/></p>
                    <p><LoremIpsum query='1s'/></p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
            <br />
          </Grid>
        </PanelBody>
      </PanelTabContainer>
    );
  }
}

class BasicNavbar extends React.Component {
  render() {
    return (
      <Navbar fluid inverse={this.props.inverse}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem active eventKey={1} href="#">Link 1</NavItem>
          <NavItem eventKey={2} href="#">Link 2</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} active>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="#">Link 3</NavItem>
          <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} active>Action</MenuItem>
            <MenuItem eventKey={5.2}>Another action</MenuItem>
            <MenuItem eventKey={5.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={5.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

class NavbarTextNonNav extends React.Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Anna Sanchez</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Have a great day!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class PaginationBasic extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { activePage: 1 };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <Pagination
        bsSize={this.props.bsSize}
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={10}
        maxButtons={4}
        activePage={this.state.activePage}
        onSelect={::this.handleSelect} />
    );
  }
}

export default class TabsAndNavs extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <AccordionExample />
          </Col>
        </Row>
        <Row>
          <Col sm={6} collapseRight>
            <TabsBasic />
            <TabsInline />
          </Col>
          <Col sm={6}>
            <PillsBasic />
            <PillsStacked />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3>Navbars</h3>
            <BasicNavbar />
            <NavbarTextNonNav />
            <BasicNavbar inverse />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3>Breadcrumbs</h3>
            <Breadcrumb>
              <Breadcrumb.Item active>
                Home
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Library
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Data
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className='text-center'>
              <h3>Pagination</h3>
              <PaginationBasic />
              <br />
            </div>
            <div>
              <Row>
                <Col sm={6} className='text-left'>
                  <h3 className='text-left'>Pagination (small)</h3>
                  <PaginationBasic bsSize='small' />
                </Col>
                <Col sm={6} className='text-right'>
                  <h3 className='text-left'>Pagination (large)</h3>
                  <PaginationBasic bsSize='large' />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className='text-center'>
            <h3>Pager</h3>
            <Pager>
              <Pager.Item href="#">Previous</Pager.Item>
              {' '}
              <Pager.Item href="#">Next</Pager.Item>
            </Pager>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='text-left'>
            <h3>Pager (previous disabled)</h3>
            <Pager>
              <Pager.Item previous disabled href="#">&larr; Previous</Pager.Item>
            </Pager>
          </Col>
          <Col sm={6} className='text-right'>
            <h3>Pager (next disabled)</h3>
            <Pager>
              <Pager.Item next disabled href="#">Next &rarr;</Pager.Item>
            </Pager>
          </Col>
        </Row>
      </div>
    );
  }
}
