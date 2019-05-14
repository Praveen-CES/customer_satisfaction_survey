import {ADD_QUESTION} from "../constants/action-types";

const initialState = {
    questions: []
};

function rootReducer(state = initialState, action) {
  if(action.type == ADD_QUESTION){
    return Object.assign({}, state, {
        questions : state.questions.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;