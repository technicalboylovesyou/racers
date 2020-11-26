import {
  DETAIL_FAILED,
  DETAIL_FETCHED,
  DETAIL_RESET,
  RESULT_RESET,
} from '../actions/types';

const initialState = {
  url: '',
  givenName: '',
  familyName: '',
  dateOfBirth: '',
  nationality: '',
  driverId: '',
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_FETCHED:
      return {
        ...state,
        url: action.data.driver.url,
        givenName: action.data.driver.givenName,
        familyName: action.data.driver.familyName,
        dateOfBirth: action.data.driver.dateOfBirth,
        nationality: action.data.driver.nationality,
        driverId: action.data.driver.driverId,
      };
    case DETAIL_FAILED:
      return {
        ...state,
      };
    case RESULT_RESET:
      return {
        ...state,
        resultList: action.data.driver,
      };
    default:
      return state;
  }
};

export default detailReducer;
