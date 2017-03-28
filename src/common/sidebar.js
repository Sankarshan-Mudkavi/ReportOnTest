import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';
import actions from '../redux/actions';

@withRouter
@connect((state) => {
  
  return state
})
class ApplicationSidebar extends React.Component {
  
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    // console.log("in dir -- what is this.props.locagion?" + JSON.stringify(this.props.location ));
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  renderAccounts(){
    let { accounts, dispatch } = this.props;
    let { result, error } = accounts;
    return result.map((account, i) => {
      return <SidebarNavItem key={i} glyph='icon-feather-layout' name={account.name} href={::this.getPath('account/'+account.name)} />
    })
  }

  render() {


    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>

                  { /** Pages Section */ }
                  <div className='sidebar-header'>PAGES</div>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href={::this.getPath('dashboard')} />
                  {/*<SidebarNavItem glyph='icon-feather-mail' name={<span>Mailbox <Label className='bg-darkgreen45 fg-white'>3</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href={::this.getPath('mailbox/inbox')} />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href={::this.getPath('mailbox/mail')} />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href={::this.getPath('mailbox/compose')} />
                    </SidebarNav>
                  </SidebarNavItem> */}

                  <SidebarNavItem glyph='icon-stroke-gap-icons-Blog' name={<span>Accounts <Label className='bg-darkcyan fg-white'>2</Label></span>}>
                    <SidebarNav>
                      {this.renderAccounts()}
                      {/*<SidebarNavItem glyph='icon-feather-layout' name='Posts' href={::this.getPath('blog/posts')} /> */}
                      <SidebarNavItem glyph='icon-simple-line-icons-plus' name='Add Account' href={::this.getPath('account/AddAccount')} />
                    </SidebarNav>
                  </SidebarNavItem>


                  <SidebarNavItem glyph='icon-feather-share' name='Campaigns' href={::this.getPath('campaigns')} />
                  <SidebarNavItem glyph='icon-feather-share' name='Reports' href={::this.getPath('social')} />
                  <SidebarNavItem glyph='icon-pixelvicon-photo-gallery' name='Gallery' href={::this.getPath('gallery')} />
                  {/*<SidebarNavItem glyph='icon-feather-share' name='Social' href={::this.getPath('social')} /> */}
                  <SidebarNavItem glyph='icon-stroke-gap-icons-Blog' name={<span>Blog <Label className='bg-darkcyan fg-white'>2</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-layout' name='Posts' href={::this.getPath('blog/posts')} />
                      <SidebarNavItem glyph='icon-feather-paper' name='Single Post' href={::this.getPath('blog/post')} />
                    </SidebarNav>
                  </SidebarNavItem>

                  <SidebarDivider />

                  { /** Components Section */ }
                  <div className='sidebar-header'>COMPONENTS</div>

                  <SidebarNavItem glyph='icon-simple-line-icons-layers float-right-rtl' name='Panels' href={::this.getPath('panels')} />
                  <SidebarNavItem glyph='icon-ikons-bar-chart-2 float-right-rtl' name={<span>Charts <Label className='bg-brown50 fg-white'>4</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-chart-area' name='Rubix Charts'>
                        <SidebarNav>
                          <SidebarNavItem name='Line Series' href={::this.getPath('charts/rubix/line')} />
                          <SidebarNavItem name='Area Series' href={::this.getPath('charts/rubix/area')} />
                          <SidebarNavItem name='Bar + Column Series' href={::this.getPath('charts/rubix/barcol')} />
                          <SidebarNavItem name='Mixed Series' href={::this.getPath('charts/rubix/mixed')} />
                          <SidebarNavItem name='Pie + Donut Series' href={::this.getPath('charts/rubix/piedonut')} />
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem glyph='icon-simple-line-icons-graph' name='Chart.JS' href={::this.getPath('charts/chartjs')} />
                      <SidebarNavItem glyph='icon-dripicons-graph-line' name='C3.JS' href={::this.getPath('charts/c3js')} />
                      <SidebarNavItem glyph='icon-feather-pie-graph' name='Morris.JS' href={::this.getPath('charts/morrisjs')} />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href={::this.getPath('timeline')} glyph='icon-ikons-time' name='Static Timeline' />
                  <SidebarNavItem href={::this.getPath('interactive-timeline')} glyph='icon-fontello-back-in-time' name='Interactive Timeline' />
                  <SidebarNavItem href={::this.getPath('codemirror')} glyph='icon-dripicons-code' name='Codemirror' />
                  <SidebarNavItem href={::this.getPath('maps')} glyph='icon-ikons-pin-2' name='Maps' />
                  <SidebarNavItem href={::this.getPath('editor')} glyph='icon-simple-line-icons-note' name='Editor' />
                  <SidebarNavItem glyph='icon-feather-toggle' name={<span>UI Elements <Label className='bg-deepred fg-white'>7</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('ui-elements/buttons')} glyph='icon-mfizz-oracle' name='Buttons' />
                      <SidebarNavItem href={::this.getPath('ui-elements/dropdowns')} glyph='icon-outlined-arrow-down' name='Dropdowns' />
                      <SidebarNavItem href={::this.getPath('ui-elements/tabs-and-navs')} glyph='icon-nargela-navigation' name='Tabs &amp; Navs' />
                      <SidebarNavItem href={::this.getPath('ui-elements/sliders')} glyph='icon-outlined-three-stripes-horiz' name='Sliders' />
                      <SidebarNavItem href={::this.getPath('ui-elements/knobs')} glyph='icon-ikons-chart-3-8' name='Knobs' />
                      <SidebarNavItem href={::this.getPath('ui-elements/modals')} glyph='icon-pixelvicon-browser-1' name='Modals' />
                      <SidebarNavItem href={::this.getPath('ui-elements/messenger')} glyph='icon-dripicons-message' name='Messenger' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-stroke-gap-icons-Files float-right-rtl' name={<span>Forms <Label className='bg-danger fg-white'>3</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-mfizz-fire-alt' href={::this.getPath('forms/controls')} name='Controls' />
                      <SidebarNavItem glyph='icon-stroke-gap-icons-Edit' href={::this.getPath('forms/x-editable')} name='X-Editable' />
                      <SidebarNavItem glyph='icon-simple-line-icons-magic-wand' href={::this.getPath('forms/wizard')} name='Wizard' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-table' name={<span>Tables <Label className='bg-blue fg-white'>3</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('tables/bootstrap-tables')} glyph='icon-fontello-th-thumb' name='Bootstrap Tables' />
                      <SidebarNavItem href={::this.getPath('tables/datatables')} glyph='icon-fontello-th-2' name='Datatables' />
                      <SidebarNavItem href={::this.getPath('tables/tablesaw')} glyph='icon-fontello-view-mode' name='Tablesaw' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href={::this.getPath('grid')} glyph='icon-ikons-grid-1 float-right-rtl' name='Grid' />
                  <SidebarNavItem href={::this.getPath('calendar')} glyph='icon-fontello-calendar-alt' name='Calendar' />
                  <SidebarNavItem glyph='icon-fontello-folder-open-empty' name={<span>File Utilities <Label className='bg-orange fg-darkbrown'>2</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('file-utilities/dropzone')} glyph='icon-stroke-gap-icons-Download' name='Dropzone' />
                      <SidebarNavItem href={::this.getPath('file-utilities/crop')} glyph='icon-ikons-crop' name='Image Cropping' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href={::this.getPath('fonts')} glyph='icon-fontello-fontsize' name='Fonts' />

                  <SidebarDivider />

                  { /** Extras Section */ }
                  <div className='sidebar-header'>EXTRAS</div>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href={::this.getPath('login')} />
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href={::this.getPath('signup')} />
                  <SidebarNavItem glyph='icon-ikons-lock' name='Lock Page' href={::this.getPath('lock')} />
                  <SidebarNavItem glyph='icon-dripicons-document' name='Invoice' href={::this.getPath('invoice')} />
                  <SidebarNavItem glyph='icon-feather-tag icon-rotate-135' name='Pricing Tables' href={::this.getPath('pricing')} />

                  <SidebarDivider />

                  { /** Documentation Section */ }
                  <div className='sidebar-header'>DOCUMENTATION</div>
                  <li className='sidebar-nav-item' style={{display: 'block', height: 45}}>
                    <a href='http://rubix-docs.sketchpixy.com' style={{height: 45}}>
                      <Icon glyph='icon-fontello-install' />
                      <span className='name'>Documentation</span>
                    </a>
                  </li>
                </SidebarNav>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}


@withRouter 
export default class SidebarContainer extends React.Component {

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar19.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Brandon Campe</div>
                <div>
                  <Progress id='demo-progress' value={20} color='#ffffff'/>
                  <Link to={::this.getPath('lock')}>
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <ChatComponent />
          </Sidebar>
          <Sidebar sidebar={2}>
            <StatisticsComponent />
          </Sidebar>
          <Sidebar sidebar={3}>
            <TimelineComponent />
          </Sidebar>
          <Sidebar sidebar={4}>
            <NotificationsComponent />
          </Sidebar>
        </div>
      </div>
    );
  }
}
