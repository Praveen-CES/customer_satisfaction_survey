import React, { Component } from 'react'
import {  Button, CardBody, Card, Form, FormGroup, Label, Input ,Container, Row, Col} from 'reactstrap';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { questions : state.questions}
}
const divStyle = {
  width: "300px",
  margin: "20px"
}
const buttonStyle = {
    "float":'left '
}
 class AddQuestions1 extends Component {
  constructor(props) {
    super(props);
   
    this.state = { 
      questions: [{question : ""}] };
  }
  
  onClickPreventDefault(e) {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }

handleQuestionNameChange = idx => evt => {
  const newQuestions = this.state.questions.map((question, sidx) => {
    if (idx !== sidx) return question;
    return { ...question, name: evt.target.value };
  });

  this.setState({ questions: newQuestions });
};
handleAddQuestion = () => {
  this.setState({
    questions: this.state.questions.concat([{ question: "" }])
  });
};
handleRemoveQuestion(selectedValue){   
  console.log("selectedValue", selectedValue)   
  var selectedValueIndex=this.state.questions
    .findIndex(k => k.name===selectedValue);
  var arr=this.state.questions;
      arr.splice(selectedValueIndex,1);
      console.log(arr);
      console.log(this.state.questions);
      
  this.setState({
    questions:arr
  })
}
  handleSubmit = evt => {
    
    const { questions } = this.state;
    console.log("questions", questions)
  }
  render() {
    return (


      <div style = {divStyle}>
        
              
              <Form onSubmit = {this.handleSubmit}>
               
                <FormGroup>
                <Label for="questions">Question</Label>
                
                {
                   this.state.questions.map((question,idx)=>{
                    return(
                  <div className="search-qstn" key={idx} style={divStyle}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="10" md="10">
                        <Input type="text" name="questions" id="exampleQuestions" placeholder="Type your question here" value={question.name}   onChange={this.handleQuestionNameChange(idx)}/>
                        </Col>
                        <Col lg="2" md="2">
                        <Button type = "button" outline color="danger"  onClick = {this.handleRemoveQuestion.bind(this, question.name)}><span className="fa fa-trash"></span></Button>
                        </Col>
                    </Row>
                  </div>
                    )
                  })
                }
                <Row>
                  <Col lg="10" md="10">
                    <div style= {buttonStyle}>
                      <Button type = "button" outline color = "primary" className= "mt-2" onClick = {this.handleAddQuestion}>Add Question</Button>
                    </div>
                  </Col>
                </Row>
                  <Row>
                    <Col lg="10" md="10">
                    <div style = {buttonStyle}>
                    
                    <Button type="button" outline color="primary" className="mt-2" onClick={(e)=> this.handleSubmit(e)} >Submit</Button>{' '}                                  
                </div>
                    </Col>
                  </Row>
                </FormGroup>
                
              </Form>
             
           
      </div>
   
    )
  }
}

const AddQuestions = connect(mapStateToProps)(AddQuestions1)
export default AddQuestions;