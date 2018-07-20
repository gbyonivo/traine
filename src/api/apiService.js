import axios from 'axios';

export const fetchPatternFromAPI = callingPatternUrl => axios
  .get(callingPatternUrl)
  .then(response => response.data);

export const fetchDataFromAPI = () => axios
  .get('https://realtime.thetrainline.com/departures/wat')
  .then(response => response.data);
