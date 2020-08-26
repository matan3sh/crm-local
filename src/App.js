import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from './animation';

import { Sidemenu, Dashboard } from './components';

import Messenger from './components/pages/Messenger';
import Projects from './components/pages/Projects';
import Analytics from './components/pages/Analytics';
import Team from './components/pages/Team';
import Settings from './components/pages/Settings';

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
