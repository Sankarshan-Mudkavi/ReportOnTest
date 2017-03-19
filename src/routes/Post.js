import React from 'react';
import { Link, withRouter } from 'react-router';

import {
  Row,
  Col,
  Icon,
  Lead,
  Grid,
  Panel,
  Button,
  PanelBody,
  LoremIpsum,
  PanelHeader,
  PanelContainer,
  ResponsiveEmbed,
} from '@sketchpixy/rubix';

class PostItem extends React.Component {
  render() {
    return (
      <PanelContainer controls={false}>
        <Panel>
          <PanelHeader>
            <div style={{position: 'relative', height: 350}}>
              <div className='blog-post-header'/>
              <div className='text-center' style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12} className='fg-white'>
                      <div style={{maxWidth: 600, margin: 'auto'}}>
                        <h3 style={{margin: 25, fontWeight: 100, color: 'rgba(255,255,255,0.35)'}}>&mdash;</h3>
                        <h1 style={{fontWeight: 800}}>Paris Experience</h1>
                        <p style={{fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: 25}}>
                          <LoremIpsum query='5s' className='hidden-xs' />
                          <LoremIpsum query='3s' className='visible-xs' />
                        </p>
                        <div className='text-center blog-post-btn-holder'>
                          <Button bsStyle='darkblue' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-facebook' />
                          </Button>{' '}
                          <Button bsStyle='blue' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-twitter' />
                          </Button>{' '}
                          <Button bsStyle='red' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-gplus' />
                          </Button>{' '}
                          <Button bsStyle='orange75' className='btn-icon' retainBackground>
                            <Icon glyph='icon-fontello-instagram' />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12} style={{padding: 60}}>
                  <h2 className='fg-black' style={{fontWeight: 800, marginTop: 0}}>{this.props.header}</h2>
                  <Grid>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <div className='fg-darkgray50'>
                          <small>by <a href='#'>{this.props.author}</a> / {this.props.date}</small>
                        </div>
                      </Col>
                      <Col xs={6} collapseLeft collapseRight className='text-right'>
                        <div className='fg-darkgray25 fg-hover-black50'>
                          <small><Icon glyph='icon-ikons-time' style={{position: 'relative', top: 1}} /><span> {this.props.minutes} minutes read</span></small>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                  <div>{this.props.children}</div>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

@withRouter
export default class Post extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <PostItem
        header='Paris through Pentax'
        author='Jordyn Ouellet (guest author)'
        date='Sep 2, 2014'
        minutes='2'
        tag='ENTERTAINMENT'
        comments='10'>
        <Lead className='fg-black75'>
          <LoremIpsum query='4s' />..
        </Lead>
        <p>
          <LoremIpsum query='2s' />{' '}
          <a href='#' className='text-capitalize'><LoremIpsum query='2w' /></a>{' '}
          <LoremIpsum query='3s' />
        </p>
        <div style={{marginTop: 25, marginBottom: 25}}>
          <ResponsiveEmbed a16by9>
            <iframe className='embed-responsive-item' src='//player.vimeo.com/video/104088954' allowFullScreen></iframe>
          </ResponsiveEmbed>
        </div>
        <div>
          <h3 className='fg-black text-capitalize' style={{fontWeight: 800}}><LoremIpsum query='3w' /></h3>
          <p><LoremIpsum query='1s' />{' '}<strong><em><LoremIpsum query='1s' /></em></strong></p>
          <blockquote>
            <LoremIpsum query='3s' />
          </blockquote>
          <p><LoremIpsum query='7s' /></p>
          <div className='text-uppercase'>
            <small>
              <span><strong>Tagged in: </strong></span><Link to={::this.getPath('blogs/posts')}>Entertainment</Link>
              <span> • </span>
              <a href='#'>No comments</a>
            </small>
          </div>
        </div>
      </PostItem>
    );
  }
}
