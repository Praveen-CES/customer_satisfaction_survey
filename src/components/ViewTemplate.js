import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Button, FormGroup, Label, Input, Form,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Collapse,  Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import Datasort from 'react-data-sort'
const reportsStyle = {
    width: "100%",
    margin: "20px 0px",
    position: "sticky",
    border: '1px solid #f4f4f4',
    borderRadius:'0px 0px 5px 5px'

}
export default class ViewTemplate extends Component {
    constructor(props){
        super(props);
        this.toggleDelivery = this.toggleDelivery.bind(this);
        this.toggleProjectGovernance = this.toggleProjectGovernance.bind(this);
        this.toggleCommunication = this.toggleCommunication.bind(this);
        this.toggleWorkculture = this.toggleWorkculture.bind(this);
        this.state = {
            collapseProjectGovernance: true,
            collapseDelivery: true,
            collapseCommunication: true,
            collapseWorkculture: true,
            questions : "",
            template_name: "",
            questions_delivery : "",
            questions_communications: "",
            questions_projectGovernance : "",
            questions_workCulture : ""
        }
    }
    toggleDelivery() {
        this.setState(state => ({ collapseDelivery: !state.collapseDelivery }));
    }
    toggleProjectGovernance() {
        this.setState(state => ({ collapseProjectGovernance: !state.collapseProjectGovernance }));
    }
    toggleCommunication() {
        this.setState(state => ({ collapseCommunication: !state.collapseCommunication }));
    }
    toggleWorkculture() {
        this.setState(state => ({ collapseWorkculture: !state.collapseWorkculture }));
    }
    componentDidMount(){
        axios.get('http://localhost:3000/getTemplate').then(res=> {
        console.log("res", res.data.questions);
        console.log(res.data.template_name)
        this.setState({questions: res.data.questions})
        this.setState({template_name: res.data.template_name})
        let deliveryQns = res.data.questions.filter(qns => qns.question_type === "Delivery");
        console.log("del qns", deliveryQns);
       this.setState({questions_delivery : deliveryQns});
        let communicationQns = res.data.questions.filter(qns => qns.question_type === "Communication");
        this.setState({questions_communications: communicationQns});
        let projectGovQns = res.data.questions.filter(qns => qns.question_type === 'Project Governance');
        this.setState({questions_projectGovernance : projectGovQns});
        let workCultureQns = res.data.questions.filter(qns => qns.question_type ==="Work Culture");
        this.setState({questions_workCulture : workCultureQns});
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
             {/* <FormGroup>
                 <Row className="align-items-center">
                 <Col>
               <Label>
                  {this.state.questions && this.state.questions.map((data) =>
                    <li>{data.question_type} : {data.question}</li>
                  )}

                </Label>
                </Col>
                </Row>
                </FormGroup> */}


                 <Row className="mt-5">
                    <Col lg="7">
                        <Row>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div class="panel panel-default" style={reportsStyle} >

                                    <Button className="w-100 no-border" onClick={this.toggleDelivery} >Delivery</Button>
                                    {
                                        <Collapse isOpen={this.state.collapseDelivery}>
                                            <Card className="no-border">
                                            {this.state.questions && this.state.questions_delivery &&
                                                <CardBody style={{ textAlign : "center"}}>
                                                {this.state.questions_delivery.map((questionContent, index) => 
                                                <div className="w-100 text-left"><span>{questionContent.question}</span></div>
                                                    // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                                    // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>
                                                
                                                )}
                                                </CardBody>
                                            }
                                            </Card>
                                        </Collapse>
                                    }
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div class="panel panel-default" style={reportsStyle}>
                                    <Button className="w-100" onClick={this.toggleCommunication}>Communication</Button>
                                    {
                                        <Collapse isOpen={this.state.collapseDelivery}>
                                            <Card className="no-border">
                                            {this.state.questions && this.state.questions_communications &&
                                                <CardBody style={{ textAlign : "center"}}>
                                                {this.state.questions_communications.map((questionContent, index) => 
                                                <div className="w-100 text-left"><span>{questionContent.question}</span></div>
                                                    // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                                    // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>
                                                
                                                )}
                                                </CardBody>
                                            }
                                            </Card>
                                        </Collapse>
                                    }
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleProjectGovernance}>Project Governance</Button>
                                    {
                                        <Collapse isOpen={this.state.collapseDelivery}>
                                            <Card className="no-border">
                                            {this.state.questions && this.state.questions_projectGovernance &&
                                                <CardBody style={{ textAlign : "center"}}>
                                                {this.state.questions_projectGovernance.map((questionContent, index) => 
                                                <div className="w-100 text-left"><span>{questionContent.question}</span></div>
                                                    // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                                    // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>
                                                
                                                )}
                                                </CardBody>
                                            }
                                            </Card>
                                        </Collapse>
                                    }</div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleWorkculture}>Work Culture</Button>
                                    {
                                        <Collapse isOpen={this.state.collapseDelivery}>
                                            <Card className="no-border">
                                            {this.state.questions && this.state.questions_workCulture &&
                                                <CardBody style={{ textAlign : "center"}}>
                                                {this.state.questions_workCulture.map((questionContent, index) => 
                                                <div className="w-100 text-left"><span>{questionContent.question}</span></div>
                                                    // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                                    // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>
                                                
                                                )}
                                                </CardBody>
                                            }
                                            </Card>
                                        </Collapse>
                                    }
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    </Row>
            </div>
        )
    }
}
