import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button, FormGroup, Label } from 'reactstrap';
const divStyle = {
  width: "300px",
  margin: "20px"
}
const mapStateToProps = state => {
  return {questions : state.questions}
}
class ViewQuestions1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.removeSelectMulti=this.removeSelectMulti.bind(this);
    this.state = { collapse: false,
      selectMulti:this.props.questions
    };
    console.log("this.props.questions", this.props.questions)
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  removeSelectMulti(selectedValue){   
 
    console.log("selectedValue",this.props.questions )
    var selectedValueIndex=this.state.selectMulti.findIndex(k => k.id===selectedValue);
        var arr=this.props.questions;
        arr.splice(selectedValueIndex,1)
    this.setState({
      selectMulti:arr
    })
  }
render() {
  const { selectMulti } = this.state;
  console.log("selectMulti",selectMulti);
return (
    
 
    <div style={divStyle}>
   
      
        <FormGroup>
        <Row className="justify-content-center align-items-center">
                        <Col lg="10" md="10">
         
          {this.state.selectMulti && this.state.selectMulti.map((data)=>     
          <div style={divStyle}> 
            
            <Label className = "mr-4">{data.name}</Label>
           
            
            <Button outline color="danger" type="button" onClick={this.removeSelectMulti.bind(this,data.id)} ><span className="fa fa-trash"></span></Button>
           
            </div>
          )}                     
         
          </Col></Row>
        </FormGroup>
       
   
  </div>
)
}
}

const ViewQuestions = connect (mapStateToProps)(ViewQuestions1);

export default ViewQuestions;