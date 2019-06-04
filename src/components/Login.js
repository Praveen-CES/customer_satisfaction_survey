import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import '../login.css'
import { Auth } from "aws-amplify";


export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleEmailChange = event => {
          
        this.setState({
            email:event.target.value          
        });
      }

      handlePasswordChange = event => {
        
      this.setState({
        password:event.target.value          
      });
    }


      hadleSubmit = async event => {
          event.preventDefault();
          try {
              debugger
            await Auth.signIn(this.state.email, this.state.password);
            console.log("Logged in");
          } catch (e) {
            alert(e.message);
          }
        }
      
    render() {
        return (
            <div className="Login" >
        <Form onSubmit={this.handleSubmit}>
          <FormGroup >
          <Input type = "email" name = "username" id = "exampleuername" placeholder = "Enter your username here" value = {this.state.email} onChange = {this.handleEmailChange}></Input>
            {/* <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            /> */}
          </FormGroup>
          <FormGroup>
          <Input type = "password" name = "password" id= "examplepassword" placeholder = "Enter your password here" value = {this.state.password} onChange = {this.handlePasswordChange}></Input>
            {/* <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            /> */}
          </FormGroup>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
        )
    }
}
