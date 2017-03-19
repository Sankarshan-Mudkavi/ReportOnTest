import React from 'react';
import ReactDOM from 'react-dom';

import {
  Row,
  Col,
  Grid,
  Button,
  TimelineView,
  TimelineItem,
  TimelineBody,
  TimelineIcon,
  TimelineTitle,
  TimelineHeader,
} from '@sketchpixy/rubix';

export default class NotificationComponent extends React.Component {
  componentDidMount() {
    (function() {
      $(ReactDOM.findDOMNode(this.refs.sparklineOne)).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,10,12,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23], {
          type: 'bar',
          barWidth: 2,
          height: '40',
          barSpacing: 1,
          barColor: '#D71F4B'});
      $(ReactDOM.findDOMNode(this.refs.sparklineTwo)).sparkline([10,40,20,30,20,20,40,20,25,35,44,55,66,20,20,30,50,60,30,40,50,60,50,30,20,90,100,100,100,100,100,100], {
          type: 'bar',
          barWidth: 4,
          height: '40',
          barSpacing: 1,
          barColor: '#FADD7F'});
      $(ReactDOM.findDOMNode(this.refs.pieOne)).sparkline([1,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#FADD7F','#D71F4B']});
      $(ReactDOM.findDOMNode(this.refs.pieTwo)).sparkline([0.2,1], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#ff9900','#109618']});
      $(ReactDOM.findDOMNode(this.refs.pieThree)).sparkline([1,0.2,0.3,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#ff9900','#109618','#66aa00','#dd4477']});
      $(ReactDOM.findDOMNode(this.refs.pieFour)).sparkline([0.2,0.3,0.4,0.1,1,0.2], {
          type: 'pie',
          width: '35',
          height: '35',
          sliceColors: ['#dd4477','#0099c6','#990099','#ff9900','#B4A1DD','#66aa00']});
    }.bind(this))();
  }
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} collapseLeft collapseRight>
              <TimelineView className='border-black50 tl-deepred'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon glyph='icon-fontello-attention-3 bg-deepred fg-white' />
                    <TimelineTitle>
                      SYSTEM-WIDE ALERTS
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 12, 2014</strong></small></div>
                          <div><small>Spike in network traffic detected.</small></div>
                          <div><div ref='sparklineOne'></div></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 10, 2014</strong></small></div>
                          <div><small>Node 1 down for 30 minutes! Take action!</small></div>
                        </div>
                        <br/>
                        <div className='text-center'>
                          <Button xs outlined bsStyle='darkgreen45'>
                            Restore
                          </Button>{' '}
                          <Button xs outlined bsStyle='red'>
                            Destroy
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
              <TimelineView className='border-black50 tl-yellow'>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon glyph='icon-fontello-attention-3 bg-yellow fg-red' />
                    <TimelineTitle>
                      NODE ALERTS
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 12, 2014</strong></small></div>
                          <div><small>CPU running at 100% on Node 1.</small></div>
                          <div><div ref='sparklineTwo'></div></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='fg-lightgray'><small><strong>Aug 10, 2014</strong></small></div>
                          <div><small>Running out of disk space on <strong className='fg-yellow'>Node 2</strong>, <strong className='fg-yellow'>Node 3</strong>, <strong className='fg-yellow'>Node 5</strong> and <strong className='fg-yellow'>Node 7</strong></small></div>
                        </div>
                        <br/>
                        <div className='text-center'>
                          <span ref='pieOne' style={{marginLeft: 5}}></span>
                          <span ref='pieTwo' style={{marginLeft: 5}}></span>
                          <span ref='pieThree' style={{marginLeft: 5}}></span>
                          <span ref='pieFour' style={{marginLeft: 5}}></span>
                        </div>
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
