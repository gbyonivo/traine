import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.scss';

const Button = ({
  isLoading,
  onClick,
  name,
  value
}) => <div className={styles.buttonDiv}>
  {
    <button onClick={onClick} disabled={isLoading} name={name}>
      {`${value}${isLoading ? '...' : ''}`}
    </button>
  }
</div>;

Button.propTypes = {
  isLoading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;