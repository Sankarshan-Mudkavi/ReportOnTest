import React from 'react';
import ReactDOM from 'react-dom';

import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class Dropzonejs extends React.Component {
  componentDidMount() {
    $('#my-awesome-dropzone').dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      accept: (file, done) => {
        done();
      }
    });
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Dropzone</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h4>
                        DropzoneJS is an open source library that provides drag'n'drop file uploads with image previews.
                      </h4>
                      <Form action='/dropzone/file-upload'
                            className='dropzone'
                            id='my-awesome-dropzone'>
                      </Form>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
