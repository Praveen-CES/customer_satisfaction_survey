import React, { Component } from 'react';
import Header from "./Header";
import { FormGroup, Form, Input, Row, Col, Label, Button, Collapse } from "reactstrap";
import '../questionnaire.css'


export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        { question: "", type: "type 1", name: "question 1" },
        { question: "", type: "type 1", name: "question 2" },
        { question: "", type: "type 1", name: "question 3" },
        { question: "", type: "type 2", name: "question 1" },
        { question: "", type: "type 2", name: "question 2" },
        { question: "", type: "type 2", name: "question 3" },
        { question: "", type: "type 3", name: "question 1" },
        { question: "", type: "type 3", name: "question 2" },
        { question: "", type: "type 3", name: "question 3" },
        { question: "", type: "type 4", name: "question 1" },
        { question: "", type: "type 4", name: "question 2" },
        { question: "", type: "type 4", name: "question 3" }
      ],
      //question_type : set([this.state.questions.type]),
      answers: ["Excellent", "Very Good", "Good", "Average", "Bad"],
      collapsePanel :true
    };
    //let last_data_type =  this.state.questions[0].type;
     
  }
toggleCollapsePanel()  {
   this.setState(state => ({ collapsePanel : !state.collapsePanel }));
}
  render() {
    return (

      <div>

        <Form>
        <Button className="w-100 no-border" onClick={this.toggleCollapsePanel.bind(this)}></Button>
          {this.state.questions && this.state.questions.map((data) =>
          
            <FormGroup>
              
              {
                <Collapse isOpen={this.state.collapsePanel}>
              <div>
                {/* <Label>{this.state.question_type}</Label> */}
                <div>

                  <Label>{data.name}</Label>
                  <Row>
                    {this.state.answers && this.state.answers.map((data) =>

                      <Col >
                        <div>
                          <Input type="radio" name="smiley" value="happy" />
                        </div>
                        <div>
                          <Label style={{ display: "block" }}>{data}</Label>
                        </div>
                      </Col>

                    )}
                  </Row>
                </div>

              </div>
              </Collapse>
              }

            </FormGroup>
          )}
          <Button outline color="primary" type="button">Submit</Button>
        </Form>

      </div>
    )
  }
}
