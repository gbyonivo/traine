import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { selectData } from '../selectors';
import * as actions from '../actions';

import styles from './traintimes.scss';
import TimesJourney from './timesJourney';

const TrainTimes = ({ trainTimes, fetchPattern }) => <div className={styles.traintimes}>
  {
    trainTimes.map((timesJourney, index) => <TimesJourney
      key={`${timesJourney.serviceIdentifier}-${index}`}
      timesJourney={timesJourney}
      onClick={fetchPattern}
    />)
  }
</div>;


const mapStateToProps = state => ({
  trainTimes: selectData(state)
});

const mapActionsToProps = dispatch => ({
  fetchPattern: compose(dispatch, actions.fetchPattern)
});

TrainTimes.propTypes = {
  trainTimes: PropTypes.array.isRequired,
  fetchPattern: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(TrainTimes);