import React from 'react';
import { create } from 'react-test-renderer';
import JourneyStatus from '../../src/components/journeyStatus';

const realTimeUpdatesInfo = {
  realTimeServiceInfo: {
    realTimeUpdatesInfo: {
      realTime: '2018-07-19T19:06:00+01:00',
      realTimePlatform: '3',
      realTimeFlag: 'Estimate'
    }
  }
};

const scheduleInfo = {
  scheduledTime: '2018-07-19T19:05:00+01:00',
};

const onTimeScheduleInfo = {
  scheduledTime: '2018-07-19T19:06:00+01:00',
};

const delayedData = {
  realTimeUpdatesInfo: {
    ...realTimeUpdatesInfo,
    ...{
      delayReason: {
        code: '186',
        reasonText: 'This train has been delayed by waiting for a train crew member'
      }
    }
  }
};

describe('JourneyStatus', () => {
  it('should render correctly and display delay message', () => {
    const actual = create(<JourneyStatus realTimeUpdatesInfo={delayedData.realTimeUpdatesInfo} scheduledInfo={{}} />);
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly and display exp message', () => {
    const actual = create(<JourneyStatus realTimeUpdatesInfo={delayedData.realTimeUpdatesInfo} scheduledInfo={scheduleInfo} />);
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly and display ontime', () => {
    const actual = create(<JourneyStatus realTimeUpdatesInfo={delayedData.realTimeUpdatesInfo} scheduledInfo={onTimeScheduleInfo} />);
    expect(actual).toMatchSnapshot();
  });
  it('should render correctly and display on time', () => {
    const actual = create(<JourneyStatus realTimeUpdatesInfo={{}} scheduledInfo={onTimeScheduleInfo} />);
    expect(actual).toMatchSnapshot();
  });
});