import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default class ViewQuestions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.removeSelectMulti=this.removeSelectMulti.bind(this);
    this.state = { collapse: false,
      selectMulti:["Sample Question 1","Sample Question 2","Sample Question 3"]
    };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  removeSelectMulti(selectedValue){       
    var selectedValueIndex=this.state.selectMulti.findIndex(k => k===selectedValue);
        var arr=this.state.selectMulti;
        arr.splice(selectedValueIndex,1)
    debugger
    this.setState({
      selectMulti:arr
    })
  }
render() {
return (
    
 
    <div>
    {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View Questions</Button>
    {<Collapse isOpen={this.state.collapse}> */}
      <Card>
        <CardBody>
        <FormGroup>
          {/* <Label for="selectQuestions">Select Questions</Label> */}
          {/* <Input type="select" name="selectMulti" id="selectMulti" multiple> */}
          {this.state.selectMulti.map((data)=>     
          <div> 
                
            <Label>{data}</Label><button  onClick={this.removeSelectMulti.bind(this,data)}>delete</button>
            </div>
          )}                     
          {/* </Input> */}
        </FormGroup>
        </CardBody>
      </Card>
    {/* </Collapse>} */}
  </div>
)
}
}