import React from 'react';
import PropTypes from 'prop-types';
import styles from './timesJourney.scss';

const extractTime = date => date.substr(11, 5);

const TimesJourney = ({ timesJourney }) => <div className={styles.timesJourney}>
  <div className={styles.scheduledTime}>
    {extractTime(timesJourney.scheduledInfo.scheduledTime)}
  </div>
  <div className={styles.destination}>{timesJourney.destinationList[0].crs}</div>
  <div className={styles.platform}>PLAT. {timesJourney.scheduledInfo.scheduledPlatform}</div>
  <div className={styles.origin}>LONDON</div>
  <div className={styles.updateTime}>
    <span>EXP</span>
    {
      extractTime(
        timesJourney.realTimeUpdatesInfo
          ? timesJourney.realTimeUpdatesInfo.realTimeServiceInfo.realTime
          : timesJourney.scheduledInfo.scheduledTime
      )
    }
  </div>
</div>;

TimesJourney.propTypes = {
  timesJourney: PropTypes.object.isRequired
};

export default TimesJourney;