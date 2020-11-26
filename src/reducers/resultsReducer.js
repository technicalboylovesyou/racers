import {RESULT_FETCHED, RESULT_FAILED, RESULT_RESET} from '../actions/types';

const initialState = {
  resultList: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESULT_FETCHED:
      return {
        ...state,
        resultList: state.resultList.concat(action.data.results),
      };
    case RESULT_FAILED:
      return {
        ...state,
      };
    case RESULT_RESET:
      return {
        ...state,
        resultList: action.data.results,
      };
    default:
      return state;
  }
};

export default resultReducer;
