import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router';

import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';

import {
  Label,
  SidebarBtn,
  Dispatcher,
  NavDropdown,
  NavDropdownHover,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Badge,
  Button,
  Icon,
  Grid,
  Row,
  Radio,
  Col } from '@sketchpixy/rubix';
import actions from '../redux/actions';

class Brand extends React.Component {
  render() {
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex='-1'>
          <a href='#'>
            <img src='/imgs/common/reportOnLogo.png' style={{top:-27}}alt='rubix' width='251' height='80' />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

@withRouter
class DirectNavItem extends React.Component {
  render() {
    var active = false;
    var currentLocation = this.props.location.pathname;

    if(!active && this.props.path) {
      active = this.props.router.isActive(this.props.path) && (currentLocation == this.props.path);
    }

    var classes = classNames({
      'pressed': active
    }, this.props.className);

    return (
      <NavItem className={classes} style={this.props.style} href={this.props.path} to={this.props.path} componentClass={Link}>
        <Icon bundle={this.props.bundle || 'fontello'} glyph={this.props.glyph} />
      </NavItem>
    );
  }
}

class Skins extends React.Component {
  static skins = ['default', 'green', 'blue', 'purple', 'brown', 'cyan'];

  switchSkin(skin, e) {
    e.preventDefault();
    e.stopPropagation();
    for(var i=0; i < Skins.skins.length; i++) {
      $('html').removeClass(Skins.skins[i]);
    }
    $('html').addClass(skin);
    vex.close(this.props.id);
  }

  render() {
    return (
      <Grid style={{margin: '-2em'}}>
        <Row>
          <Col xs={12} className='text-center bg-darkgrayishblue75' style={{marginBottom: 25}}>
            <div className='fg-white' style={{fontSize: 24, lineHeight: 1, padding: '25px 10px'}}>
              Choose a theme:
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'default')}>
              <Icon glyph='icon-fontello-stop icon-4x' style={{color: '#E76049'}} />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'green')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkgreen45' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'blue')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-blue' />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'purple')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-purple' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'brown')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-brown' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'cyan')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkcyan' />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class CommitChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#commit-column-chart', {
        width: '100%',
        height: 100,
        hideAxisAndGrid: true,
        hideLegend: true,
        tooltip: {
          color: '#2EB398'
        },
        margin: {
          top: 25,
          bottom: 25
        }
    });

    var alerts = chart.column_series({
        name: 'Commits',
        color: '#2EB398'
    });

    alerts.addData([
        {x: 10, y: 20},
        {x: 11, y: 50},
        {x: 12, y: 35},
        {x: 13, y: 30},
        {x: 14, y: 20},
        {x: 15, y: 25},
        {x: 16, y: 30},
        {x: 17, y: 50},
        {x: 18, y: 20},
        {x: 19, y: 30},
        {x: 20, y: 50},
        {x: 21, y: 20},
        {x: 22, y: 50},
        {x: 23, y: 35},
        {x: 24, y: 30},
        {x: 25, y: 20},
        {x: 26, y: 30}
    ]);

    $(window).trigger('resize');
  }
  render() {
    return (
      <Grid style={{marginBottom: -10}}>
        <Row>
          <Col xs={12}>
            <div id='commit-column-chart'></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class LtrRtlLayout extends React.Component {
  state = {
    ltr: true
  };

  handleLayoutRadioChange(e) {
    var dir = e.target.value;
    var location = window.location.href;
    if (dir === 'ltr') {
      location = location.replace('rtl', dir);
    } else {
      location = location.replace('ltr', dir);
    }

    window.location.href = location;
  }
  componentDidMount() {
    if($('html').attr('dir') === 'ltr') {
      this.setState({ ltr: true });
    } else {
      this.setState({ ltr: false });
    }
  }
  render() {
    let { ltr } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <Radio ref='ltr' value='ltr' name='switch-layout' checked={ltr} onChange={::this.handleLayoutRadioChange}>
              LTR
            </Radio>
          </Col>
          <Col xs={6} className='text-right'>
            <Radio ref='rtl' value='rtl' name='switch-layout' checked={!ltr} onChange={::this.handleLayoutRadioChange}>
              RTL
            </Radio>
          </Col>
        </Row>
      </Grid>
    );
  }
}


class BodyLayout extends React.Component {
  state = {
    fixedLayout: true
  };

  bodyLayoutRadioChange(value) {
    if(!value) return;
    if(value === 'fixed-body') {
      $('html').removeClass('static');
      localStorage.setItem('bodyLayout', 'fixed-body');
      Dispatcher.publish('sidebar:reinitialize');
      this.setState({ fixedLayout: true });
    } else if(value === 'static-body') {
      $('html').addClass('static');
      localStorage.setItem('bodyLayout', 'static-body');
      Dispatcher.publish('sidebar:destroy');
      this.setState({ fixedLayout: false });
    }
  }
  handleBodyLayoutRadioChange(e) {
    this.bodyLayoutRadioChange(e.target.value);
  }
  componentDidMount() {
    this.bodyLayoutRadioChange(localStorage.getItem('bodyLayout'));
  }
  render() {
    let { fixedLayout } = this.state;

    return (
      <Grid>
        <Row>
          <Col xs={8}>
            <Radio ref='fixed-body' value='fixed-body' name='switch-body-layout' checked={fixedLayout} onChange={::this.handleBodyLayoutRadioChange}>
              Fixed (Header + Sidebar)
            </Radio>
          </Col>
          <Col xs={4} className='text-right'>
            <Radio ref='static-body' value='static-body' name='switch-body-layout' checked={!fixedLayout} onChange={::this.handleBodyLayoutRadioChange}>
              Static
            </Radio>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const flagMenuItems = [
  { name: 'English - U.S.', flag: 'United-States', lang: 'enUS' },
  { name: 'French', flag: 'France', lang: 'fr' },
  { name: 'Italian', flag: 'Italy', lang: 'it' },
  { name: 'German', flag: 'Germany', lang: 'ge' },
  { name: 'Arabic', flag: 'Saudi-Arabia', lang: 'ar' },
  { name: 'Chinese', flag: 'China', lang: 'ch' }
];

class FlagMenu extends React.Component {
  state = {
    selectedFlag: 'United-States'
  };

  handleSelect(flag) {
    this.setState({ selectedFlag: flag }, () => {
      var locale = flagMenuItems.find((item) => {
        return (item.flag === this.state.selectedFlag);
      }).lang;

      if (locale === 'ar') {
        $('html').addClass('arabic');
      } else {
        $('html').removeClass('arabic');
      }

      l20n.changeLocale(locale);
    });
  }

  render() {
    const flagIcon = (
      <img src={`/imgs/app/flags/flags/flat/32/${this.state.selectedFlag}.png`} width='32' height='32' />
    );

    let menuItems = flagMenuItems.map(({name, flag, lang}, i) => {
      return (
        <MenuItem key={name} eventKey={flag} active={this.state.selectedFlag === flag}>
          <Grid>
            <Row>
              <Col xs={2}>
                <img src={`/imgs/app/flags/flags/flat/32/${flag}.png`} alt={name} width='32' height='32' />
              </Col>
              <Col xs={10}>
                <Entity className='lang-menu-text' entity='languageMenu' data={{lang}} defaultValue={name} />
              </Col>
            </Row>
          </Grid>
        </MenuItem>
      )
    });

    menuItems.unshift(
      <MenuItem key='flag-header' header>Choose a locale</MenuItem>
    );

    return (
      <NavDropdownHover noCaret eventKey={2} title={flagIcon} id='flag-menu-btn' className='header-menu' onSelect={::this.handleSelect}>
        {menuItems}
      </NavDropdownHover>
    );
  }
}

class SettingsMenu extends React.Component {
  state = {
    fluidLayout: true
  };

  handleViewportChange(eventKey) {
    if (eventKey === 'fluid') {
      localStorage.setItem('settingsMenu', 'fluid');
      $('html').removeClass('boxed');
      this.setState({ fluidLayout: true })
    } else {
      localStorage.setItem('settingsMenu', 'boxed');
      $('html').addClass('boxed');
      this.setState({ fluidLayout: false })
    }
    setTimeout(() => {
      $(window).trigger('resize');
    }, 300);
  }

  componentDidMount() {
    let item = localStorage.getItem('settingsMenu') || 'fluid';
    localStorage.setItem('settingsMenu', item);

    this.handleViewportChange(item);
  }

  render() {
    const cogIcon = (
      <Icon bundle='fontello' glyph='cog-7' style={{position: 'relative', top: 2}} />
    );

    let { fluidLayout } = this.state;

    return (
      <NavDropdownHover noCaret eventKey={4} title={cogIcon} id='settings-menu' className='header-menu small-font collapse-left' onSelect={::this.handleViewportChange}>
        <MenuItem eventKey='dimension' header>
          <Entity entity='settingsMenuHeading' defaultValue='dimension' />
        </MenuItem>
        <MenuItem eventKey='fluid' active={fluidLayout}>
          <Entity entity='settingsMenuFluid' defaultValue='Fluid' />
        </MenuItem>
        <MenuItem eventKey='boxed' active={!fluidLayout}>
          <Entity entity='settingsMenuBoxed' defaultValue='Boxed (990px)' />
        </MenuItem>
        <MenuItem eventKey='layout' header>
          Layout
        </MenuItem>
        <MenuItem eventKey='ltrRtlLayout' noHover>
          <LtrRtlLayout />
        </MenuItem>
        <MenuItem eventKey='bodyLayoutHeading' header>
          Body Layout
        </MenuItem>
        <MenuItem eventKey='bodyLayout' noHover>
          <BodyLayout />
        </MenuItem>
      </NavDropdownHover>
    );
  }
}

class NotificationsMenu extends React.Component {
  render() {
    const bullhornIcon = (
      <span>
        <Icon bundle='fontello' glyph='bullhorn' />
        <Badge className='fg-darkbrown bg-orange notification-badge'>3</Badge>
      </span>
    );

    return (
      <NavDropdownHover noCaret eventKey={6} title={bullhornIcon} id='notifications-menu' className='header-menu collapse-left'>
        <MenuItem header>
          <Entity entity='notificationsMenuHeading' />
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2} className='avatar-container' collapseRight>
                <div><img src='/imgs/app/avatars/avatar22.png' width='40' height='40' alt='sarah_patchett' /></div>
                <div className='text-center'>
                  <Label bsStyle='info'>NEW</Label>
                </div>
              </Col>
              <Col xs={10} className='notification-container' collapseLeft collapseRight>
                <div className='time'>
                  <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='chat-5'/><em><Entity entity='notificationsTimeFirst' /></em></strong>
                </div>
                <div className='message-header'>
                  <strong className='fg-darkgreen45'>Sarah Patchett sent you a private message</strong>
                </div>
                <div className='message-details fg-text'>
                  <span>{"Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago..."}</span>
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2} className='avatar-container' collapseRight>
                <img src='/imgs/app/avatars/avatar21.png' width='40' height='40' alt='john_young' />
              </Col>
              <Col xs={10} className='notification-container' collapseLeft collapseRight>
                <div className='time'>
                  <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='user-add'/><em>2 hours ago</em></strong>
                </div>
                <div className='message-header'>
                  <strong className='fg-darkgreen45'>John Young added you as a collaborator</strong>
                </div>
                <div className='message-details fg-text'>
                  <span>to the repository </span><em className='fg-darkblue'>sketchpixy/rubix</em>
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2} className='avatar-container' collapseRight>
                <div><img src='/imgs/app/github.png' width='40' height='40' alt='github' /></div>
                <div className='text-center'>
                  <Label bsStyle='danger'>ALERT</Label>
                </div>
              </Col>
              <Col xs={10} className='notification-container' collapseLeft collapseRight>
                <div className='time'>
                  <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='attention-alt-1'/><em>5 days ago</em></strong>
                </div>
                <div className='message-header'>
                  <strong className='fg-darkgreen45'>Github sent you a notification</strong>
                </div>
                <div className='message-details fg-text'>
                  <span>Your </span><span className='fg-darkblue'>Large Plan</span><span> will expire in one week. Please update your billing details at our Billing center. Thank you!</span>
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem noHover>
          <Grid style={{marginBottom: -10}}>
            <Row>
              <Col xs={6} collapseLeft collapseRight>
                <Button block className='notification-footer-btn left-btn'>MARK ALL READ</Button>
              </Col>
              <Col xs={6} collapseLeft collapseRight>
                <Button block className='notification-footer-btn right-btn'>VIEW ALL</Button>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
      </NavDropdownHover>
    );
  }
}

class RssMenu extends React.Component {
  render() {
    const rssfeedIcon = (
      <span>
        <Icon bundle='fontello' glyph='rss-1' />
        <Badge className='fg-darkgreen bg-darkgreen40 notification-badge'>4</Badge>
      </span>
    );

    return (
      <NavDropdownHover noCaret eventKey={7} title={rssfeedIcon} id='rss-menu' className='header-menu collapse-left'>
        <MenuItem header>Your news feed</MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2}>
                <Icon className='fg-text' bundle='fontello' glyph='star' />
              </Col>
              <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                <div className='time'>
                  <strong className='fg-darkgray50'><em>an hour ago</em></strong>
                </div>
                <div className='message-header fg-darkgray50'>
                  <strong className='fg-darkgreen45'>@johndoe</strong><strong> starred </strong><strong className='fg-darkblue'>joyent/node</strong>
                </div>
                <div className='message-details fg-text'>
                  evented I/O for v8 javascript
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2}>
                <Icon className='fg-text' bundle='fontello' glyph='chat-1' />
              </Col>
              <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                <div className='time'>
                  <strong className='fg-darkgray50'><em>2 hours ago</em></strong>
                </div>
                <div className='message-header fg-darkgray50'>
                  <strong className='fg-darkgreen45'>@jackie</strong><strong> commented on issue </strong><strong className='fg-darkblue'>#150</strong>
                </div>
                <div className='message-details fg-text'>
                  {"Nice catch! I'll get this fixed soon. Meanwhile..."}
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2}>
                <Icon className='fg-text' bundle='fontello' glyph='fork' />
              </Col>
              <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                <div className='time'>
                  <strong className='fg-darkgray50'><em>5 hours ago</em></strong>
                </div>
                <div className='message-header fg-darkgray50'>
                  <strong className='fg-darkgreen45'>@sketchpixy</strong><strong> forked </strong><strong className='fg-darkblue'>facebook/react</strong>
                </div>
                <div className='message-details fg-text'>
                  to sketchpixy/react
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2}>
                <Icon className='fg-text' bundle='fontello' glyph='attention-alt-1' />
              </Col>
              <Col xs={10} collapseLeft className='notification-container' style={{width: 265}}>
                <div className='time'>
                  <strong className='fg-darkgray50'><em>2 days ago</em></strong>
                </div>
                <div className='message-header fg-darkgray50'>
                  <strong className='fg-darkgreen45'>@mario</strong><strong> opened issue </strong><strong className='fg-darkblue'>twbs/bootstrap#44</strong>
                </div>
                <div className='message-details fg-text'>
                  Request: Support RTL version
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
        <MenuItem header>Your commit activity</MenuItem>
        <MenuItem noHover>
          <CommitChart />
        </MenuItem>
      </NavDropdownHover>
    );
  }
}

@withRouter
@connect((state) => {
  return state
})
class HeaderNavigation extends React.Component {
  handleSkinSwitch(e) {
    e.preventDefault();
    e.stopPropagation();
    var vexContent;
    vex.open({
      afterOpen: ($vexContent) => {
        vexContent = $vexContent;
        return ReactDOM.render(<Skins id={$vexContent.data().vex.id} />, $vexContent.get(0));
      },
      afterClose: () => {
        ReactDOM.unmountComponentAtNode(vexContent.get(0));
      }
    });
  }

  handleLogout(e) {
    // console.log("log out called!");
    this.props.dispatch(actions.setLoginStatus('false,'));
    this.props.router.push('/');
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <Nav pullRight>
        <Nav className='hidden-xs'>
          {/*
          <NavItem divider />
          <NavItem eventKey={1} href='#' className='hidden-sm' onClick={::this.handleSkinSwitch}>
            <Icon glyph='icon-fontello-circle' className='fg-theme' style={{lineHeight: 1, fontSize: 24, top: 2, position: 'relative' }} />
          </NavItem>
          <NavItem divider />
          <FlagMenu />
          <NavItem divider />
          <DirectNavItem glyph='user-female' eventKey={3} path={::this.getPath('social')} className='small-font' style={{position: 'relative', top: 2}} />
          <SettingsMenu />
          <NavItem divider />
          <DirectNavItem glyph='mail-3' eventKey={5} path={::this.getPath('mailbox/inbox')} />
          <NotificationsMenu />
          <RssMenu /> */}
        </Nav>
        <Nav>
          <NavItem className='logout' href='#' onClick={::this.handleLogout}>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </Nav>
    );
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <Grid id='navbar' {...this.props}>
        <Row>
          <Col xs={12}>
            <Navbar fixedTop fluid id='rubix-nav-header'>
              <Row>
                <Col xs={3} visible='xs'>
                  <SidebarBtn />
                </Col>
                <Col xs={6} sm={4}>
                  <Brand />
                </Col>
                <Col xs={3} sm={8} collapseRight className='text-right'>
                  <HeaderNavigation />
                </Col>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}
