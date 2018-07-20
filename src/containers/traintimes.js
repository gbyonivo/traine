import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { selectData } from '../selectors';
import * as actions from '../actions';

import styles from './traintimes.scss';
import TimesJourney from '../components/timesJourney';

class TrainTimes extends Component {
  componentDidMount() {
    this.props.fetchTrainTimes();
  }

  render() {
    const { trainTimes, fetchPattern } = this.props;
    return (<ul className={styles.traintimes}>
      {
        trainTimes.map((timesJourney, index) => <TimesJourney
          key={`${timesJourney.serviceIdentifier}-${index}`}
          timesJourney={timesJourney}
          onClick={fetchPattern}
        />)
      }
    </ul>);
  }
}


const mapStateToProps = state => ({
  trainTimes: selectData(state)
});

const mapActionsToProps = dispatch => ({
  fetchPattern: compose(dispatch, actions.fetchPattern),
  fetchTrainTimes: compose(dispatch, actions.fetchData),
});

TrainTimes.propTypes = {
  trainTimes: PropTypes.array.isRequired,
  fetchPattern: PropTypes.func.isRequired,
  fetchTrainTimes: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(TrainTimes);