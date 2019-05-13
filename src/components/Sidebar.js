import React, { Component } from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddQuestions from './AddQuestions';
import ViewQuestions from './ViewQuestions';
import CreateSurvey from './CreateSurvey';
import GenerateReport from './GenerateReport';
import '../sidebar.css';
import classNames from 'classnames';
const divStyle = {
    width: "100%",
    //margin: "30px"
  }
export default class Sidebar extends Component {

   
    render() {
        return (

            <div style = {divStyle} className={classNames('sidebar', {'is-open': this.props.isOpen})}>
          <Nav vertical className="list-unstyled pb-3">
           
          <NavItem>
            <NavLink href="#"><Link to="/AddQuestions" >AddQuestions</Link></NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#"><Link to="/ViewQuestions" >ViewQuestions</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Createsurvey" >Createsurvey</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/GenerateReport" >GenerateReport</Link></NavLink>
          </NavItem>
        </Nav>
        </div>
                // <div style= {divStyle} 
                // class = "w3-sidebar w3-light-grey w3-bar-block"
                // >                                        
                //     <div style= {divStyle} class="w3-bar-item">
                //     <button type= "button" class = "w3-bar-item w3-button"><Link to="/AddQuestions" >AddQuestions</Link></button>
                //     </div>
                //     <div style= {divStyle} class="w3-bar-item">
                //     <button type = "button"class = "w3-bar-item w3-button"><Link to="/ViewQuestions" >ViewQuestions</Link></button>
                //     </div>
                //     <div style= {divStyle} class="w3-bar-item">
                //     <button type = "button" class = "w3-bar-item w3-button"><Link to="/Createsurvey" >Createsurvey</Link></button>
                //     </div>
                //     <div style= {divStyle} class="w3-bar-item">
                //     <button type = "button" class = "w3-bar-item w3-button"><Link to="/GenerateReport" >GenerateReport</Link></button>
                //     </div>

                // </div>
        )
    }
}
