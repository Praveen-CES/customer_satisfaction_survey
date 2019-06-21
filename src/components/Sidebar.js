import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../sidebar.css';
import classNames from 'classnames';
const divStyle = {
  width: "100%",
  //margin: "30px"
}
export default class Sidebar extends Component {


  render() {
    return (

      <div style={divStyle} className={classNames('sidebar', { 'is-open': this.props.isOpen })}>
        <Nav vertical className="list-unstyled pb-3">

          <NavItem>
            <NavLink href="#"><Link to="/AddQuestions" >AddQuestions</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#"><Link to="/ViewQuestions" >ViewQuestions</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Template" >ViewDefaultTemplate</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Createsurvey" >Createsurvey</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/GenerateReport" >GenerateReport</Link></NavLink>
          </NavItem>
        </Nav>
      </div>

    )
  }
}
