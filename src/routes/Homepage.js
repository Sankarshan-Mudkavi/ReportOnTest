import React from 'react';

import { withRouter } from 'react-router';
import classNames from 'classnames';

import {
  Row,
  Col,
  Tab,
  Nav,
  Grid,
  Label,
  Button,
  NavItem,
} from '@sketchpixy/rubix';

class Hero extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero')}>
        <Grid fixed>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

class HeroHeader extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header')}>
        {this.props.children}
      </div>
    );
  }
}

class HeroHeader2 extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header2')}>
        {this.props.children}
      </div>
    );
  }
}

@withRouter
export default class Homepage extends React.Component {

  handleNavigation() {
    this.props.router.push('/ltr/account/AddAccount')
    // this.props.router.push('/ltr/dashboard');
  }

  // componentDidMount() {
  //   console.log("just mounted app. Lets see how it is...")
  //   this.props.router.push('/ltr/dashboard');
  // }

  render() {
    return (
      <div id='homepage-container'>
        <Button bsStyle='green' id='demo-btn' onClick={::this.handleNavigation}>Admin Panel</Button>
        <div>
          <Hero className='text-center hidden-xs' style={{height: 475, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
            <img src='/imgs/app/homepage/simplepowerful.png' style={{marginTop: 5}} />
          </Hero>
          <Hero className='text-center visible-xs' style={{height: 270, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
            <img width='270' className='visible-xs' src='/imgs/app/homepage/simplepowerful.png' style={{margin: 'auto', marginTop: 30}} />
          </Hero>
        </div>
        <Hero>
          <HeroHeader>
            <span>{"Don't wait for your field reps to email you"}</span>
            <sup><Label className='bg-green fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2>{"Embrace ReportON "}<sup><small><Label className='bg-green fg-white'>v1.0.1</Label></small></sup></HeroHeader2>
          <Grid>
            <Row>
              <Col sm={7} collapseLeft collapseRight>
                <p style={{marginTop: 60}}>
                  ReportOn is built ontop of the latest frameworks released by Facebook and Twitter. Using state of the art design experience methods, ReportON brings ultra-high performance to connect your office with the field.
                </p>
                <p>The result: <strong>faster and more efficient reporting.</strong></p>
              </Col>
              <Col sm={5} collapseLeft collapseRight>
                <div className='hidden-xs text-right'>
                  <img src='/imgs/app/homepage/reactcode.png' />
                </div>
                <div className='visible-xs text-center'>
                  <img width='250' src='/imgs/app/homepage/reactcode.png' />
                </div>
              </Col>
            </Row>
          </Grid>
        </Hero>
        



        { /*<Hero>
                  <HeroHeader2>
                    <span>{"Bootstrap on Steroids "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/bootstrapreact.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/bootstrapreact.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    Rubix implements custom React Components on top of the popular react-bootstrap project enabling you to write shorter, semantic markup. Say Goodbye to unwieldy classnames and spaghetti code!
                  </p>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"Multiple Language + Framework Integrations "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <div className='text-center visible-xs' style={{marginTop: 50, marginBottom: 50}}>
                    <img width='100%' src='/imgs/app/homepage/rubix-implementations.png' />
                  </div>
                  <p className='text-center' style={{marginTop: 25}}>
                    {"Rubix comes integrated with starter kits for various backends including:"} <strong><em><small>NodeJS</small></em></strong>, <strong><em><small>Redux + GraphQL</small></em></strong>, <strong><em><small>Relay + GraphQL</small></em></strong>, <strong><em><small>Ruby on Rails</small></em></strong>, <strong><em><small>Laravel</small></em></strong> and <strong><em><small>Meteor</small></em></strong>.
                  </p>
                  <p className='text-center hidden-xs'>
                    <small><em>The complete list of features for each integration is detailed below:</em></small>
                  </p>
                  <hr className='hidden-xs' />
                  <div className='text-center hidden-xs'>
                    <Tab.Container id="integration-description" defaultActiveKey="redux">
                      <Row className="clearfix">
                        <Col sm={12}>
                          <Nav bsStyle="pills">
                            <NavItem eventKey="redux">
                              <img src='/imgs/app/homepage/redux.png' alt='redux' />
                            </NavItem>
                            <NavItem eventKey="relay">
                              <img src='/imgs/app/homepage/relay.png' alt='relay' />
                            </NavItem>
                            <NavItem eventKey="graphql">
                              <img src='/imgs/app/homepage/graphql.png' alt='graphql' />
                            </NavItem>
                            <NavItem eventKey="laravel">
                              <img src='/imgs/app/homepage/laravel.png' alt='laravel' />
                            </NavItem>
                            <NavItem eventKey="rails">
                              <img src='/imgs/app/homepage/rails.png' alt='rails' />
                            </NavItem>
                            <NavItem eventKey="meteor">
                              <img src='/imgs/app/homepage/meteor.png' alt='meteor' />
                            </NavItem>
                            <NavItem eventKey="nodejs">
                              <img src='/imgs/app/homepage/nodejs.png' alt='nodejs' />
                            </NavItem>
                          </Nav>
                          <Tab.Content animation={false}>
                            <Tab.Pane eventKey="redux">
                              <ul>
                                <li>Integrated with <strong>GraphQL</strong>.</li>
                                <li>Integrates with <strong>Chrome Redux DevTools</strong>.</li>
                                <li>Provides a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                                <li>Integrated with <strong>redux</strong>, <strong>redux-fetch-data</strong>, <strong>react-router</strong> and <strong>react-router-redux</strong>.</li>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                                <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                                <li>Deployment guides for <strong>Heroku + mLab</strong> and <strong>DigitalOcean</strong>.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="relay">
                              <ul>
                                <li>Integrated with <strong>GraphQL</strong>.</li>
                                <li>Provides a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                                <li>Integrated with <strong>isomorphic-relay</strong>, <strong>isomorphic-relay-router</strong>, <strong>react-relay</strong> and <strong>react-router</strong>.</li>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                                <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                                <li>Deployment guides for <strong>Heroku + mLab</strong> and <strong>DigitalOcean</strong>.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="graphql">
                              <ul>
                                <li>Integrates with both <strong>Relay</strong> and <strong>Redux</strong>.</li>
                                <li>Includes a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="laravel">
                              <ul>
                                <li>Integrates with <strong>Laravel 5.1 LTS</strong>.</li>
                                <li>Managed using <strong>Homestead</strong> to provide same virtual environment for all platforms.</li>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled. Makes use of <strong><em>react-php-v8js</em></strong> for compiling React components server-side.</li>
                                <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                                <li>Complete Deployment guide for pushing the entire app to <strong>Forge</strong>.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="rails">
                              <ul>
                                <li>Integrates with <strong>Rails 5</strong>.</li>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                                <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                                <li>Deployment guides for <strong>Heroku</strong>.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="meteor">
                              <ul>
                                <li>Integrates with <strong>Meteor 1.4</strong>.</li>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                                <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                                <li>Deployment guides for <strong>Galaxy + mLab</strong>.</li>
                              </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nodejs">
                              <ul>
                                <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                                <li>Ability to create <strong>distributables</strong> for integrations not provided.</li>
                              </ul>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"The Asset Pipeline "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <HeroHeader2>{"NPM, Webpack and Go!"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/assetpipeline.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/assetpipeline.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    {"The new architecture in Rubix 4.0, removes the complexity of previous versions and implements a better and simpler asset pipeline using NPM scripts. It uses Webpack to transpile React code, compile SASS files, compile fonts and even provide RTL support by flipping stylesheets."}
                  </p>
                  <p className='text-center'>
                    {"Rubix uses Babel for Javascript transformations. It ships with a set of ES6/ES7 syntax transformers. These allow you to use new ES6/ES7 syntax, right now, without waiting for browser support."}
                  </p>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"Modular and Distributable "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <div className='text-center' style={{marginTop: 50, marginBottom: 50}}>
                    <div className="logo-container" id="npm-logo">
                      <svg viewBox="0 0 18 7" style={{ width: 200 }}>
                        <path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
                        <path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
                      </svg>
                    </div>
                  </div>
                  <p className='text-center' style={{marginTop: 25}}>
                    Already have a <strong>existing React project</strong> and not willing to make the transition to our starter-kits? No worries! We are now providing Rubix as a module which you can <strong>directly import</strong> into your existing projects.
                  </p>
                  <p className='text-center' style={{marginTop: 25}}>
                    Rubix 4.0 allows you to create static sites using a feature called <strong>distributables</strong>. These distributables can be deployed directly to any static server (e.g. Apache2 / Nginx etc).
                  </p>
                </Hero>
                <Hero>
                  <HeroHeader2>{"Rubix Charts"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/rubixcharts.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/rubixcharts.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    Rubix Charts is an aesthetically beautiful, hand-crafted charting library created exclusively for Rubix Admin app. We used the awesome D3.JS library to write all the charting components (Line, Area, Stacked, Bar, Column, Pie and Donut) that power Rubix Charts.
                  </p>
                </Hero>
                <Hero>
                  <HeroHeader>{"Internationalization and Localization"}</HeroHeader>
                  <HeroHeader2>{"Mozilla L20n.js"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/mozflags.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/mozflags.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    {"Mozilla L20n is a developer friendly framework that places languages in the localizer's hand to create better translations. "}
                  </p>
                  <p className='text-center'>
                    {"It removes the need for developers to thoroughly understand the specifics of a natural language and provides an opportunity for localizers to create better translations. Rubix ships with custom React component bindings for the framework."}
                  </p>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"Universal Javascript "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <HeroHeader2>{"Render client code on the server!"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/isomorphic.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/isomorphic.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    {"Rubix uses React-Router to provide routing client side and reuses the same routing logic for rendering compiled HTML from the server making your app SEO friendly."}
                  </p>
                </Hero>
                <Hero>
                  <HeroHeader>{"Create complex layouts easily"}</HeroHeader>
                  <HeroHeader2>{"Panels"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/panels.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/panels.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    {"Rubix Panels empowers developers to create complex layouts in addition to the awesome Grid provided by Twitter Bootstrap. Pretty much every example page showcased in the demo makes use of Panels for layout."}
                  </p>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"React Hot Loader v3.0 "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <HeroHeader2>{"Time-saving synchronised browser testing!"}</HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <video loop autoPlay width='100%'>
                      <source src="/video/app/homepage/livereload.mp4" type="video/mp4" />
                      <source src="/video/app/homepage/livereload.ogv" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className='text-center'>
                    {"When you’re making responsive websites, there’s a lot of tweaking and testing to do. React Hot Loader makes your workflow faster by "}<strong>hot-reloading code as soon as a change is made.</strong>{" Hot reloading is enabled for SASS files, Image files, Locale files and WebFonts."}
                  </p>
                </Hero>
                <Hero style={{position: 'relative', zIndex: 2}}>
                  <HeroHeader>
                    <span>{"Advanced Theming and Customizations "}</span>
                    <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
                  </HeroHeader>
                  <HeroHeader2><small>Using SASS mixins!</small></HeroHeader2>
                  <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
                    <div className='hidden-xs'>
                      <img src='/imgs/app/homepage/themes.png' />
                    </div>
                    <div className='visible-xs'>
                      <img width='250' src='/imgs/app/homepage/themes.png' />
                    </div>
                  </div>
                  <p className='text-center'>
                    {"We provide SASS mixins to customize individual UI elements or even the entire theme!"}
                  </p>
                </Hero>*/}
        <div>
          <Hero className='text-center' style={{height: 215, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%'}}>
            <h1 className='fg-white' style={{marginTop: 0, marginBottom: 25, fontWeight: 100}}>So what are you waiting for?</h1>
            <Button lg outlined inverse retainBackground bsStyle='green' onClick={::this.handleNavigation}>Click here to Log in</Button>
          </Hero>
        </div>
      </div>
    );
  }
}
