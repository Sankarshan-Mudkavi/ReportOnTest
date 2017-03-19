import React from 'react';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logger: 'testing'
    };
  }

  componentDidMount() {
    $('#ex1').bootstrapSlider({
      formater: (value) => {
        return 'Current value: ' + value;
      }
    });
    $('#ex2').bootstrapSlider({});

    var r, g, b;
    var RGBChange = () => {
      $('#RGB').css('background', 'rgb('+$('#R').bootstrapSlider('getValue')+','+$('#G').bootstrapSlider('getValue')+','+$('#B').bootstrapSlider('getValue')+')')
    };
    r = $('#R').bootstrapSlider()
        .on('slide', RGBChange)
        .data('slider');
    g = $('#G').bootstrapSlider()
        .on('slide', RGBChange)
        .data('slider');
    b = $('#B').bootstrapSlider()
        .on('slide', RGBChange)
        .data('slider');
    $('#ex4').bootstrapSlider({
      reversed : true
    });
    $('#ex6').bootstrapSlider();
    $('#ex6').on('slide', (slideEvt) => {
      $('#ex6SliderVal').text(slideEvt.value);
    });
    $('#ex7').bootstrapSlider();
    $('#ex7-enabled').click(function() {
      if(this.checked) {
        $('#ex7').bootstrapSlider('enable');
      }
      else {
        $('#ex7').bootstrapSlider('disable');
      }
    });
    $('#ex8').bootstrapSlider({
      tooltip: 'always'
    });
    $('#ex9').bootstrapSlider({
      precision: 2,
      value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
    });
    $('#example_1').ionRangeSlider({
      min: 0,
      max: 5000,
      type: 'double',
      prefix: '$',
      maxPostfix: '+',
      prettify: false,
      hasGrid: true,
      gridMargin: 7
    });
    $('#example_2').ionRangeSlider({
      min: 1000,
      max: 100000,
      from: 30000,
      to: 90000,
      type: 'double',
      step: 500,
      postfix: ' €',
      hasGrid: true,
      gridMargin: 15
    });
    $('#example_3').ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: ' carats',
      prettify: false,
      hasGrid: true
    });
    $('#example_4').ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      postfix: '°',
      prettify: false,
      hasGrid: true
    });
    $('#example_5').ionRangeSlider({
      values: [
        'January', 'February',
        'March', 'April',
        'May', 'June',
        'July', 'August',
        'September', 'October',
        'November', 'December'
      ],
      type: 'single',
      hasGrid: true
    });
    $('#example_6').ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 1000,
      postfix: ' miles',
      from: 55000,
      hideMinMax: false,
      hideFromTo: true
    });
    $('#example_7').ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 100,
      postfix: ' km',
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });
    $('#example_8').ionRangeSlider({
      min: 1000000,
      max: 100000000,
      type: 'double',
      postfix: ' pounds',
      step: 10000,
      from: 25000000,
      to: 35000000,
      onChange: (obj) => {
        delete obj.input;
        delete obj.slider;
        this.setState({logger: JSON.stringify(obj, null, 2)}, () => {
          Prism.highlightAll();
        });
      },
      onLoad: (obj) => {
        delete obj.input;
        delete obj.slider;
        this.setState({logger: JSON.stringify(obj, null, 2)}, () => {
          Prism.highlightAll();
        });
      }
    });
  }

  render() {
    return (
      <Row>
        <Col sm={6} collapseRight>
          <PanelContainer>
            <PanelHeader className='bg-green fg-white'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>Bootstrap Sliders</h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col sm={12}>
                    <FormControl id='ex1' ref='ex1' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='14'/>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col sm={12}>
                    <div>Filter by price interval: <b>$ 10</b> <FormControl id='ex2' ref='ex2' type='text' className='span2' value='' data-slider-min='10' data-slider-max='1000' data-slider-step='5' data-slider-value='[250,450]'/> <b>$ 1000</b></div>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col xs={6} className='text-right'>
                    <p>
                      <b>R</b> <FormControl type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='128' data-slider-id='RC' id='R' ref='R' data-slider-tooltip='hide' data-slider-handle='square' />
                    </p>
                    <p>
                      <b>G</b> <FormControl type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='200' data-slider-id='GC' id='G' ref='G' data-slider-tooltip='hide' data-slider-handle='round' />
                    </p>
                    <p>
                      <b>B</b> <FormControl type='text' className='span2' value='' data-slider-min='0' data-slider-max='255' data-slider-step='1' data-slider-value='128' data-slider-id='BC' id='B' ref='B' data-slider-tooltip='hide' data-slider-handle='triangle' />
                    </p>
                  </Col>
                  <Col xs={6} className='text-left'>
                    <div id='RGB'></div>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col sm={4} className='text-center'>
                    <FormControl id='ex4' ref='ex4' type='text' data-slider-min='-5' data-slider-max='20' data-slider-step='1' data-slider-value='-3' data-slider-orientation='vertical'/>
                  </Col>
                  <Col sm={8} className='text-center'>
                    <div>
                      <div><label id='ex6CurrentSliderValLabel' ref='ex6CurrentSliderValLabel'>Current Slider Value: <span id='ex6SliderVal'>3</span></label></div>
                      <FormControl id='ex6' ref='ex6' type='text' data-slider-min='-5' data-slider-max='20' data-slider-step='1' data-slider-value='3'/>
                    </div>
                    <hr/>
                    <div>
                      <div>
                        <label style={{marginRight: 10}} htmlFor='ex7-enabled'>Enabled</label>
                        <input id='ex7-enabled' ref='ex7-enabled' type='checkbox'/>
                      </div>
                      <FormControl id='ex7' ref='ex7' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='5' data-slider-enabled='false'/>
                    </div>
                    <hr/>
                    <div>
                      <FormControl id='ex8' ref='ex8' data-slider-id='ex1Slider' type='text' data-slider-min='0' data-slider-max='20' data-slider-step='1' data-slider-value='14'/>
                    </div>
                    <div>
                      <FormControl id='ex9' ref='ex9' type='text'/>
                    </div>
                    <br/>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
          </PanelContainer>
        </Col>
        <Col sm={6}>
          <PanelContainer>
            <PanelHeader className='bg-purple fg-white'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>Ion Sliders</h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_1' ref='example_1' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_2' ref='example_2' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_3' ref='example_3' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_4' ref='example_4' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_5' ref='example_5' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_6' ref='example_6' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_7' ref='example_7' />
                    </div>
                    <hr/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div>
                      <FormControl type='text' id='example_8' ref='example_8' />
                    </div>
                    <pre>
                      <code className='language-javascript'>
                        {this.state.logger}
                      </code>
                    </pre>
                    <br/>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
