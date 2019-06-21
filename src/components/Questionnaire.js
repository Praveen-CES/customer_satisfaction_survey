import React, { Component } from 'react';
import Header from "./Header";
import { FormGroup, Form, Input, Row, Col, Label, Button, Collapse } from "reactstrap";
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
      collapsePanel :true
    };
    //let last_data_type =  this.state.questions[0].type;
     
  }
  
toggleCollapsePanel()  {
   this.setState(state => ({ collapsePanel : !state.collapsePanel }));
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

        <Form>
        {/* <Button className="w-100 no-border" onClick={this.toggleCollapsePanel.bind(this)}></Button> */}
          {this.state.questions && this.state.questions.map((data, index) =>
          <div>
            <FormGroup>
              
              {/* {
                <Collapse isOpen={this.state.collapsePanel}> */}
              <div>
                
                <div>

                  <Label>{data.question}</Label>
                  <Row>
                    {this.state.answers && this.state.answers.map((data, ind) =>
                     <div>
                      <Col >
                        <div>
                          <Input onChange = {this.handleInputChange} type="radio" name={index} value={ind} data-id={data.question_id} />
                        </div>
                        <div>
                          <Label style={{ display: "block" }}>{data}</Label>
                        </div>
                      </Col>
                      </div>
                     

                    )}
                  </Row>
                 
                </div>

              </div>
              {/* </Collapse>
              } */}

            </FormGroup>
            
            </div>
          )}
          <FormGroup>
            <Row>
                    <Col>
                       <Input type= "text" placeholder="Enter your comments here"/>
                    </Col>
                  </Row>
            </FormGroup>
          <Button outline color="primary" type="button">Submit</Button>
        </Form>

      </div>
    )
  }
}
