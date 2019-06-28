import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import YearPicker from "react-year-picker";
import Report from "./Report";
import { Link } from "react-router-dom";
import axios from "axios";
import { reverse } from 'dns';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { generateReport } from "../js/actions/index";
function mapDispatchToProps(dispatch){
return {
  generateReport : response => dispatch(generateReport(response))
}
}
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


 class ReportToGenerate extends Component {
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
      client: [],
      selectedClientName: "",
      project: [],
      exampleProject: "",
      exampleCustomer: "",
      exampleYear: "",
      exampleQuarter: "",
      isSurveyTaken : false,
      isSurveyFound : 404,
      score: "" ,
      response: [] 
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSelectClient=this.onSelectClient.bind(this);
    this.onSelectProject = this.onSelectProject.bind(this);
    this.onSelectYear = this.onSelectYear.bind(this);
    this.onSelectQuarter = this.onSelectQuarter.bind(this);
    //this.href = this.props.history.createHref('/Report');
  }  
  componentDidMount(){
    axios.get('http://localhost:3000/getMetaData').then(res=> {
      console.log("metadata",res.data.client);
      this.setState({client : res.data.client,
        exampleCustomer:res.data.client[0].client_name,
        //exampleProject: res.data.client[0].project[0].project_name,
        project : res.data.client[0].project
      });
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
    console.log("project",this.state.exampleProject)
    console.log("customer", this.state.exampleCustomer)
    console.log("Year", this.state.exampleYear)
    console.log("Quarter", this.state.exampleQuarter);
    axios.get('http://localhost:3000/getSurvey?survey_id='+this.state.exampleCustomer.replace(/\s/g,'') + "_" + this.state.exampleProject.replace(/\s/g,'') + "_" + this.state.exampleYear + "_" + this.state.exampleQuarter).then(res => {
      console.log("res", res);
      
        this.setState({isSurveyFound : res.status})
     
      this.setState({isSurveyTaken : res.data.isSurveyTakenByCustomer})
      // for (let rate in res.data.survey_ratings){
      //   console.log("rate",rate.answer)
      // }
      if(res.status == 200 && res.data.isSurveyTakenByCustomer == true){
      let finalscore = parseInt(res.data.survey_ratings[0].answer)+parseInt(res.data.survey_ratings[1].answer)+parseInt(res.data.survey_ratings[2].answer)+parseInt(res.data.survey_ratings[3].answer)+parseInt(res.data.survey_ratings[4].answer)+parseInt(res.data.survey_ratings[5].answer)+parseInt(res.data.survey_ratings[6].answer)+parseInt(res.data.survey_ratings[7].answer)+parseInt(res.data.survey_ratings[8].answer)+parseInt(res.data.survey_ratings[9].answer)+parseInt(res.data.survey_ratings[10].answer);
      console.log("score", finalscore);
      this.setState({score:finalscore});
      this.setState({response: res.data});
      this.props.generateReport(res.data)
      localStorage.clear();
      
      localStorage.setItem("res", JSON.stringify(res.data));
      localStorage.setItem("score", finalscore);
      }
    })
  
  }
  onSelectClient(data){
    const index=data.target.selectedIndex;
    const projectval=this.state.client[index].project
this.setState({
  project:projectval,
  exampleCustomer:data.target.value,
})
  }
  handleChange(date) {
    
    this.setState({
      exampleYear:date
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
   

    //evt.preventDefault();


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
                <Input onChange={this.onSelectClient} type="select" name="cycle" id="exampleSelect">
                  {this.state.client && this.state.client.map((data) =>
                    <option>{data.client_name}</option>
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
                <Input onChange={this.onSelectProject} type="select" name="cycle" id="exampleSelect">
                  {this.state.client && this.state.project.map((project) =>
                    <option>{project.project_name}</option>
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
          
          <div style = {buttonStyle}>
          <Button type="button" outline color="primary" onClick={this.toggleReportShown}>View Results</Button>{' '}
          </div>
          {this.state.isReportShown && this.state.isSurveyFound == 404 &&
          <div style={divStyle}>
          <Label>No survey details found</Label>
        </div>

          }
          {this.state.isReportShown && this.state.isSurveyTaken == true && this.state.isSurveyFound == 200 &&
            <FormGroup>
              
              <div style={divStyle}>
                <Label>Customer Satisfactory Percentage : {this.state.score} / 77</Label>
              </div>
              <div style={divStyle}>
            
                <Button type="button" outline color="primary">
                
                <Link target="_blank" to={{
                  pathname: "/Report",
                  state: { resp: this.state.response }}} >View Report</Link>
                  
    {/* <a href = "/Report"target="_blank" state = { this.state.response}>View Report</a> */}
    

                  </Button>{' '}
              
              </div>
              
            </FormGroup>
            
          }
          {this.state.isReportShown && this.state.isSurveyTaken == false && this.state.isSurveyFound == 200 &&
            <FormGroup>
              
              <div style={divStyle}>
                <Label>Customer yet to take the survey, try after the survey is taken</Label>
              </div>
              {/* <div style={divStyle}>
            
                <Button type="button" outline color="primary" onClick={this.handleSubmit}><Link target="_blank" to="/Report" >View Report</Link></Button>{' '}
              
              </div> */}
              
            </FormGroup>
            
          }
          
        </Form>


      </div>
    )
  }
}
const GenerateReport = connect(null, mapDispatchToProps)(ReportToGenerate)
export default GenerateReport;