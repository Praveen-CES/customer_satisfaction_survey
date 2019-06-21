import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import Datasort from 'react-data-sort'

export default class ViewTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [],
            template_name: ""
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/getTemplate').then(res=> {
        console.log("res", res.data.questions);
        console.log(res.data.template_name)
        this.setState({questions: res.data.questions})
        this.setState({template_name: res.data.template_name})
        })
        // questions.sort(function(a,b){
        //     var textA = a.question_type.toUpperCase();
        //     var textB = b.question_type.toUpperCase();
        //     return (textA < textB)? -1 : (textA > textB) ? 1: 0;
        // })
    }
   
    render() {
        return (
            <div>
             <FormGroup>
                 <Row className="align-items-center">
                 <Col>
               <Label>
                  {this.state.questions && this.state.questions.map((data) =>
                    <li>{data.question_type} : {data.question}</li>
                  )}

                </Label>
                </Col>
                </Row>
                </FormGroup>
            </div>
        )
    }
}
