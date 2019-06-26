import React, { Component } from 'react'
import { Row, Col,Container } from 'reactstrap'
import Header from './Header.js';
import Sidebar from './Sidebar.js';

export default class Common extends Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
          isOpen: true
        }
      }
    
      toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    render() {
        return (
            <div>
                <Header></Header>
        <Row className="m-0">
          <Col className="p-0 sidebar-list" md="2">
          {this.props.slider &&
            <Sidebar toggle={this.toggle} isOpen={this.state.isOpen} />
          }            
          </Col>
          <Col xs="12" md="10">
            <Container>
{this.props.View}
            </Container>
          </Col>
        </Row>
            </div>
        )
    }
}
