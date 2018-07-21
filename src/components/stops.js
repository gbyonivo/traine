import React from 'react';
import PropTypes from 'prop-types';
import Stop from './stop';
import trackClock from '../hocs/trackClock';

const Stops = ({ stops }) => <div>
  {
    stops.map(stop => <Stop stop={stop} key={stop.location.crs}/>)
  }
</div>;

Stops.propTypes = {
  stops: PropTypes.array.isRequired
};

export default trackClock(Stops);