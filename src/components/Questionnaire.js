import React, { Component } from 'react';
import Header from "./Header";
import { FormGroup, Form, Input, Row, Col, Label, Button, Collapse } from "reactstrap";
import Common from './Common';
import '../questionnaire.css';
import axios from "axios";
import qs from "querystringify";


export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      //question_type : set([this.state.questions.type]),
      answers: ["1", "2", "3", "4", "5", "6", "7"],
      collapsePanel :true,
      ans:[],
      comments: ""
    }
  
    this.onSelectData = this.onSelectData.bind(this);
 this.handleExampleCommentChange = this.handleExampleCommentChange.bind(this);
    //let last_data_type =  this.state.questions[0].type;
     
  }
  handleSubmit = evt =>{
    evt.preventDefault();
    var params = new URLSearchParams(window.location.search);
    let survey_id = params.get('survey_id');
    let survey_name = params.get('survey_name');
   
    console.log("survey_id", survey_id);
    console.log("survey_name", survey_name);
    
    console.log(evt)
    console.log("answers", this.state.ans)
    console.log("comments", this.state.comments)
    axios.put('http://localhost:3000/updateSurvey', {
      "survey_id": survey_id,
      "survey_name": survey_name,
      "survey_ratings": this.state.ans,
      "survey_comments": this.state.comments

    }).then((res)=> {
      console.log("res", res);
      alert("Thanks for taking the survey");
    })
    
    // window.close();
    
    }
    onSelectData(data){
     // data.target.className += ' selectedStar';
      const qid = data.target.id;
      const answer = data.target.getAttribute("data-answer");
      let elements = document.getElementsByClassName(qid+"_question");
      this.selectStars(elements,answer,qid);
      var index = this.state.ans.findIndex( question => question.question_id === data.target.id);
      if (index !== -1){
        this.state.ans[index].answer = data.target.getAttribute("data-answer");
      } else {
        this.setState({
          ans: [
          // ...this.state.ans.slice(0,index),
          // Object.assign({},this.state.ans[index],{an:data.target.value, id:data.target.index}),
          // ...this.state.ans.slice(index+1)
          ...this.state.ans,{
          'question_id': data.target.id,
          'answer': data.target.getAttribute("data-answer")
          }]
        })
      }
    }
    selectStars(elements,answer,qid){
      debugger
      for(let i=0; i < elements.length; i++){
        let ele = document.getElementsByClassName(qid+"_question")[i];
        if(Number(answer) >= i+1){
          ele.classList.contains("selectedStar") ? ele.classList.contains("selectedStar") : ele.classList += " selectedStar";
        } else {
          ele.classList.contains("selectedStar") ? ele.classList.remove("selectedStar") : ele.classList.contains("selectedStar");
        }
      }
    }
toggleCollapsePanel()  {
   this.setState(state => ({ collapsePanel : !state.collapsePanel }));
}
handleExampleCommentChange(evt){
  this.setState({comments:evt.target.value})
  }
componentDidMount(){
  axios.get('http://localhost:3000/getTemplate').then(res=> {
    this.setState({questions: res.data.questions})
    this.setState({template_name: res.data.template_name})
    console.log(this.state.questions)
    let search = window.location.search;
let params = new URLSearchParams(search);
let foo = params.get('query');
    console.log("foo", this.props);
    })
}
  render() {
    return (
      <div>

        <Form className="row">
        {/* <Button className="w-100 no-border" onClick={this.toggleCollapsePanel.bind(this)}></Button> */}
          {this.state.questions && this.state.questions.map((data, index) =>
          <div className="col-12 p-2 pl-5 form-group question">
              <div className="col-12">
                <Label className="question-content">{data.question}</Label>
                  <div className="d-flex">
                    {this.state.answers && this.state.answers.map((answerList, ind) =>
                      <Col >
                        <div className="col-12 question-option">
                          {/* <Input value={++ind} onChange = {this.onSelectData} type="radio" name={index} id={data.question_id} /> */}
                          <span className={"fa fa-star fa-2x "+data.question_id+"_question"} onClick = {this.onSelectData} data-answer={++ind} name={index} id={data.question_id} ></span>
                        </div>
                        <div> 
                        </div>
                      </Col>
                    )}
                  </div>
                  </div>
              {/* </Collapse>
              } */}
            </div>
          )}
          <FormGroup className="w-100">
            <Row >
                    <Col className="col-12">
                       <textarea onChange = {this.handleExampleCommentChange} rows="3" className="form-control w-100" placeholder="Enter your comments here"></textarea>
                    </Col>
                  </Row>
            </FormGroup>
            <div className="w-100">
            <Button type="button" outline color="btn btn-primary float-right mb-5 px-5 py-2" onClick={this.handleSubmit} >Submit</Button>
            </div>
        </Form>

      </div>
    )
  }
}
