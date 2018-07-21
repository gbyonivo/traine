import * as Functions from '../../src/functions';
import { stops } from '../__testData__';
import { HALTED, MOVING, NOT_STARTED } from '../../src/constants/positionTypes';

describe('extractTime', () => {
  it('should return hour and minute', () => {
    const actual = Functions.extractTime('2018-07-21T00:35:00+01:00');
    expect(actual).toEqual('00:35');
  });
});

describe('shouldStartTime', () => {
  it('should return true if time is BEFORE last stop and false if its after last stop', () => {
    const actual = Functions.shouldStartTime(stops[stops.length - 1], '00:30');
    expect(actual).toEqual(true);
  });
  it('should return false if time is AFTER last stop and false if its after last stop', () => {
    const actual = Functions.shouldStartTime(stops[stops.length - 1], '03:30');
    expect(actual).toEqual(false);
  });
});

describe('getActualTime', () => {
  it('should return realTime if real time is attached', () => {
    const arrivalOrDeparture = {
      scheduled: {
        scheduledTime: '2018-07-21T00:27:00+01:00',
        scheduledPlatform: '7'
      },
      realTime: {
        realTimeServiceInfo: {
          hasDeparted: false,
          realTime: '2018-07-21T00:27:00+01:00',
          realTimePlatform: '13',
          realTimeFlag: 'Estimate'
        }
      }
    };
    const actual = Functions.getActualTime(arrivalOrDeparture);
    expect(actual).toEqual('00:27');
  });
  it('should return scheduleTime if real time is not attached', () => {
    const arrivalOrDeparture = {
      scheduled: {
        scheduledTime: '2018-07-21T00:29:00+01:00',
        scheduledPlatform: '7'
      }
    };
    const actual = Functions.getActualTime(arrivalOrDeparture);
    expect(actual).toEqual('00:29');
  });
  it('should return realTime if real time is attached', () => {
    const arrivalOrDeparture = {
      notApplicable: true
    };
    const actual = Functions.getActualTime(arrivalOrDeparture);
    expect(actual).toEqual('');
  });
});

describe('getStationAndPosition', () => {
  it('should return the last position', () => {
    const actual = Functions.getStationAndPosition(stops, '01:13');
    const expected = {
      station: 'WOK',
      positionType: HALTED
    };
    expect(actual).toMatchObject(expected);
  });
  it('should return the current postion', () => {
    const actual = Functions.getStationAndPosition(stops, '00:30');
    const expected = {
      station: 'VXH',
      positionType: HALTED
    };
    expect(actual).toMatchObject(expected);
  });
  it('should return the current postion and show it has departed', () => {
    const actual = Functions.getStationAndPosition(stops, '00:31');
    const expected = {
      station: 'VXH',
      positionType: MOVING
    };
    expect(actual).toMatchObject(expected);
  });
  it('should return the current postion', () => {
    const actual = Functions.getStationAndPosition(stops, '01:11');
    const expected = {
      station: 'CLJ',
      positionType: MOVING
    };
    expect(actual).toMatchObject(expected);
  });
  it('should return the yet to start if it hasnt started', () => {
    const actual = Functions.getStationAndPosition(stops, '00:10');
    const expected = {
      station: 'WAT',
      positionType: NOT_STARTED
    };
    expect(actual).toMatchObject(expected);
  });
});