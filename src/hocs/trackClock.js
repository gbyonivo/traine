import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import { getStationAndPosition, extractTime, shouldStartTime } from '../functions';

export default (Component) => {
  class TrackClock extends React.Component {
    constructor() {
      super();
      this.timer = null;
      this.state = {
        currentDateTime: new Date()
      };
      this.addTime = this.addTime.bind(this);
    }

    componentWillMount() {
      this.startTimer();
    }

    componentDidUpdate() {
      this.clearTimer();
      this.startTimer();
    }

    componentWillUnmount() {
      this.clearTimer();
    }

    startTimer() {
      const { stops } = this.props;
      // if (shouldStartTime(this.props.stops[0], this.props.stops[stops.length - 1], extractTime(this.state.currentDateTime))) {
      this.timer = setTimeout(this.addTime, 60000);
      // }
    }

    addTime() {
      this.setState(state => ({ currentDateTime: dateFns.addMinutes(state.currentDateTime, 1) }));
    }

    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }

    render() {
      console.log(getStationAndPosition(this.props.stops, extractTime(this.state.currentDateTime)));
      return <Component
        {...this.props}
        {...this.state}
        currentTrainLocation = {getStationAndPosition(this.props.stops, extractTime(this.state.currentDateTime))}
      />;
    }
  }

  TrackClock.propTypes = {
    stops: PropTypes.array.isRequired
  };

  return TrackClock;
};