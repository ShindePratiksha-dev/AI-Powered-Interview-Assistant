import { combineReducers } from 'redux';

const initialState = {
  candidate: {},
  answers: [],
  candidates: [],
};

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CANDIDATE_INFO':
      return { ...state, candidate: action.payload };
    case 'SAVE_ANSWER':
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case 'FINALIZE_CANDIDATE':
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
        candidate: {},
        answers: [],
      };
    default:
      return state;
  }
}

export default combineReducers({
  interview: interviewReducer,
});