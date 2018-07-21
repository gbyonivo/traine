import React from 'react';
import renderer from 'react-test-renderer';
import trackClock from '../../../src/hocs/trackClock';
import { stops } from '../../__testData__';

// REMEMBER TO CHECK IF THERE ARE NO STOPS!!!!!!!

describe('refresh', () => {
  const BaseComponent = ({ prop }) => (<div className={prop} />); // eslint-disable-line
  const TimedComponent = trackClock(BaseComponent);

  it('should return a TimedComponent component when passed a named component', () => {
    const actual = renderer.create(
      <TimedComponent prop="test" stops={stops}/>
    ).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('should return a TimedComponent with empty stops', () => {
    const actual = renderer.create(
      <TimedComponent prop="test" stops={[]}/>
    ).toJSON();

    expect(actual).toMatchSnapshot();
  });


  it('should refresh every minute as far as time is before last stop', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2018, 7, 21, 1, 0, 0));
    const actual = renderer.create(<TimedComponent prop="test" stops={stops}/>);

    spyOn(TimedComponent.prototype, 'render').and.callThrough();

    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(1);
    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(2);
    jasmine.clock().tick(600000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(12);

    jasmine.clock().uninstall();
  });

  it('should not refresh if there are not stops', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2019, 7, 21, 1, 0, 0));
    const actual = renderer.create(<TimedComponent prop="test" stops={[]}/>);

    spyOn(TimedComponent.prototype, 'render').and.callThrough();

    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(0);
    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(0);
    jasmine.clock().tick(600000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(0);

    jasmine.clock().uninstall();
  });


  it('should clear timers when unmounted', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2018, 7, 21, 1, 0, 0));
    const component = renderer.create(<TimedComponent prop="test" stops={stops}/>);

    spyOn(TimedComponent.prototype, 'render').and.callThrough();

    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(1);
    component.unmount();
    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(1);

    jasmine.clock().uninstall();
  });

  it('should clear timers when unmounted', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2018, 7, 21, 1, 0, 20));
    const component = renderer.create(<TimedComponent prop="test" stops={stops}/>);

    spyOn(TimedComponent.prototype, 'render').and.callThrough();

    jasmine.clock().tick(40000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(1);
    jasmine.clock().tick(60000);
    expect(TimedComponent.prototype.render.calls.count()).toBe(2);

    jasmine.clock().uninstall();
  });
});