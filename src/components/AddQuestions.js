import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input ,Container} from 'reactstrap';
//import { Form } from 'antd';
export default class AddQuestions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  onClickPreventDefault(e) {
    alert('onClickPreventDefault called, form will not submit');
    e.preventDefault();
  }
  render() {
    return (


      <div>
        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Add Questions</Button>
        {<Collapse isOpen={this.state.collapse}> */}
          <Card>
            <CardBody>
              <div>
              <Form>
               
                <FormGroup>
                <Label for="questions">Question : </Label>
                  <Input type="text" name="questions" id="exampleQuestions" placeholder="Type your question here" />
                  <Button type = "button" color="primary" size="lg" active >Submit</Button>{' '}                  
                </FormGroup>
                
              </Form>
              </div>
            </CardBody>
          </Card>
        {/* </Collapse>} */}
      </div>
    )
  }
}
