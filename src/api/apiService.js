import data from '../savedResponse/data';

// import axios from 'axios';
// import {
//   HOST,
//   API_KEY
// } from '../constants/api';

// export const fetchDataFromAPI = params => axios //eslint-disable-line
//   .get(`${HOST}/weather`, { params: { ...params, appid: API_KEY, units: 'metric' } })
//   .then(response => response.data);

export const fetchDataFromAPI = () => data.services; //eslint-disable-line
