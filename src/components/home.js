import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.scss';

export default () => <div className={styles.home}>
  <Link to="/current">
    <div className={`${styles.current} ${styles.nav}`}>
      Current Weather
    </div>
  </Link>
  <Link to="/forecast">
    <div className={`${styles.forecast} ${styles.nav}`}>
      Weather Forecast
    </div>
  </Link>
</div>;