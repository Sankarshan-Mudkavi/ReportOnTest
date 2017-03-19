import React from 'react';

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  Modal,
  Button,
  Popover,
  Tooltip,
  PanelBody,
  LoremIpsum,
  PanelHeader,
  FormControl,
  PanelContainer,
  OverlayTrigger,
} from '@sketchpixy/rubix';

class BasicModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          One fine body...
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.close} bsStyle='danger'>Close</Button>
          <Button onClick={::this.close} bsStyle='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class LongModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Long Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src='/imgs/app/longmodal.jpg' alt='Long Modal' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.close} bsStyle='danger'>Close</Button>
          <Button onClick={::this.close} bsStyle='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class ModalSize extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={::this.close} bsSize={this.props.size}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoremIpsum query='2s' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.close} bsStyle='danger'>Close</Button>
          <Button onClick={::this.close} bsStyle='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SpecialModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    let popover = <Popover title='popover' id='popover'>very popover. such engagement</Popover>;
    let tooltip = <Tooltip id='tooltip'>wow.</Tooltip>;

    return (
      <Modal show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p><LoremIpsum query='1s' /></p>

          <h4>Popover in a modal</h4>
          <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

          <h4>Tooltips in a modal</h4>
          <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
          <p><LoremIpsum query='3s' /></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class Modals extends React.Component {
  destroyPlanet() {
    vex.dialog.confirm({
      message: 'Are you absolutely sure you want to destroy the alien planet?',
      callback: (value) => {
        vex.dialog.alert(value ? 'Successfully destroyed the planet.' : 'Chicken.');
      }
    });
  }

  login() {
    vex.dialog.open({
      message: 'Enter your username and password:',
      input: '' +
          '<input name="username" type="text" placeholder="Username" required />' +
          '<input name="password" type="password" placeholder="Password" required />' +
      '',
      buttons: [
          $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
          $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
      ],
      callback: (data) => {
        vex.dialog.alert('User: ' + data.username + ' Password: ' + data.password);
      }
    });
  }

  alert() {
    vex.dialog.alert('Thanks for checking out Vex!');
  }

  prompt() {
    vex.dialog.prompt({
      message: 'What planet did the aliens come from?',
      placeholder: 'Planet name',
      callback: (value) => {
        vex.dialog.alert('Callback value: <b>'+value+'</b>');
      }
    });
  }

  dtcpd() {
    var todayDateString;

    todayDateString = new Date().toJSON().slice(0, 10);

    vex.dialog.open({
      message: 'Select a date and color.',
      input: "<style>\n    .vex-custom-field-wrapper {\n        margin: 1em 0;\n    }\n    .vex-custom-field-wrapper > label {\n        display: inline-block;\n        margin-bottom: .2em;\n    }\n</style>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"date\">Date</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"date\" type=\"date\" value=\"" + todayDateString + "\" />\n    </div>\n</div>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"color\">Color</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"color\" type=\"color\" value=\"#ff00cc\" />\n    </div>\n</div>",
      callback: (data) => {
        vex.dialog.alert("<h4>Result</h4>\n<p>\n    Date: <b>" + data.date + "</b><br/>\n    Color: <span style='position:absolute;width:20px;height:20px;background:"+data.color+";margin:5px;'></span>\n</p>");
      }
    });
  }

  handleClick() {
    vex.dialog.alert('Woah!! This is mixed with Vex :D');
  }

  launchBasicModal() {
    this.basicModal.open();
  }

  launchSmallModal() {
    this.smallModal.open();
  }

  launchLargeModal() {
    this.largeModal.open();
  }

  launchLongModal() {
    this.longModal.open();
  }

  launchSpecialModal() {
    this.specialModal.open();
  }

  render() {
    return (
      <div>
        <PanelContainer>
          <PanelHeader className='bg-blue fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>HubSpot Vex Modals</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Table bordered striped>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th className='text-right'>Call to action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Alert demo
                        </td>
                        <td className='text-right'>
                          <Button outlined onClick={::this.alert}>
                            Open an alert
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Confirm demo
                        </td>
                        <td className='text-right'>
                          <Button outlined onClick={::this.destroyPlanet}>
                            Destroy the Planet!
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Prompt demo
                        </td>
                        <td className='text-right'>
                          <Button outlined onClick={::this.prompt}>
                            Open a prompt
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Login demo
                        </td>
                        <td className='text-right'>
                          <Button outlined onClick={::this.login}>
                            Login
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Date/time + Color picker demo
                        </td>
                        <td className='text-right'>
                          <Button outlined onClick={::this.dtcpd}>
                            Click me
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </PanelContainer>

        <PanelContainer>
          <PanelHeader className='bg-purple fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Bootstrap Modals</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Table bordered striped>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th className='text-right'>Call to action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Basic demo
                        </td>
                        <td className='text-right'>
                          <Button outlined bsStyle='primary' onClick={::this.launchBasicModal}>
                            Launch Basic Modal
                          </Button>
                          <BasicModal ref={(c) => this.basicModal = c} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Small modal demo
                        </td>
                        <td className='text-right'>
                          <Button outlined bsStyle='primary' onClick={::this.launchSmallModal}>
                            Launch Small Modal
                          </Button>
                          <ModalSize size='small' ref={(c) => this.smallModal = c} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Large modal demo
                        </td>
                        <td className='text-right'>
                          <Button outlined bsStyle='primary' onClick={::this.launchLargeModal}>
                            Launch Large Modal
                          </Button>
                          <ModalSize size='large' ref={(c) => this.largeModal = c} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Long modal demo
                        </td>
                        <td className='text-right'>
                          <Button outlined bsStyle='primary' onClick={::this.launchLongModal}>
                            Launch Long Modal
                          </Button>
                          <LongModal ref={(c) => this.longModal = c} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Special Modal: Tooltips and Popovers
                        </td>
                        <td className='text-right'>
                          <Button outlined bsStyle='primary' onClick={::this.launchSpecialModal}>
                            Launch Special Modal
                          </Button>
                          <SpecialModal ref={(c) => this.specialModal = c} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </PanelContainer>

      </div>
    );
  }
}
