import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { selectData, selectIsFetchingData, selectErrorFetchingData } from '../selectors';
import * as actions from '../actions';

import styles from './traintimes.scss';
import TimesJourney from '../components/timesJourney';
import Loading from '../components/loading';
import Error from '../components/error';

class TrainTimes extends Component {
  componentDidMount() {
    this.props.fetchTrainTimes();
  }

  render() {
    const {
      trainTimes,
      isFetchingData,
      errorFetchingData,
      fetchTrainTimes
    } = this.props;
    return (<div className={styles.traintimes}>
      {
        errorFetchingData // eslint-disable-line
          ? <Error error={errorFetchingData} refetch={() => fetchTrainTimes()} />
          : isFetchingData
            ? <Loading />
            : <ul className={styles.traintimesList}>
              {
                trainTimes.map((timesJourney, index) => <TimesJourney
                  key={`${timesJourney.serviceIdentifier}-${index}`}
                  timesJourney={timesJourney}
                />)
              }
            </ul>
      }
    </div>);
  }
}


const mapStateToProps = state => ({
  trainTimes: selectData(state),
  isFetchingData: selectIsFetchingData(state),
  errorFetchingData: selectErrorFetchingData(state)
});

const mapActionsToProps = dispatch => ({
  fetchTrainTimes: compose(dispatch, actions.fetchData),

});

TrainTimes.propTypes = {
  trainTimes: PropTypes.array.isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  fetchTrainTimes: PropTypes.func.isRequired,
  errorFetchingData: PropTypes.string
};

export default connect(mapStateToProps, mapActionsToProps)(TrainTimes);