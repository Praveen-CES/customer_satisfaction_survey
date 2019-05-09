import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
const colStyle = {
  border: '1px solid black' , height : '150px'
};

const rowStyle = {
  border: '1px solid black' , height : '150px'
};
export default class Header extends Component {

  render() {
    const { header } = this.props;
    return (
      <div style={rowStyle}>
        <Row style={rowStyle} >
          <Col xs="12" md="2" style={colStyle}> </Col>
          <Col xs="12" md="10" style={colStyle}></Col>
        </Row>
        

      </div>
    )
  }
}
