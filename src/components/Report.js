import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Collapse, Button, Row, Col
} from 'reactstrap';
import '../App.css'
import axios from 'axios'

const reportsStyle = {
    width: "100%",
    margin: "20px 0px",
    position: "sticky",
    border: '1px solid #f4f4f4',
    borderRadius:'0px 0px 5px 5px'

}

export default class Report extends Component {
    constructor(props) {
        super(props);
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
            results: []
        };
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
        axios.get('http://localhost:3000/getSurvey').then((res)=> {
            console.log("res", res);
            this.setState({results : res.data})
        })

    }
    render() {
        return (

            <div>
                <div className="text-center">
                    <h2 className="justify-contenet-center allign-items-center" style={{ textAllign: "center" }}>CustomerName-ProjectName-CustomerSatisfactionSurvey</h2>
                    <h2 style={{ textAllign: "center" }}>Quarter</h2>
                    <h2 style={{ textAllign: "center" }}>Total</h2>
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
                                                <CardBody style={{ textAlign : "center"}}>
                                                    <CardTitle>Delivery</CardTitle>
                                                    <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                                                    <CardSubtitle>Sample Question 2  ratings</CardSubtitle>
                                                    <CardSubtitle>Sample Question 3  ratings</CardSubtitle>
                                                    <CardText>Comments</CardText>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    }
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div class="panel panel-default" style={reportsStyle}>
                                    <Button className="w-100" onClick={this.toggleProjectGovernance}>Project Governance</Button>
                                    {<Collapse isOpen={this.state.collapseProjectGovernance}>
                                        <Card className="no-border">

                                            <CardImg top width="100%" />
                                            <CardBody style={{ textAlign : "center"}}>
                                                <CardTitle>Project Governance</CardTitle>
                                                <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 2  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 3  ratings</CardSubtitle>
                                                <CardText>Comments</CardText>
                                            </CardBody>
                                        </Card>
                                    </Collapse>}
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleCommunication}>Communication</Button>
                                    {<Collapse isOpen={this.state.collapseCommunication}>
                                        <Card className="no-border">

                                            <CardBody style={{ textAlign : "center"}}>
                                                <CardTitle>Communication</CardTitle>
                                                <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 2  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 3  ratings</CardSubtitle>
                                                <CardText>Comments</CardText>
                                            </CardBody>
                                        </Card>
                                    </Collapse>}</div>
                            </Col>
                            <Col lg="6" md="6" sm="12" xs="12">
                                <div style={reportsStyle} class="panel panel-default">
                                    <Button className="w-100" onClick={this.toggleWorkculture}>Work Culture</Button>
                                    {<Collapse isOpen={this.state.collapseWorkculture}>
                                        <Card className="no-border">

                                            <CardBody style={{ textAlign : "center"}}>
                                                <CardTitle>Work Culture</CardTitle>
                                                <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 2  ratings</CardSubtitle>
                                                <CardSubtitle>Sample Question 3  ratings</CardSubtitle>
                                                <CardText>Comments</CardText>
                                            </CardBody>
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
                                            <CardTitle>Comments</CardTitle>
                                            <CardSubtitle>Clients Comment</CardSubtitle>
                                            <CardText>Comments</CardText>
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
