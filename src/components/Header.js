import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../CESLogo.png';
import '../index.css'
const headerStyle = {
  height: '90px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #15467c'
};

export default class Header extends Component {

  render() {

    return (
      <div style={headerStyle}>
        <Row className="m-0 justify-content-center align-items-center" style={headerStyle} >
          <Col xs="12" md="2" >
            <img src={logo} class="align-center" allign="middle" />
          </Col>
          <Col xs="12" md="10">
            <h1 style={{ textAlign: "center", paddingRight : "30%" }}>Customer Satisfaction Survey</h1>
          </Col>
        </Row>


      </div>
    )
  }
}
