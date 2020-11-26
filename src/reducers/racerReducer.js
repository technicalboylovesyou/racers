import {RACER_FETCHED, RACER_FAILED} from '../actions/types';

const initialState = {
  racerList: [],
};

const racerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RACER_FETCHED:
      return {
        ...state,
        racerList: state.racerList.concat(action.data.drivers),
      };
    case RACER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default racerReducer;
