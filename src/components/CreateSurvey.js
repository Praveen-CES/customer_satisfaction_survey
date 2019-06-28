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
      client:[],
      project:[],
      exampleSurvey:"",
      exampleProject: "",
      examplePassword: "",
      exampleCustomer: "",
      exampleYear: "",
      exampleQuarter: "",
      displayOutput : null ,
      surveyPassword : ""     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExampleSurveyChange=this.handleExampleSurveyChange.bind(this);
    this.handleExampleProjectChange = this.handleExampleProjectChange.bind(this);
    this.handleExamplePasswordChange = this.handleExamplePasswordChange.bind(this);
    this.handlExampleCustomerChange = this.handleExampleCustomerChange.bind(this);
    this.onSelectClient=this.onSelectClient.bind(this);
    this.onSelectProject = this.onSelectProject.bind(this);
    this.onSelectYear = this.onSelectYear.bind(this);
    this.onSelectQuarter = this.onSelectQuarter.bind(this);


  }

componentDidMount(){
axios.get('http://localhost:3000/getMetaData').then(res=> {
  console.log(res.data.client);
  this.setState({client : res.data.client,
    exampleCustomer:res.data.client[0].client_name,
    //exampleProject: res.data.client[0].project[0].project_name,
    project : res.data.client[0].project
  })
})
}

toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handleChange(date) {

this.setState({
  exampleYear:date
})
  }
  handleExampleSurveyChange(evt){
    this.setState({exampleSurvey :  evt.target.value})
  }
  handleExampleProjectChange(evt){
    this.setState({exampleProject :  evt.target.value})
  }
  handleExamplePasswordChange(evt){
    this.setState({examplePassword:  evt.target.value})
  }
  handleExampleCustomerChange(evt){
    this.setState({exampleCustomer: evt.target.value})
  }
  onSelectClient(data){
        
    const index=data.target.selectedIndex;
    const projectval=this.state.client[index].project
    
this.setState({
  project:projectval,
  exampleCustomer:data.target.value,
 //exampleProject :data.target.value
})
  }
  onSelectProject(data){
    
    this.setState({exampleProject: data.target.value})
  }
  onSelectQuarter(data){
    this.setState({exampleQuarter: data.target.value})
  }
  onSelectYear(data){
    this.setState({exampleYear : data.target.value})
  }
  handleSubmit = evt => {
    
    console.log(this.state.exampleSurvey)
    console.log(this.state.examplePassword)
    console.log("project",this.state.exampleProject)
    console.log("customer", this.state.exampleCustomer)
    console.log("Year", this.state.exampleYear)
    evt.preventDefault();
    // let data = {
    //   "survey_name" : this.state.exampleSurvey,
    //   "project_id": "1331",
    //   "project_name" : this.state.exampleProject,
    //   "client_id": "12424",
    //   "client_name": this.state.exampleCustomer,
    //   "survey_password": this.state.examplePassword
    // }
      
    axios.post('http://localhost:3000/createSurvey', {
      "survey_id": this.state.exampleCustomer.replace(/\s/g,'') + "_" + this.state.exampleProject.replace(/\s/g,'') + "_" + this.state.exampleYear + "_" + this.state.exampleQuarter,
      "survey_name" : this.state.exampleSurvey,
      "project_name" : this.state.exampleProject,
      "client_name": this.state.exampleCustomer,
      "survey_password": this.state.examplePassword,
      "year": this.state.exampleYear,
      "quarter": this.state.exampleQuarter
    }).then((res)=> {
      let resp = JSON.parse(res.request.response);
      let survey_id = resp.survey_id;
      console.log("survey_id", survey_id);
     let SurveyLink = "http://localhost:3001/questionnaire?survey_id="+survey_id;
     let SurveyPassword = resp.survey_password;
     let output = "Survey Link   "+SurveyLink
     console.log(output);
     this.setState({displayOutput : output,
    surveyPassword : "Survey Password : "+ this.state.examplePassword})
     
//alert(output)
    })

  }
  render() {
    const { selectMultiQuestions } = this.state;
    return (


      <div style={divStyle}>


        <Form >

          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle} for="exampleSelect">Survey Name : </Label>
              </Col>
              <Col lg="10">
                <Input value={this.state.exampleSurvey} onChange={this.handleExampleSurveyChange} type="text" name="survey" id="exampleSurvey" placeholder="Type your survey name here" />
              </Col>
            </Row>
          </FormGroup>

          {/* <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Customer Name : </Label>
              </Col>
              <Col lg="10">
                <Input type="text" name="customer" id="exampleCustomer" placeholder="Type your customer name here" />
              </Col>
            </Row>
          </FormGroup> */}
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Customer Name : </Label>
              </Col>
              <Col lg="10">
                <Input onChange={this.onSelectClient} type="select" name="cycle" id="exampleSelect">
                  {this.state.client && this.state.client.map((data) =>
                    <option >{data.client_name}</option>
                  )}

                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Project Name : </Label>
              </Col>
              <Col lg="10">
                <Input onChange={this.onSelectProject} name="cycle" type="select" id="exampleSelect">
                  {this.state.client && this.state.project.map((project) =>
                    <option  >{project.project_name}</option>
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
                <Input onChange={this.onSelectQuarter} type="select" name="cycle" id="exampleSelect">
                  <option>Quarter-1</option>
                  <option>Quarter-2</option>
                  <option>Quarter-3</option>
                  <option>Quarter-4</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleSelect">Survey Password : </Label>
              </Col>
              <Col lg="10">
                <Input value={this.state.examplePassword} onChange={this.handleExamplePasswordChange} type="text" name="surveyPassword" id="exampleCustomer" placeholder="Type the survey password here" />
              </Col>
            </Row>
          </FormGroup>

          {/* <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleEmail">To Address : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type recipients email address" />
              </Col>
            </Row>
          </FormGroup> */}

          {/* <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleEmail">CC : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type CC email recipients" />
              </Col>
            </Row>
          </FormGroup> */}

          {/* <FormGroup>
            <Row>
              <Col lg="2">
                <Label style={labelStyle}  for="exampleEmail">BCC : </Label>
              </Col>
              <Col lg="10">
                <Input type="email" name="email" id="exampleEmail" placeholder="Type BCC email recipients" />
              </Col>
            </Row>
          </FormGroup> */}

          {/* <FormGroup>
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
            

          </FormGroup> */}
          <div style={buttonStyle}>

          <Button type="button" outline color="primary" onClick={this.handleSubmit}>Create Survey</Button>{' '}
          </div>
        </Form>
        {this.state.displayOutput !=null && 
        <div>
        <Label>{this.state.displayOutput}</Label>
        <Label>{this.state.surveyPassword}</Label>
      </div>
      }
      </div>
     
    )
  }
}
const CreateSurvey = connect(mapStateToProps)(SurveyToBeCreated);
export default CreateSurvey;