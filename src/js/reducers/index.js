import {ADD_QUESTION, GENERATE_REPORT} from "../constants/action-types";
import { stat } from "fs";

const initialState = {
    questions: [],
    response : {}
};

function rootReducer(state = initialState, action) {
  
  if(action.type == ADD_QUESTION){
    return Object.assign({}, state, {
        questions : state.questions.concat(action.payload.questions)
    });
  } else if(action.type == GENERATE_REPORT){
    console.log('Good PAth');
    return Object.assign({}, state, {
      response : action.payload
  });
  } else {
    return state;
  }
  
}

export default rootReducer;