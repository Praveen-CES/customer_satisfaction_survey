import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { addQuestion } from "../js/actions/index";
import uuidv1 from "uuid";
function mapDispatchToProps(dispatch) {
  return {

    addQuestion: question => dispatch(addQuestion(question))
  };
}
const divStyle = {
  //width: "300px",
  margin: "20px"
}
const buttonStyle = {
  display: 'flex', 
  // justifyContent: 'center',
  width:"50%",
  paddingLeft : "150px"
}
class QuestionsToAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [{ question: "" }],
      fields : {},
      errors : {}
    };
  }
  handleValidation(){

    
    let questions = this.state.questions;

    var count=0;
   questions.map((data)=>{
     
     //if
      //const {name}= data;      
      //if (data.name.length==0)
      if(!data.name)
      count++
      else if(data.name.trim().length===0)
      count++
      else
      {}
      //count=count
      // else if (data.name.length==0)
      // formIsValid=false;
    

    })
     return !(count>0)
    //let errors = this.state.errors;
    //let formIsValid = fal

    //add question
       
    // if(fields["name"]){
    //   formIsValid = true;      
    //   return formIsValid
    // }
    // else{
    //   return formIsValid
    //   //errors["name"] = "Cannot be empty";
    // }
  }

  onClickPreventDefault(e) {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }

  handleChange(idx,event) {
    
    this.setState({value: event.target.value});
    const newQuestions = this.state.questions.map((question, sidx) => {
      if (idx !== sidx) return question;
      return { ...question, name: event.target.value, id: uuidv1() };
    });

    this.setState({ questions: newQuestions });
  }

  
  handleAddQuestion = () => {
    this.setState({
      questions: this.state.questions.concat([{ question: "" }])
    });
  };
  handleRemoveQuestion(selectedValue) {

    var selectedValueIndex = this.state.questions
      .findIndex(k => k.name === selectedValue);
    var arr = this.state.questions;
    arr.splice(selectedValueIndex, 1);


    this.setState({
      questions: arr
    })
  }
  handleSubmit = evt => {
    evt.preventDefault();
    const { questions } = this.state;
    if(this.handleValidation()){
      this.props.addQuestion({ questions });
      alert("Added");
    }
    else{
      alert("Form shouldn't be empty");
    }
    

  }
  render() {
    return (


      <div style={divStyle}>


        <Form onSubmit={this.handleSubmit}>

          <FormGroup>
            
          <h3 for="questions">Add Questions</h3>
            {
              this.state.questions.map((question, idx) => {
                return (
                  <div className="search-qstn" key={idx} style={divStyle}>
                   
                    <Row>
                       
                      <Col lg="5" md="5" className="p-0">
                      
                        <Input type="text" name="questions" id="exampleQuestions" placeholder="Type your question here" value={question.name} onChange={this.handleChange.bind(this,idx)}
                         //onChange={this.handleQuestionNameChange.bind(this,idx)}
                          />
                      
                      </Col>
                      <Col lg="2" md="2">
                        <Button type="button" outline color="danger" onClick={this.handleRemoveQuestion.bind(this, question.name)}><span className="fa fa-trash"></span></Button>
                      </Col>
                    </Row>
                  </div>
                )
              })
            }
            <Row>
              <Col lg="10" md="10">
                <div style={buttonStyle}>
                  <Button style = {{display:"flex" }}type="button" outline color="primary" className="mt-2" onClick={this.handleAddQuestion}>Add Question</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="10" md="10">
                <div style={buttonStyle}>

                  <Button type="button" outline color="primary" className="mt-2" onClick={(e) => this.handleSubmit(e)} >Submit</Button>{' '}
                </div>
              </Col>
            </Row>
          </FormGroup>

        </Form>


      </div>

    )
  }
}

const AddQuestions = connect(null, mapDispatchToProps)(QuestionsToAdd)
export default AddQuestions;