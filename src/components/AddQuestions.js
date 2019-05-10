import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input ,Container, Row, Col} from 'reactstrap';
//import { Col } from 'antd';
//import { Form } from 'antd';
const divStyle = {
  width: "300px",
  margin: "20px"
}
const buttonStyle = {
    "float":'left '
}
export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
      questions: [] };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  onClickPreventDefault(e) {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }
  addQuestion(){
    
    this.setState({questions : [...this.state.questions, ""]})
  }
  handleChange(e){
    const question = document.getElementById("exampleQuestions").value;
    alert(question)
    this.setState(prevState => {

    });
    this.setState({questions : this.state.questons})

  }
  handleRemove(selectedValue){

    var selectedValueIndex=this.state.selectMulti.findIndex(k => k===selectedValue);
        var arr=this.state.questions;
        arr.splice(selectedValueIndex,1)
    this.setState({
      questions:arr
  })
}
  handleSubmit(e){
    
    //Send request to API
  }
  render() {
    return (


      <div style = {divStyle}>
        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Add Questions</Button>
        {<Collapse isOpen={this.state.collapse}> */}
          {/* <Card>
            <CardBody> */}
              
              <Form>
               
                <FormGroup>
                <Label for="questions">Question</Label>
                <Row className="justify-content-center align-items-center">
                        <Col lg="10" md="10">
                        <Input type="text" name="questions" id="exampleQuestions" placeholder="Type your question here" />
                        </Col>
                        <Col lg="2" md="2">
                        <button type = "button" className="btn btn-primary" onClick = {(e) => this.handleChange(e)}><span className="fa fa-plus add-new-input"></span></button>
                        </Col>
                    </Row>
                {
                  this.state.questions && this.state.questions.map((question,index)=>{
                    return(
                  <div className="search-qstn" key={index}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="10" md="10">
                        <Input type="text" name="questions" id="exampleQuestions" placeholder="Type your question here"  value={question}/>
                        </Col>
                        <Col lg="2" md="2">
                        <button type = "button" className="btn btn-primary" onClick = {(e) => this.handleChange(e)}><span className="fa fa-plus add-new-input"></span></button>
                        </Col>
                    </Row>
                  </div>
                    )
                  })
                }
                  <Row>
                    <Col lg="10" md="10">
                    <div style = {buttonStyle}>
                    {/* <Button type = "button" outline color="primary" className="mt-2" size="sm" active >Submit</Button>{' '}   */}
                    <Button type="button" outline color="primary" className="mt-2" onClick={(e)=> this.handleSubmit(e)} >Submit</Button>{' '}                                  
                </div>
                    </Col>
                  </Row>
                </FormGroup>
                
              </Form>
             
            {/* </CardBody>
          </Card> */}
        {/* </Collapse>} */}
      </div>
      // <div className="App">
      // <h1>The Form</h1>
      //   <label>Questions</label>
        
      //   {
      //     this.state.questions.map((question,index)=>{
      //       return(
      //         <div key={index}>
      //         <input onChange={(e) => this.handleChange(e, index)} value={question}/>
      //         <button onClick={(e)=> this.handleRemove(e)}>Remove </button>
      //         </div>
      //       )

      //     })
      //   }
      //   <hr />
      //   <button onClick = {(e) => this.addQuestion(e)}>Add Questions</button>
        
      //   <hr />
      //   <button onClick ={(e)=> this.handleSubmit(e)} >Submit</button>
      // </div>
    )
  }
}
