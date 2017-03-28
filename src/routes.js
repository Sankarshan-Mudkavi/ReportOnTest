import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Homepage from './routes/Homepage';

import Dashboard from './routes/Dashboard';

import Inbox from './routes/Inbox';
import Mail from './routes/Mail';
import Compose from './routes/Compose';

import Gallery from './routes/Gallery';

import Social from './routes/Social';

import Posts from './routes/Posts';
import Post from './routes/Post';

import Panels from './routes/Panels';

import LineSeries from './routes/LineSeries';
import AreaSeries from './routes/AreaSeries';
import BarColSeries from './routes/BarColSeries';
import MixedSeries from './routes/MixedSeries';
import PieDonutSeries from './routes/PieDonutSeries';

import Chartjs from './routes/Chartjs';
import C3js from './routes/C3js';
import Morrisjs from './routes/Morrisjs';

import StaticTimeline from './routes/StaticTimeline';
import InteractiveTimeline from './routes/InteractiveTimeline';

import Codemirrorjs from './routes/Codemirrorjs';
import Maps from './routes/Maps';
import Editor from './routes/Editor';

import Buttons from './routes/Buttons';
import Dropdowns from './routes/Dropdowns';
import TabsAndNavs from './routes/TabsAndNavs';
import Sliders from './routes/Sliders';
import Knobs from './routes/Knobs';
import Modals from './routes/Modals';
import Messengerjs from './routes/Messengerjs';

import Controls from './routes/Controls';
import XEditable from './routes/XEditable';
import Wizard from './routes/Wizard';

import Tables from './routes/Tables';
import Datatablesjs from './routes/Datatablesjs';
import Tablesawjs from './routes/Tablesawjs';

import Grids from './routes/Grids';
import Calendar from './routes/Calendar';

import Dropzonejs from './routes/Dropzonejs';
import Cropjs from './routes/Cropjs';

import Fonts from './routes/Fonts';

import Login from './routes/Login';
import Signup from './routes/Signup';
import Invoice from './routes/Invoice';
import Pricing from './routes/Pricing';

import Lock from './routes/Lock';

import AddAccount from './routes/AddAccount';
import Campaigns from './routes/Campaigns';

import actions from './redux/actions';
import { connect } from 'react-redux';

@connect((state) => {
  return state
})
class App extends React.Component {
  static fetchData(store) {
    console.log("fetchingData");
    return store.dispatch(actions.getAccounts());
  }
  
  // renderAccounts() {
  //   return (
  //     <Route path='campaigns' component={Campaigns} />
  //     <Route path='campaigns' component={Campaigns} />
  //     <Route path='campaigns' component={Campaigns} />
  //     )
  // }

  render() {
    console.log("in app - accounts are " + this.props.accounts.result)
    let { accounts, dispatch } = this.props;
    var { result, error } = accounts;
    result = result || []
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>

                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

/**
 * Includes Sidebar, Header and Footer.
 */


const routes = 

(  <Route component={App}>
    <Route path='dashboard' component={Dashboard} />
    <Route path='account/AddAccount' component={AddAccount} />
    <Route path='campaigns' component={Campaigns} />
    <Route path='mailbox/inbox' component={Inbox} />
    <Route path='mailbox/mail' component={Mail} />
    <Route path='mailbox/compose' component={Compose} />
    <Route path='gallery' component={Gallery} />
    <Route path='social' component={Social} />
    <Route path='blog/posts' component={Posts} />
    <Route path='blog/post' component={Post} />
    <Route path='panels' component={Panels} />
    <Route path='charts/rubix/line' component={LineSeries} />
    <Route path='charts/rubix/area' component={AreaSeries} />
    <Route path='charts/rubix/barcol' component={BarColSeries} />
    <Route path='charts/rubix/mixed' component={MixedSeries} />
    <Route path='charts/rubix/piedonut' component={PieDonutSeries} />
    <Route path='charts/chartjs' component={Chartjs} />
    <Route path='charts/c3js' component={C3js} />
    <Route path='charts/morrisjs' component={Morrisjs} />
    <Route path='timeline' component={StaticTimeline} />
    <Route path='interactive-timeline' component={InteractiveTimeline} />
    <Route path='codemirror' component={Codemirrorjs} />
    <Route path='maps' component={Maps} />
    <Route path='editor' component={Editor} />
    <Route path='ui-elements/buttons' component={Buttons} />
    <Route path='ui-elements/dropdowns' component={Dropdowns} />
    <Route path='ui-elements/tabs-and-navs' component={TabsAndNavs} />
    <Route path='ui-elements/sliders' component={Sliders} />
    <Route path='ui-elements/knobs' component={Knobs} />
    <Route path='ui-elements/modals' component={Modals} />
    <Route path='ui-elements/messenger' component={Messengerjs} />
    <Route path='forms/controls' component={Controls} />
    <Route path='forms/x-editable' component={XEditable} />
    <Route path='forms/wizard' component={Wizard} />
    <Route path='tables/bootstrap-tables' component={Tables} />
    <Route path='tables/datatables' component={Datatablesjs} />
    <Route path='tables/tablesaw' component={Tablesawjs} />
    <Route path='grid' component={Grids} />
    <Route path='calendar' component={Calendar} />
    <Route path='file-utilities/dropzone' component={Dropzonejs} />
    <Route path='file-utilities/crop' component={Cropjs} />
    <Route path='fonts' component={Fonts} />
    <Route path='invoice' component={Invoice} />
    <Route path='pricing' component={Pricing} />
  </Route>
);

/**
 * No Sidebar, Header or Footer. Only the Body is rendered.
 */
const basicRoutes = (
  <Route>
    <Route path='lock' component={Lock} />
    <Route path='login' component={Login} />
    <Route path='signup' component={Signup} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    <Route>
      {basicRoutes}
    </Route>
  </Route>
);

export default (
  <Route>
    {<Route path='/' component={Homepage} />}
  {/*<Route path='/' component={App}/>*/}
  
  

    <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route>
  </Route>
);
