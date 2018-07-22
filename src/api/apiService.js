import axios from 'axios';
import dateFns from 'date-fns';
import data from '../savedResponse/data.json';

export const fetchPatternFromAPI = serviceIdentifier => axios
  .get(`https://realtime.thetrainline.com/callingPattern/${serviceIdentifier}/${dateFns.format(new Date(), 'YYYY-MM-DD')}`)
  .then(response => response.data);

export const fetchDataFromAPI = () => axios
  .get('https://realtime.thetrainline.com/departures/wat')
  .then(response => response.data)
  .catch(() => data);

// export const fetchDataFromAPI = () => data;
