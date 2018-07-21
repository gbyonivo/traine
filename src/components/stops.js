import React from 'react';
import PropTypes from 'prop-types';
import Stop from './stop';
import trackClock from '../hocs/trackClock';
import styles from './stops.scss';

const Stops = ({ stops, ...rest }) => <ul className={styles.stops}>
  {
    stops.map((stop, index) => <Stop stop={stop} key={`${stop.location.crs}-${index}`} {...rest} assignedId = {index}/>)
  }
</ul>;

Stops.propTypes = {
  stops: PropTypes.array.isRequired
};

export default trackClock(Stops);