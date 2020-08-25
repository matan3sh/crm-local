import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import { Sidemenu } from './components';
import { Dashboard } from './components';

import Messenger from './components/pages/Messenger';
import Projects from './components/pages/Projects';
import Analytics from './components/pages/Analytics';
import Team from './components/pages/Team';
import Settings from './components/pages/Settings';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <Router>
      <Sidemenu />
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className='switch-wrapper'
      >
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/messenger' component={Messenger} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/analytics' component={Analytics} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/settings' component={Settings} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
