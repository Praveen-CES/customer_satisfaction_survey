import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import YearPicker from "react-year-picker";
//import { Form } from 'antd';
const divStyle = {
  width: "300px",
  margin: "20px"
}
export default class GenerateReport extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleReportShown = this.toggleReportShown.bind(this);
    this.state = { 
      collapse: false ,
      dropdownOpen: false ,
      isReportShown:false
    };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse
    }));
    
  } 
  toggleReportShown() {
    this.setState({
      isReportShown:!this.state.isReportShown
    });
    
  } 

render() {
return (
    
 
    <div style={divStyle}>
     {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Generate Report</Button>
        { <Collapse isOpen={this.state.collapse}> */}
         
              <Form>
                <FormGroup>
                <Label for="exampleSelect">Customer Name</Label>
                <Input type="select" name="cycle" id="exampleSelect">
                  <option>Sample Customer 1</option>
                  <option>Sample Customer 2</option>
                  <option>Sample Customer 3</option>
                  <option>Sample Customer 4</option>
                </Input>
                </FormGroup>
                <FormGroup>
                <Label for="exampleSelect">Period year</Label>
                <YearPicker onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Cycle</Label>
                <Input type="select" name="cycle" id="exampleSelect">
                  <option>Quarter 1</option>
                  <option>Quarter 2</option>
                  <option>Quarter 3</option>
                  <option>Quarter 4</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Survey Name</Label>
                <Input type="select" name="cycle" id="exampleSelect">
                  <option>Sample Survey 1</option>
                  <option>Sample Survey 2</option>
                  <option>Sample Survey 3</option>
                  <option>Sample Survey 4</option>
                </Input>
                </FormGroup>
                <Button type = "button" outline color="primary" onClick = {this.toggleReportShown}>Generate Report</Button>{' '}
                {this.state.isReportShown &&
                <FormGroup>
                  <div>
                <Label>Customer Satisfactory Percentage : </Label>
                </div>
                <div>
                <Button type = "button" outline color="primary">View Answers</Button>{' '}
                </div>
                </FormGroup>
                
                }
              </Form>
            
        {/* </Collapse>} */}
  </div>
)
}
}