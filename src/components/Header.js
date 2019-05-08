import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
const colStyle = {
  border: '1px solid black' 
};

const rowStyle = {
  border: '1px solid black' 
};
export default class Header extends Component {

  render() {
    const { header } = this.props;
    return (
      <Container style={rowStyle}>
        <Row style={rowStyle} >
          <Col xs="6" md="4" style={colStyle}>1 of 2</Col>
          <Col xs="12" md="8" style={colStyle}>2 of 2</Col>
        </Row>


      </Container>
    )
  }
}
