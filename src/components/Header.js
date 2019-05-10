import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../CESLogo.png';

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
        <Row className="m-0" style={rowStyle} >
          <Col xs="12" md="2" style={colStyle}>
          <img src={logo}/>
          </Col>
          <Col xs="12" md="10" style={colStyle}>
      <h1 style ={{textAlign: "center"}}>Customer Satisfaction Survey</h1>
          </Col>
        </Row>
        

      </div>
    )
  }
}
