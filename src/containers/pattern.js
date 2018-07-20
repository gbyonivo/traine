import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import { selectPattern } from '../selectors';

class Pattern extends Component {
  componentDidMount() {
    const { fetchPattern, serviceIdentifier } = this.props;
    fetchPattern(serviceIdentifier);
  }

  render() {
    const { pattern } = this.props;
    return (<div>
      {pattern.transportMode}
    </div>);
  }
}

Pattern.propTypes = {
  fetchPattern: PropTypes.func.isRequired,
  pattern: PropTypes.object.isRequired,
  serviceIdentifier: PropTypes.string.isRequired
};

const mapStateToProps = (state, { match: { params: { serviceIdentifier } } }) => ({
  pattern: selectPattern(state),
  serviceIdentifier
});

const mapActionToProps = dispatch => ({
  fetchPattern: compose(dispatch, actions.fetchPattern)
});

export default withRouter(connect(mapStateToProps, mapActionToProps)(Pattern));