import React, { Component } from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddQuestions from './AddQuestions';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';

export default class Sidebar extends Component {

   
    render() {
        return (
                <div>                                        
                    {/* <Route exact path="/" component={AddQuestions} />
                    <Route path ="/AddQuestions" component={AddQuestions} />
                    <Route path ="/ViewQuestions" component={ViewQuestions} />
                    <Route path ="/Createsurvey" component={CreateSurvey} />
                    <Route path ="/GenerateReport" component={GenerateReport} />  */}
                    <div>
                    <Link to="/AddQuestions">AddQuestions</Link>
                    </div>
                    <div>
                    <Link to="/ViewQuestions">ViewQuestions</Link>
                    </div>
                    <div>
                    <Link to="/Createsurvey">Createsurvey</Link>
                    </div>
                    <div>
                    <Link to="/GenerateReport">GenerateReport</Link>
                    </div>

                </div>
        )
    }
}
