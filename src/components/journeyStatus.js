import React from 'react';
import PropTypes from 'prop-types';
import { getJourneyStatus } from '../functions';
import styles from './journeyStatus.scss'; // eslint-disable-line

const JourneyStatus = ({ realTimeUpdatesInfo, scheduledInfo, className }) => {
  const status = getJourneyStatus(scheduledInfo, realTimeUpdatesInfo);
  return (<div className = {`${styles[status.className]} ${className} ${styles.journeyStatus}`}>
    {status.message}
  </div>);
};

JourneyStatus.defaultProps = {
  realTimeUpdatesInfo: {},
  scheduledInfo: {}
};

JourneyStatus.propTypes = {
  realTimeUpdatesInfo: PropTypes.object.isRequired,
  scheduledInfo: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default JourneyStatus;