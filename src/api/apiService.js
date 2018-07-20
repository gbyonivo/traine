import axios from 'axios';

export const fetchPatternFromAPI = serviceIdentifier => axios
  .get(`https://realtime.thetrainline.com/callingPattern/${serviceIdentifier}/2018-07-19`)
  .then(response => response.data);

export const fetchDataFromAPI = () => axios
  .get('https://realtime.thetrainline.com/departures/wat')
  .then(response => response.data);
