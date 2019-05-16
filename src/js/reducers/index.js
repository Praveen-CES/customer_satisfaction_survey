import {ADD_QUESTION} from "../constants/action-types";

const initialState = {
    questions: []
};

function rootReducer(state = initialState, action) {
  debugger
  if(action.type == ADD_QUESTION){
    return Object.assign({}, state, {
        questions : state.questions.concat(action.payload.questions)
    });
  }
  return state;
}

export default rootReducer;