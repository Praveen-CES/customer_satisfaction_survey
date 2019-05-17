import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input } from 'reactstrap';
import YearPicker from "react-year-picker";
import {connect} from "react-redux";
const divStyle = {
  width: "300px",
  margin: "20px"
}
const mapStateToProps = state => {
  return {questions : state.questions}
}
 class CreateSurvey1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      selectMulti: this.props.questions
     
    };
    this.handleChange = this.handleChange.bind(this);
   

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handleChange(date) {
    
  }
  handleSubmit = evt => {
    const {data} = this.state;
   
  }
  render() {
    const { selectMulti } = this.state;
    return (


      <div style={divStyle}>
        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Create Survey</Button>
        {<Collapse isOpen={this.state.collapse}> */}
          
              <Form>
                <FormGroup>
                  <Label for="exampleSelect">Survey Name</Label>
                  <Input type="text" name="survey" id="exampleSurvey" placeholder="Type your survey name here" />

                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Customer Name</Label>
                  <Input type="text" name="customer" id="exampleCustomer" placeholder="Type your customer name here" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Period year</Label>
                  <YearPicker onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Cycle</Label>
                  <Input type="select" name="cycle" id="exampleSelect">
                    <option>Quarter 1</option>
                    <option>Quarter 2</option>
                    <option>Quarter 3</option>
                    <option>Quarter 4</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">To Address</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Type recepeints email address" />

                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">CC</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Type CC email recepeints" />

                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">BCC</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Type BCC email recepeints" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleText">Select Questions</Label>
                <FormGroup check>
                
                {this.state.selectMulti && this.state.selectMulti.map((data)=> 
                <div>  
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                {data.name}
              </Label>
              </div>
                )}
            </FormGroup>



                </FormGroup>
                <Button type="button" outline color="primary" onClick = {(e)=> {this.handleSubmit(e)}}>Create Survey</Button>{' '}
              </Form>
            
        {/* </Collapse>} */}
      </div>
    )
  }
}
const CreateSurvey = connect(mapStateToProps)(CreateSurvey1);
export default CreateSurvey;