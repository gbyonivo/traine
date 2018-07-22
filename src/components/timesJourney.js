import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './timesJourney.scss';
import { extractTime } from '../functions';
import JourneyStatus from './journeyStatus';

const TimesJourney = ({ timesJourney }) => <li className={styles.timesJourneyItem}>
  <Link to={timesJourney.serviceIdentifier}><div className={styles.timesJourney}>
    <div className={styles.scheduledTime}>
      {extractTime(timesJourney.scheduledInfo.scheduledTime)}
    </div>
    <div className={styles.destination}>{timesJourney.destinationList[0].crs}</div>
    <div className={styles.platform}>PLAT. {timesJourney.scheduledInfo.scheduledPlatform}</div>
    <div className={styles.origin}>LONDON</div>
    <JourneyStatus
      className={styles.updateTime}
      scheduledInfo={timesJourney.scheduledInfo}
      realTimeUpdatesInfo={timesJourney.realTimeUpdatesInfo}
    />
  </div></Link></li>;

TimesJourney.propTypes = {
  timesJourney: PropTypes.object.isRequired
};

export default TimesJourney;