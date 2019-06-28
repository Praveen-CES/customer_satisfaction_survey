import {ADD_QUESTION, GENERATE_REPORT} from '../constants/action-types';

export function addQuestion(payload){
    return { type : ADD_QUESTION, payload}
};
export function generateReport(payload){
    return { type : GENERATE_REPORT, payload}
}