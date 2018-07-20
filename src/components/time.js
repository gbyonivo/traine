import React from 'react';
import PropTypes from 'prop-types';
import { extractTime } from '../functions';

const Time = ({ date }) => <span>{extractTime(date)}</span>;

Time.propTypes = {
  date: PropTypes.string.isRequired
};

export default Time;