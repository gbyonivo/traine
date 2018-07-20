import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import { selectPattern, selectIsFetchingPattern } from '../selectors';
import Header from '../components/patternHeader';
import Stops from '../components/stops';

class Pattern extends Component {
  componentDidMount() {
    const { fetchPattern, serviceIdentifier } = this.props;
    fetchPattern(serviceIdentifier);
  }

  render() {
    const { pattern, isFetchingPattern } = this.props;
    return (<div>
      {
        isFetchingPattern || !pattern.transportMode
          ? <span>
            loading
          </span>
          : <div>
            <Header
              headerData={{
                operatedBy: pattern.serviceOperator,
                destination: pattern.serviceDestinations[0],
                origin: pattern.serviceOrigins[0]
              }}
            />
            <Stops stops={pattern.stops}/>
          </div>
      }
    </div>);
  }
}

Pattern.propTypes = {
  fetchPattern: PropTypes.func.isRequired,
  pattern: PropTypes.object.isRequired,
  isFetchingPattern: PropTypes.bool.isRequired,
  serviceIdentifier: PropTypes.string.isRequired
};

const mapStateToProps = (state, { match: { params: { serviceIdentifier } } }) => ({
  pattern: selectPattern(state),
  isFetchingPattern: selectIsFetchingPattern(state),
  serviceIdentifier
});

const mapActionToProps = dispatch => ({
  fetchPattern: compose(dispatch, actions.fetchPattern)
});

export default withRouter(connect(mapStateToProps, mapActionToProps)(Pattern));