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

import codesnippet from './codesnippet.txt';

export default class Codemirrorjs extends React.Component {
  componentDidMount() {
    var editor = CodeMirror.fromTextArea($('#code').get(0), {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'ambiance'
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <PanelContainer>
              <PanelHeader className='bg-blue fg-white' style={{margin: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Codemirror</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12} style={{padding: 25}}>
                      <FormControl componentClass='textarea' id='code' name='code' defaultValue={codesnippet} />
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
