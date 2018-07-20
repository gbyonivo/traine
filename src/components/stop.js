import React from 'react';
import PropTypes from 'prop-types';
import { getTrainStatusMessage } from '../functions';

import styles from './stop.scss';
import Time from './time';

const Stop = ({ stop: { arrival, location, departure } }) => <div className={styles.stop}>
  <div className={styles.time}>
    {
      arrival.notApplicable
        ? <Time date={departure.scheduled.scheduledTime}/>
        : <Time date={arrival.scheduled.scheduledTime}/>
    }
  </div>
  <div className={styles.location}>{location.crs}</div>
  <div className={styles.status}>{getTrainStatusMessage(arrival, departure)}</div>
</div>;

Stop.propTypes = {
  stop: PropTypes.object.isRequired
};

export default Stop;