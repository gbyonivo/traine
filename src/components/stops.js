import React from 'react';
import PropTypes from 'prop-types';
import Stop from './stop';
import trackClock from '../hocs/trackClock';

const Stops = ({ stops, ...rest }) => <div>
  {
    stops.map((stop, index) => <Stop stop={stop} key={`${stop.location.crs}-${index}`} {...rest}/>)
  }
</div>;

Stops.propTypes = {
  stops: PropTypes.array.isRequired
};

export default trackClock(Stops);