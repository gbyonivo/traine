import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import {
  selectPattern, selectIsFetchingPattern, selectErrorFetchingPattern
} from '../selectors';
import Header from '../components/patternHeader';
import Stops from '../components/stops';
import Loading from '../components/loading';
import Error from '../components/error';
import styles from './pattern.scss';

class Pattern extends Component {
  componentDidMount() {
    const { fetchPattern, serviceIdentifier } = this.props;
    fetchPattern(serviceIdentifier);
  }

  render() {
    const {
      pattern,
      isFetchingPattern,
      errorFetchingPattern,
      fetchPattern,
      serviceIdentifier
    } = this.props;
    return (<div className={styles.patternWrapper}>
      {
        errorFetchingPattern // eslint-disable-line
          ? <Error error={errorFetchingPattern} refetch={() => fetchPattern(serviceIdentifier)}/>
          : isFetchingPattern || !pattern.transportMode
            ? <Loading />
            : <div className={styles.pattern}>
              <Header
                headerData={{
                  operatedBy: pattern.serviceOperator,
                  destination: pattern.serviceDestinations[0],
                  origin: pattern.serviceOrigins[0]
                }}
              />
              <Stops stops={pattern.stops} />
            </div>
      }
    </div>);
  }
}

Pattern.propTypes = {
  fetchPattern: PropTypes.func.isRequired,
  pattern: PropTypes.object.isRequired,
  isFetchingPattern: PropTypes.bool.isRequired,
  errorFetchingPattern: PropTypes.string,
  serviceIdentifier: PropTypes.string.isRequired
};

const mapStateToProps = (state, { match: { params: { serviceIdentifier } } }) => ({
  pattern: selectPattern(state),
  isFetchingPattern: selectIsFetchingPattern(state),
  errorFetchingPattern: selectErrorFetchingPattern(state),
  serviceIdentifier
});

const mapActionToProps = dispatch => ({
  fetchPattern: compose(dispatch, actions.fetchPattern)
});

export default withRouter(connect(mapStateToProps, mapActionToProps)(Pattern));