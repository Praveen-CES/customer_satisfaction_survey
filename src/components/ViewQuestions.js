import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button, FormGroup, Label } from 'reactstrap';
import { Link } from "react-router-dom";
const divStyle = {
  margin: "20px",
  padding: '10px',
  border: '1px solid #ccc'
}
const fontSize18 = {
  fontSize: '18px'
}
const mapStateToProps = state => {
  return { questions: state.questions }
}
const linkStyles ={
  
  padding: "320px",
  paddingTop : "2px",
  paddingBottom : "5px"
}
class QuestionsToView extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.removeSelectedQuestions = this.removeSelectedQuestions.bind(this);
    this.state = {
      collapse: false,
      displayedQuestions: this.props.questions
    };

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  removeSelectedQuestions(selectedValue) {


    var selectedValueIndex = this.state.displayedQuestions.findIndex(k => k.id === selectedValue);
    var arr = this.props.questions;
    arr.splice(selectedValueIndex, 1)
    this.setState({
      displayedQuestions: arr
    })
  }
  render() {
    const { displayedQuestions } = this.state;

    return (

      <div className="m-5  border">


        <FormGroup>
          <Row className=" align-items-center">
            <Col>
           
              {this.state.displayedQuestions && this.state.displayedQuestions.map((data, ind) =>
                <div style={divStyle}>

                  <Label className="mr-4" style={fontSize18}>{ind + 1}. {data.name}</Label>


                  <Button outline color="danger" className="float-right" type="button" onClick={this.removeSelectedQuestions.bind(this, data.id)} ><span className="fa fa-trash"></span></Button>
                  <div class="hr-line-dashed"></div>
                </div>
              )}
              
            </Col></Row>
        </FormGroup>

          <Link to="/AddQuestions" style={linkStyles}>If you want to add questions, click here!!!</Link>
      </div>
    )
  }
}

const ViewQuestions = connect(mapStateToProps)(QuestionsToView);

export default ViewQuestions;