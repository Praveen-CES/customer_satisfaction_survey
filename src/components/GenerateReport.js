import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import YearPicker from "react-year-picker";
import Report from "./Report";
import { Link } from "react-router-dom";

const divStyle = {
  //width: "300px",
  margin: "20px"
}
export default class GenerateReport extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleReportShown = this.toggleReportShown.bind(this);
    this.state = {
      collapse: false,
      dropdownOpen: false,
      isReportShown: false,
      selectCustomer: ["Sample Customer 1", "Sample Customer 2", "Sample Customer 3", "Sample Customer 4"],
      selectSurvey: ["Sample Survey 1", "Sample Survey 2", "Sample Survey 3", "Sample Survey 4"]
    };
  }
  toggle() {
    this.setState(state => ({
      collapse: !state.collapse
    }));

  }
  toggleReportShown() {
    this.setState({
      isReportShown: !this.state.isReportShown
    });

  }
  handleSubmit = evt => {

    console.log("evt", evt);

    var href = '/report' + evt;


  }
  render() {
    return (


      <div style={divStyle}>

        <Form>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={{float:"right",fontWeight:"bold"}}  for="exampleSelect">Customer Name : </Label>
              </Col>
              <Col lg="10">
                <Input type="select" name="cycle" id="exampleSelect">
                  {this.state.selectCustomer && this.state.selectCustomer.map((data) =>
                    <option>{data}</option>
                  )}

                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={{float:"right",fontWeight:"bold"}}  for="exampleSelect">Period year : </Label>
              </Col>
              <Col lg="10">
                <YearPicker onChange={this.handleChange} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={{float:"right",fontWeight:"bold"}}  for="exampleSelect">Cycle : </Label>
              </Col>
              <Col lg="10">
                <Input type="select" name="cycle" id="exampleSelect">
                  <option>Quarter 1</option>
                  <option>Quarter 2</option>
                  <option>Quarter 3</option>
                  <option>Quarter 4</option>
                </Input>
              </Col>
            </Row>

          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={{float:"right",fontWeight:"bold"}}  for="exampleSelect">Survey Name : </Label>
              </Col>
              <Col lg="10">
                <Input type="select" name="cycle" id="exampleSelect">
                  {this.state.selectSurvey && this.state.selectSurvey.map((data) =>
                    <option>{data}</option>
                  )}

                </Input>
              </Col>
            </Row>
          </FormGroup>
          <Button type="button" outline color="primary" onClick={this.toggleReportShown}>Generate Report</Button>{' '}
          {this.state.isReportShown &&
            <FormGroup>
              <div style={divStyle}>
                <Label>Customer Satisfactory Percentage : </Label>
              </div>
              <div style={divStyle}>
                <Button type="button" outline color="primary" onClick={(e) => this.handleSubmit(e)}><Link target="_blank" to="/Report" >View Report</Link></Button>{' '}
              </div>
            </FormGroup>

          }
        </Form>


      </div>
    )
  }
}