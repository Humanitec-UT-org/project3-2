import React, { Component } from "react";
import {
  Row,
  Col,
  Toast,
  ToastHeader,
  ToastBody,
  Button
} from "react-bootstrap";
class Example extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={6}>
            <Toast
              onClose={() => this.setState({ show: false })}
              show={this.state.show}
              delay={3000}
              autohide
            >
              <ToastHeader>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </ToastHeader>
              <ToastBody>
                Woohoo, you're reading this text in a Toast!
              </ToastBody>
            </Toast>
          </Col>
          <Col xs={6}>
            <Button onClick={() => this.setState({ show: true })}>
              Show Toast
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Example;
