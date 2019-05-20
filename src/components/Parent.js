import React, { Component } from 'react'
import { Row, Col,Container } from 'reactstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddQuestions from './AddQuestions.js';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Report from './Report';

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
  }
];

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (

      <Router>
        <Header ></Header>
        <Row className="m-0">
          <Col className="p-0 sidebar-list" md="2">
            <Sidebar toggle={this.toggle} isOpen={this.state.isOpen} />
          </Col>
          <Col xs="12" md="10">
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
