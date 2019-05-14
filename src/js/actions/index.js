import {ADD_QUESTION} from '../constants/action-types';

export function addQuestion(payload){
    return { type : ADD_QUESTION, payload}
};