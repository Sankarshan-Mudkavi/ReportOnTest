import React from 'react';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelHeader,
  PanelContainer,
} from '@sketchpixy/rubix';

import dataObject from './dataObject.json';

export default class InteractiveTimeline extends React.Component {
  componentDidMount() {
    createStoryJS({
      type:       'timeline',
      width:      '100%',
      height:     '600',
      id:         'my-timeline-story',
      source:     dataObject,
      embed_id:   'my-timeline'
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <PanelContainer>
              <PanelHeader className='bg-orange65 fg-white'>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Interactive Timeline</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <div id='my-timeline' dir='ltr'></div>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </PanelContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
