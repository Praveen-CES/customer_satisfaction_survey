import React, { Component } from 'react'
import { Row, Col,Container } from 'reactstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header.js';
import Sidebar from './Sidebar.js';
import AddQuestions from './AddQuestions';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';
import Report from './Report';
import  Questionnaire  from "./Questionnaire";
import Common from './Common';
import Login from "./Login";
import ViewTemplate from "./ViewTemplate";
const routes = [
  {
    path: "/AddQuestions",
    exact: true,
    main: () => <AddQuestions />
  },
  {
    path: "/ViewQuestions",
    main: () => <ViewQuestions />
  },
  {
    path: "/Createsurvey",
    main: () => <CreateSurvey />
  },
  {
    path: "/GenerateReport",
    main: () => <GenerateReport />
  },
  {
    path: "/Report",
    main: () => <Report />
  },
  {
    path: "/Questionnaire",
    main: () => <Questionnaire />
    //   main: () => (
  //     <Common slider={false} view={<Questionnaire  />}/>
  //   )
  // },
  },
  {
    path: "/Login",
    main: () => <Login />
  },
  {
    path: "/Template",
    main: () => <ViewTemplate />
  }
];


export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isClient : false
    }
  }
componentDidMount(){
  let params = new URLSearchParams(window.location.search);
  let survey_id = params.get('survey_id');
  if (survey_id == null) {
    this.setState({isClient : true})
  }
}
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <Router>
        {this.state.isClient ?  <Header ></Header> : null      
        }
      <Row className={"m-0 " + (this.state.isClient ? '' : 'body-background')}>
      {this.state.isClient ? (<Col className="p-0 sidebar-list" md="2">
          <Sidebar toggle={this.toggle} isOpen={this.state.isOpen} />
        </Col>) : null
        }
        
        <Col xs="12" className={"col-xs-12 " + (this.state.isClient ? 'col-md-10 col-lg-10' : 'col-md-12 col-lg-12')}>
          <Container>

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
          </Container>
        </Col>
      </Row>
    </Router>

    )
  }
}
