import React from 'react';
import PropTypes from 'prop-types';
import styles from './trainIcon.scss'; // eslint-disable-line

const TrainIcons = ({ classNames, size }) => <div className={`${styles.trainIcon} ${classNames} ${styles[size]}`}/>;

TrainIcons.propTypes = {
  classNames: PropTypes.string,
  size: PropTypes.string
};

export default TrainIcons;