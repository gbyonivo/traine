import React from 'react';
import PropTypes from 'prop-types';
import styles from './patternHeader.scss';
import TrainIcons from './trainIcon';

const PatternHeader = ({ headerData: { destination, origin, operatedBy } }) => <div className={styles.header}>
  <div className={styles.trainIcon}><TrainIcons/></div>
  <h4 className={styles.origin}>{origin}</h4>
  <h3 className={styles.destination}><span>to</span> {destination}</h3>
  <div className={styles.operatedBy}>Operated by {operatedBy}</div>
</div>;

PatternHeader.propTypes = {
  headerData: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    operatedBy: PropTypes.string.isRequired,
  }).isRequired
};

export default PatternHeader;