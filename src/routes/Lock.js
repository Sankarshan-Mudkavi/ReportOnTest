import React from 'react';
import { withRouter } from 'react-router';

import {
  Row,
  Col,
  Grid,
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from '@sketchpixy/rubix';

@withRouter
export default class Lock extends React.Component {
  interval = null;

  state = {
    time: null,
    date: null
  };

  getTimeState() {
    return {
      time: moment().format('hh:mm:ss'),
      date: moment().format('dddd, MMMM YYYY')
    };
  }

  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    $('html').removeClass('authentication');
  }

  componentDidMount() {
    $('html').addClass('authentication');
    this.setState(this.getTimeState());
    this.interval = setInterval(() => {
      this.setState(this.getTimeState());
    }, 500);
  }

  render() {
    return (
      <div id='auth-container' className='lockpage'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12} className='text-center'>
                  <h1 className='fg-white' style={{fontSize: 81, fontWeight: 300}}>{this.state.time}</h1>
                  <h6 className='fg-white'>{this.state.date}</h6>
                </Col>
              </Row>
              <Row style={{marginTop: 50}}>
                <Col sm={12} className='text-center'>
                  <Form onSubmit={::this.back}>
                    <FormGroup
                      controlId="lockFormGroup">
                      <ControlLabel>Anna Sanchez</ControlLabel>
                      <img src='/imgs/app/avatars/avatar.jpg' width='128' height='128' alt='avatar' />
                      <FormControl type='password' placeholder='Password' autoFocus />
                      <Button type='submit' className='hidden'>Unlock</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
