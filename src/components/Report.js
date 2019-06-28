import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Collapse, Button, Row, Col
} from 'reactstrap';
import '../App.css'
import axios from 'axios'
import { connect } from 'react-redux';

const reportsStyle = {
    width: "100%",
    margin: "20px 0px",
    position: "sticky",
    border: '1px solid #f4f4f4',
    borderRadius:'0px 0px 5px 5px'

}
const mapStateToProps = state => {
    console.log('state', state);
    return { response : state.response}
}
class ViewReport extends Component {
    constructor(props) {
        super(props);
        
    console.log("constructor",this.props);
        this.toggleDelivery = this.toggleDelivery.bind(this);
        this.toggleProjectGovernance = this.toggleProjectGovernance.bind(this);
        this.toggleCommunication = this.toggleCommunication.bind(this);
        this.toggleWorkculture = this.toggleWorkculture.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
        this.state = {
            collapseProjectGovernance: true,
            collapseDelivery: true,
            collapseCommunication: true,
            collapseWorkculture: true,
            collapseComments: true,
            metaData: [],
            template : [],
            survey_results : [],
            respo : this.props.response,
            score : "",
            questions : "",
            questions_delivery : "",
            questions_communications: "",
            questions_projectGovernance : "",
            questions_workCulture : ""
        };
        console.log("13232",this.state.respo)
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
    toggleComments() {
        this.setState(state => ({ collapseComments: !state.collapseComments }));
    }
    componentDidMount(){

        axios.get('http://localhost:3000/getMetaData').then((res)=> {
            console.log("res", res);
            this.setState({metaData : res.data})
        })
        axios.get('http://localhost:3000/getTemplate').then((res)=> {
            console.log("metadata", res);
           // this.setState({template : res.data});
            this.setState({questions : res.data.questions});
            let deliveryQns = res.data.questions.filter(qns => qns.question_type === "Delivery");
            this.setState({questions_delivery : deliveryQns});
            
            let communicationQns = res.data.questions.filter(qns => qns.question_type === "Communication");
        this.setState({questions_communications: communicationQns});
        let projectGovQns = res.data.questions.filter(qns => qns.question_type === 'Project Governance');
        this.setState({questions_projectGovernance : projectGovQns});
        let workCultureQns = res.data.questions.filter(qns => qns.question_type ==="Work Culture");
        this.setState({questions_workCulture : workCultureQns});

        })
        let results_from_parent = localStorage.getItem("res");
        console.log("a", JSON.parse(results_from_parent));
        this.setState({survey_results : JSON.parse(results_from_parent)})
        let score_from_parent= localStorage.getItem("score");
        console.log("b", score_from_parent);
        this.setState({score : score_from_parent})

    }
    getQandA(questionContent){
        let q_a = this.state.survey_results.survey_ratings.filter(data => data.question_id == questionContent.question_id);
        return (<div className="w-100 text-left"><span>{questionContent.question}</span><span className="float-right">{q_a[0].answer}/7</span></div>)

    }
    render() {
        
        return (

            <div>
                <div className="text-center">
                    <h2 className="justify-contenet-center allign-items-center" style={{ textAllign: "center" }}>{this.state.survey_results.client_name}-{this.state.survey_results.project_name}</h2>
                    <h2 style={{ textAllign: "center" }}>{this.state.survey_results.year} - {this.state.survey_results.quarter}</h2>
                    <h2 style={{ textAllign: "center" }}>{this.state.score} out of 77</h2>
                </div>
                <Row className="mt-5">
                    <Col lg="7">
                        <Row>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div class="panel panel-default" style={reportsStyle} >

                                    <Button className="w-100 no-border" onClick={this.toggleDelivery} >Delivery</Button>
                                    {
                                        <Collapse isOpen={this.state.collapseDelivery}>
                                            <Card className="no-border">
                                            {this.state.survey_results.survey_ratings && this.state.questions && this.state.questions_delivery &&
                                                <CardBody style={{ textAlign : "center"}}>
                                                {this.state.questions_delivery.map((questionContent, index) => 
                                                <div>{this.getQandA(questionContent)}</div>
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
                                    {<Collapse isOpen={this.state.collapseCommunication}>
                                        <Card className="no-border">
                                        {this.state.survey_results.survey_ratings && this.state.questions && this.state.questions_communications &&
                                        <CardBody style={{ textAlign : "center"}}>
                                        {this.state.questions_communications.map((questionContent, index) => 
                                        <div>{this.getQandA(questionContent)}</div>
                                        // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                        // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>

                                        )}
                                        </CardBody>
                                        }
                                        </Card>
                                    </Collapse>}
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleProjectGovernance}>Project Governance</Button>
                                    {<Collapse isOpen={this.state.collapseProjectGovernance}>
                                        <Card className="no-border">
                                        {this.state.survey_results.survey_ratings && this.state.questions && this.state.questions_projectGovernance &&
                                        <CardBody style={{ textAlign : "center"}}>
                                        {this.state.questions_projectGovernance.map((questionContent, index) => 
                                        <div>{this.getQandA(questionContent)}</div>
                                        // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                        // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>

                                        )}
                                        </CardBody>
                                        }
                                        </Card>
                                    </Collapse>}</div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleWorkculture}>Work Culture</Button>
                                    {<Collapse isOpen={this.state.collapseWorkculture}>
                                        <Card className="no-border">
                                        {this.state.survey_results.survey_ratings && this.state.questions && this.state.questions_workCulture &&
                                        <CardBody style={{ textAlign : "center"}}>
                                        {this.state.questions_workCulture.map((questionContent, index) => 
                                        <div>{this.getQandA(questionContent)}</div>
                                        // <CardSubtitle>Meeting delivery standards  ratings</CardSubtitle>
                                        // <CardSubtitle>Meeting quality standards  ratings</CardSubtitle>

                                        )}
                                        </CardBody>
                                        }
                                        </Card>
                                    </Collapse>}
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg="5" md="5" xs="12" sm="12">
                        <div style={reportsStyle} class="panel panel-dafault">
                            <Button className="w-100" onClick={this.toggleComments}>Comments</Button>
                            {
                                <Collapse isOpen={this.state.collapseComments}>
                                    <Card className="no-border">
                                        <CardBody style={{ textAlign : "center"}}>
                                            {/* <CardTitle>Comments</CardTitle>
                                            <CardSubtitle>Clients Comment</CardSubtitle> */}
                                            <CardText>{this.state.survey_results.survey_comments}</CardText>
                                        </CardBody>
                                    </Card></Collapse>
                            }
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
const Report = connect(mapStateToProps)(ViewReport);
export default Report;