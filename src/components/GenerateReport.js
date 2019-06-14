import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import YearPicker from "react-year-picker";
import Report from "./Report";
import { Link } from "react-router-dom";
import axios from "axios";

const divStyle = {
  //width: "300px",
  margin: "20px",
  
}
const labelStyle = {
  float:"right",
  fontWeight:"bold",
  paddingTop: "5px"
}
const buttonStyle = {
  display: 'flex', 
  // justifyContent: 'center',
  width:"50%",
  paddingLeft : "400px",
   
  
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
      selectSurvey: ["Sample Survey 1", "Sample Survey 2", "Sample Survey 3", "Sample Survey 4"],
      client: []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3000/getMetaData').then(res=> {
      console.log(res.data.client);
      
      this.setState({client : res.data.client})
    
    })
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
                <Label style={labelStyle}  for="exampleSelect">Customer Name : </Label>
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
                <Label style={labelStyle}  for="exampleSelect">Period year : </Label>
              </Col>
              <Col lg="10">
                <YearPicker onChange={this.handleChange} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Cycle : </Label>
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
                <Label style={labelStyle}  for="exampleSelect">Survey Name : </Label>
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
          <div style = {buttonStyle}>
          <Button type="button" outline color="primary" onClick={this.toggleReportShown}>View Results</Button>{' '}
          </div>
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