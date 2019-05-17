import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../CESLogo.png';
import '../index.css'
const headerStyle = {
   height : '90px',backgroundColor : '#f4f4f4',borderBottom: '1px solid #15467c'
};

export default class Header extends Component {

  render() {
    const { header } = this.props;
    return (
      <div style={headerStyle}>
        <Row className="m-0 justify-content-center align-items-center" style={headerStyle} >
          <Col xs="12" md="2" >
          <img src={logo} class="align-center" allign="middle"/>
          </Col>
          <Col xs="12" md="10">
      <h1 style ={{textAlign: "center"}}>Customer Satisfaction Survey</h1>
          </Col>
        </Row>
        

      </div>
    )
  }
}
