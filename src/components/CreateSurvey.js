import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import YearPicker from "react-year-picker";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import axios from 'axios';
import "../App.css"
const divStyle = {
  //width: "300px",
  margin: "20px",
  // padding: '10px',
  // border: '1px solid #ccc'
}
const labelStyle = {
  float:"right",
  fontWeight:"bold",
  paddingTop : "5px"
}
const linkStyles ={
  
  //padding: "250px",
  // paddingTop : "1px"
  paddingLeft : "600px"
}
const buttonStyle = {
  display: 'flex', 
  // justifyContent: 'center',
  width:"50%",
  paddingLeft : "400px"  
  
}
const mapStateToProps = state => {
  return { questions: state.questions }
}
class SurveyToBeCreated extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      selectMultiQuestions: this.props.questions,
      client:[]
    };
    this.handleChange = this.handleChange.bind(this);


  }

componentDidMount(){
axios.get('http://localhost:3000/getMetaData').then(res=> {
  console.log(res.data.client);
  
  this.setState({client : res.data.client})

})
}

toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handleChange(date) {

  }
  handleSubmit = evt => {
    const { data } = this.state;

  }
  render() {
    const { selectMultiQuestions } = this.state;
    return (


      <div style={divStyle}>


        <Form>

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle} for="exampleSelect">Survey Name : </Label>
              </Col>
              <Col lg="10">
                <Input type="text" name="survey" id="exampleSurvey" placeholder="Type your survey name here" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Customer Name : </Label>
              </Col>
              <Col lg="10">
                <Input type="text" name="customer" id="exampleCustomer" placeholder="Type your customer name here" />
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
                <Label style={labelStyle}  for="exampleEmail">To Address : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type recipients email address" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleEmail">CC : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type CC email recipients" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleEmail">BCC : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type BCC email recipients" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleText">Select Questions : </Label>
              </Col>
              <Col lg="10">
                <FormGroup check>

                  {this.state.selectMultiQuestions && this.state.selectMultiQuestions.map((data) =>
                    <div>

                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        {data.name}
                      </Label>

                    </div>
                  )}
                  
                </FormGroup>
              </Col>
              
            </Row>
            

          </FormGroup>
          <div style={buttonStyle}>

          <Button type="button" outline color="primary" onClick={(e) => { this.handleSubmit(e) }}>Create Survey</Button>{' '}
          </div>
        </Form>
      </div>
    )
  }
}
const CreateSurvey = connect(mapStateToProps)(SurveyToBeCreated);
export default CreateSurvey;