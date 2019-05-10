import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddQuestions from './AddQuestions';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';
import Header from './Header';
import Sidebar from './Sidebar';
const routes = [
    {
      path: "/AddQuestions",      
      exact: true,    
      main: () => <AddQuestions/>
    },
    {
      path: "/ViewQuestions",
      main: () =><ViewQuestions/>
    },
    {
      path: "/Createsurvey",
      main: () => <CreateSurvey/>
    },
    {
        path: "/GenerateReport",
        main: () => <GenerateReport/>
      }
  ];
export default class Parent extends Component {

    
    render() {
        return(  
            
            <Router>     
                <Header ></Header>
            <Row  className="m-0">
            <Col xs="12" md="2">
            <Sidebar />
        </Col>
        <Col xs="12" md="10">

        {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
            </Col>
            </Row>
            </Router>
                  
        )
    }
}
