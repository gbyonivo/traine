import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.scss';

const Error = ({ error, refetch }) => <div className={styles.error}>
  {error}
  <br/>
  <button onClick={refetch}>refresh</button>
</div>;

Error.propTypes = {
  error: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired
};

export default Error;