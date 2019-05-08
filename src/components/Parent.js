import React, { Component } from 'react'
import {Container} from 'reactstrap'
import AddQuestions from './AddQuestions';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';
import Header from './Header';

export default class Parent extends Component {

    render() {
        return(        
            <Container>
            <Header ></Header>
            <AddQuestions />
            <ViewQuestions />
            <CreateSurvey />
            <GenerateReport />
            </Container>
                  
        )
    }
}
