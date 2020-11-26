import {
  DETAIL_FAILED,
  DETAIL_FETCHED,
  RACER_FAILED,
  RACER_FETCHED,
  RESULT_FAILED,
  RESULT_FETCHED,
  RESULT_RESET,
  DETAIL_RESET,
} from './types';
import {
  getRacers as getRacersAPI,
  getDetailRacer as getDetailRacerAPI,
  getResultRacer as getResultRacerAPI,
} from '../api/racers';
import {convertDate} from '../utils/converter';

export const getRacers = (offset) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: RACER_FETCHED, data: success});
    return success;
  }
  function onError(error) {
    dispatch({type: RACER_FAILED, data: error});
  }
  try {
    const success = await getRacersAPI(offset);
    const total = success.MRData.total;
    let drivers = [];
    if (offset < total) {
      drivers = success.MRData.DriverTable.Drivers.map((driver) => ({
        title: driver.familyName + ' ' + driver.givenName,
        id: driver.driverId,
      }));
    }
    const data = {drivers: drivers};
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};

export const getDetails = (id) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: DETAIL_FETCHED, data: success});
    return success;
  }
  function onError(error) {
    dispatch({type: DETAIL_FAILED, data: error});
  }
  try {
    const success = await getDetailRacerAPI(id);
    const drivers = success.MRData.DriverTable.Drivers.map((driver) => ({
      familyName: driver.familyName,
      givenName: driver.givenName,
      driverId: driver.driverId,
      dateOfBirth: convertDate(driver.dateOfBirth),
      nationality: driver.nationality,
      url: driver.url,
    }));
    const data = {driver: drivers[0]};
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};

export const resetDetails = () => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: DETAIL_RESET, data: success});
    return success;
  }
  function onError(error) {
    dispatch({type: DETAIL_FAILED, data: error});
  }
  try {
    const results = [];
    const data = {driver: results};
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};

export const getResults = (id, offset) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: RESULT_FETCHED, data: success});
    return success;
  }
  function onError(error) {
    dispatch({type: RESULT_FAILED, data: error});
  }
  try {
    const success = await getResultRacerAPI(id, offset);
    const total = success.MRData.total;
    let results = [];
    if (offset < total) {
      results = success.MRData.RaceTable.Races.map((race) => ({
        raceName: race.raceName + ' ' + race.season,
        position: race.Results[0].position,
        number: race.Results[0].number,
        driver:
          race.Results[0].Driver.givenName +
          ' ' +
          race.Results[0].Driver.familyName,
        constructor: race.Results[0].Constructor.name,
        grid: race.Results[0].grid,
        laps: race.Results[0].laps,
        status: race.Results[0].status,
        points: race.Results[0].points,
      }));
    }
    const data = {results: results};
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};

export const resetResults = () => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: RESULT_RESET, data: success});
    return success;
  }
  function onError(error) {
    dispatch({type: RESULT_FAILED, data: error});
  }
  try {
    const results = [];
    const data = {results: results};
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};
