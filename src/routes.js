import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import TrainTimes from './containers/traintimes';
import Pattern from './containers/pattern';

const mapStyles = styles => ({
  opacity: styles.opacity,
  transform: `scale(${styles.scale})`
});

// wrap the `spring` helper to use a bouncy config
const bounce = val => spring(val, { stiffness: 330, damping: 22 });

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default () => <BrowserRouter>
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="switch-wrapper">
    <Route path="/" component={TrainTimes} exact />
    <Route path="/:serviceIdentifier" component={Pattern} exact />
  </AnimatedSwitch>
</BrowserRouter>;