import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input } from 'reactstrap';
import YearPicker from "react-year-picker";
export default class CreateSurvey extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      selectMulti: ["Sample Question 1", "Sample Question 2", "Sample Question 3"]
    };
    this.handleChange = this.handleChange.bind(this);

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handleChange(date) {
    console.log(date);
  }
  render() {
    return (


      <div>
        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Create Survey</Button>
        {<Collapse isOpen={this.state.collapse}> */}
          <Card>
            <CardBody>
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
                <FormGroup check>
                <Label>Select Questions</Label>
                {this.state.selectMulti.map((data)=> 
                <div>  
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                {data}
              </Label>
              </div>
                )}
            </FormGroup>



                </FormGroup>
                <Button type="button" outline color="primary">Create Survey</Button>{' '}
              </Form>
            </CardBody>
          </Card>
        {/* </Collapse>} */}
      </div>
    )
  }
}