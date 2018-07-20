import React from 'react';
import PropTypes from 'prop-types';
import styles from './patternHeader.scss';

const PatternHeader = ({ headerData: { destination, origin, operatedBy } }) => <div className={styles.header}>
  <div className={styles.trainIcon}>T</div>
  <div className={styles.origin}>{origin}</div>
  <div className={styles.destination}><span>to</span> {destination}</div>
  <div className={styles.operatedBy}>{operatedBy}</div>
</div>;

PatternHeader.propTypes = {
  headerData: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    operatedBy: PropTypes.string.isRequired,
  }).isRequired
};

export default PatternHeader;