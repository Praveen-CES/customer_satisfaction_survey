import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const deliveryStyles = {
    width: "300px",
    margin: "20px"
}
const projectGovernanceStyles = {
    width: "300px",
  margin: "20px"

}
const communicationStyles = {
    width: "300px",
  margin: "20px"

}
const workCultureStyles = {
    width: "300px",
  margin: "20px"

}
const commentsStyles = {
    width: "300px",
  margin: "20px"

}
export default class Report extends Component {
    render() {
        return (
            <div>
                <div style={deliveryStyles}>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Delivery</CardTitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardText>Comments</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div style={projectGovernanceStyles}><Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Project Governance</CardTitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardText>Comments</CardText>
                        </CardBody>
                    </Card></div>
                <div style={communicationStyles}><Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Communication</CardTitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardText>Comments</CardText>
                        </CardBody>
                    </Card></div>
                <div style={workCultureStyles}><Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Work Culture</CardTitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardSubtitle>Sample Question 1  ratings</CardSubtitle>
                            <CardText>Comments</CardText>
                        </CardBody>
                    </Card></div>
                <div style={commentsStyles}>Comments</div>
            </div>
        )
    }
}
