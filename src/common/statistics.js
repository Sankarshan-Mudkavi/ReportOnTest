import React from 'react';
import ReactDOM from 'react-dom';

import {
  Grid, Row, Col, Icon
} from '@sketchpixy/rubix';

export default class StatisticsComponent extends React.Component {
  componentDidMount() {
    (function() {
      var data = [
        {
          value: 200,
          color:'#F7464A',
          highlight: '#FF5A5E',
          label: 'Red'
        },
        {
          value: 100,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Green'
        },
        {
          value: 110,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Yellow'
        },
        {
          value: 130,
          color: '#949FB1',
          highlight: '#A8B3C5',
          label: 'Grey'
        },
        {
          value: 120,
          color: '#4D5360',
          highlight: '#616774',
          label: 'Dark Grey'
        }
      ];
      var ctx = ReactDOM.findDOMNode(this.refs.myChart).getContext('2d');
      new Chart(ctx).PolarArea(data, {
        maintainAspectRatio: true,
        scaleLineColor: 'rgba(255,255,255,0.1)'
      });
    }.bind(this))();

    (function() {
      $(ReactDOM.findDOMNode(this.refs.sparklineOne)).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,17,19,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23,2,3,1,5,6,7,3,2,8,14,12,4,7,14,19,18,22,3,14], {
          type: 'line',
          width: '200',
          height: '40',
          lineColor: '#FADD7F',
          fillColor: 'rgba(250, 221, 127, 0.5)'});

      $(ReactDOM.findDOMNode(this.refs.sparklineTwo)).sparkline([0,1,2,1,2,-0.25,-4,-2,-2,-0.6,-2,-0.5,-0.25], {
          type: 'bar',
          height: '30',
          barWidth: 6,
          zeroAxis: false,
          barColor: '#ff5a5e',
          negBarColor: '#52b27e',
          stackedBarColor: []});

      var dynamic_data = {
        nasdaq_prices: [4415.49,4440.42,4416.39,4425.97,4363.45,4432.15,4424.70,4456.02,4473.70,4472.11,4449.56,4444.91,4442.70,4462.90,4369.77,4352.64,4383.89,4352.84,4355.05,4334.97,4370.90,4401.33,4389.25,4434.13,4453.00,4464.93,4508.31,4527.51,4526.48,4532.10],
        nasdaq_volume: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        dow_prices: [16943.81,17055.42,17060.68,17138.20,16976.81,17100.18,17051.73,17113.54,17086.63,17083.80,16960.57,16982.59,16912.11,16880.36,16563.30,16493.37,16569.28,16429.47,16443.34,16368.27,16553.93,16569.98,16560.54,16651.80,16713.58,16662.91,16838.74,16919.59,16979.13,17039.49],
        dow_volume: [60599405,60569705,101734854,111503036,99238723,112530379,67590253,77958670,73444902,66387656,67289449,66187279,75984025,77746377,101667914,84856015,76255891,76627473,78599736,80426811,82415249,65558636,62768164,66015422,62370832,109183219,75671468,67221266,61963156,65160621]
      };
      $(ReactDOM.findDOMNode(this.refs.dow)).sparkline(dynamic_data.dow_volume, {height: '1.3em', type: 'bar', barSpacing: 0, barWidth: 3, barColor: '#374B55', tooltipPrefix: 'Volume: '});
      $(ReactDOM.findDOMNode(this.refs.dow)).sparkline(dynamic_data.dow_prices, {composite: true, height: '1.3em', fillColor:false, lineColor:'#EE682F', tooltipPrefix: 'Index: '});
      $(ReactDOM.findDOMNode(this.refs.nasdaq)).sparkline(dynamic_data.nasdaq_prices, {composite: false, height: '1.3em', fillColor:false, lineColor:'#7CD5BA', tooltipPrefix: 'Index: '});
      $(ReactDOM.findDOMNode(this.refs.malefemale)).sparkline('html', {
          type: 'bar',
          height: '30',
          barWidth: 5,
          barColor: '#79b0ec',
          stackedBarColor: ['#79b0ec','#EA7882']});
    }.bind(this))();
  }
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header text-center'>STATISTICS</div>
              <div style={{marginLeft: -25, marginRight: -25, marginTop: 12.5, marginBottom: 12.5}}><canvas width='250' height='150' ref='myChart'></canvas></div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 12.5, width: 200}} />
              <div>
                <div ref='sparklineOne'></div>
              </div>
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>AAPL</div>
                      <div ref='sparklineTwo'></div>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header text-left' style={{marginRight: 5, marginLeft: 5, textTransform: 'none'}}>Yearly Change</div>
                      <div>
                        <h5 className='bg-darkgreen45 fg-white text-center' style={{margin: 0, height: 30, paddingTop: 7, marginLeft: 5, marginRight: 5}}>+127.01</h5>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 25, marginBottom: 12.5, width: 200}} />
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>NASDAQ</div>
                      <div ref='nasdaq'></div>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div className='sidebar-header'>DOW</div>
                      <div ref='dow'></div>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid>
                  <Row>
                    <Col xs={6} collapseLeft collapseRight>
                      <div>
                        <span className='fg-yellow'>USD </span>
                        <span className='fg-green'>0.43% <Icon glyph='icon-fontello-up-dir'/></span>
                      </div>
                      <div className='fg-white'>
                        <h4 style={{marginTop: 0}}>$518.47</h4>
                      </div>
                      <p>
                        <span className='fg-yellow'>EUR </span>
                        <span className='fg-white'>€391.85</span>
                      </p>
                    </Col>
                    <Col xs={6} collapseLeft collapseRight>
                      <div>
                        <span className='fg-yellow'>CNY </span>
                        <span className='fg-red'>0.24% <Icon glyph='icon-fontello-down-dir'/></span>
                      </div>
                      <div className='fg-white'>
                        <h4 style={{marginTop: 0}}>¥3,170.65</h4>
                      </div>
                      <p>
                        <span className='fg-yellow'>GBP </span>
                        <span className='fg-white'>£312.89</span>
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 25, width: 200}} />
              <div>
                <Grid>
                  <Row>
                    <Col xs={12} collapseLeft collapseRight>
                      <div ref='malefemale'>1:1,1:2,1:3,2:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3,1:0.25,2:0.02,1:3,3:0.5,2:4,4:1,1:1,1:2,1:4,2:1,2:3,2:1.5,2:0.5,2:0.25,1:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3</div>
                      <br/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} collapseLeft collapseRight>
                      <span className='sidebar-header'>MALE</span>
                    </Col>
                    <Col xs={8} collapseLeft collapseRight>
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-blue' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                      <Icon glyph='icon-fontello-male fg-black75' />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} collapseLeft collapseRight>
                      <span className='sidebar-header'>FEMALE</span>
                    </Col>
                    <Col xs={8} collapseLeft collapseRight>
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-red' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                      <Icon glyph='icon-fontello-female fg-black75' />
                    </Col>
                  </Row>
                </Grid>
              </div>
              <br/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
