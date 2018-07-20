import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectData } from '../selectors';

import styles from './traintimes.scss';
import TimesJourney from './timesJourney';

const TrainTimes = ({ trainTimes }) => <div className={styles.traintimes}>
  {
    trainTimes.map((timesJourney, index) => <TimesJourney
      key={`${timesJourney.serviceIdentifier}-${index}`}
      timesJourney={timesJourney}
    />)
  }
</div>;


const mapStateToProps = state => ({
  trainTimes: selectData(state)
});

TrainTimes.propTypes = {
  trainTimes: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(TrainTimes);