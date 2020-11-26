import axios from 'axios';

export const getRacers = async (offset) => {
  return await axios
    .get('http://ergast.com/api/f1/drivers.json?offset=' + offset)
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject(err.message));
};

export const getDetailRacer = async (id) => {
  return await axios
    .get('http://ergast.com/api/f1/drivers/' + id + '.json')
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject(err.message));
};

export const getResultRacer = async (id, offset) => {
  return await axios
    .get(
      'http://ergast.com/api/f1/drivers/' +
        id +
        '/results.json?offset=' +
        offset,
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject(err.message));
};
