import React from 'react';
import PropTypes from 'prop-types';
import { getMessage, getScheduledTime } from '../functions';

import styles from './stop.scss'; //eslint-disable-line

const Stop = ({ stop: { arrival, location, departure }, currentTrainLocation, assignedId }) => <li
  className={`
    ${styles.stop}
    ${location.crs === currentTrainLocation.station && assignedId === currentTrainLocation.assignedId
    ? `${styles[currentTrainLocation.positionType]}`
    : ''}`}
>
  <div className={styles.time}>
    {getScheduledTime(arrival.notApplicable ? departure : arrival)}
  </div>
  <div className={styles.locationAndStatus}>
    <div className={styles.location}>{location.crs}</div>
    <div className={styles.status}>{getMessage(departure, arrival)}</div>
  </div>
</li>;

Stop.propTypes = {
  stop: PropTypes.object.isRequired,
  assignedId: PropTypes.number.isRequired,
  currentTrainLocation: PropTypes.object.isRequired
};

export default Stop;