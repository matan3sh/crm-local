import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidemenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
    const bodypadding = document.getElementById('body-pd');
    bodypadding.classList.toggle('body-pd');
  };

  return (
    <div className={`${openMenu ? 'expander sidemenu' : 'sidemenu'}`}>
      <nav className='sidenav'>
        <div>
          <div className='sidenav__brand'>
            <span className='material-icons' onClick={onToggle}>
              menu_open
            </span>
            <a href='#/' className='sidenav__logo'>
              Matan's App
            </a>
          </div>
          <div className='sidenav__list'>
            <NavLink
              to='/'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <span className='material-icons'>dashboard</span>
              <span className='sidenav__name'>Dashboard</span>
            </NavLink>
            <NavLink
              to='/messenger'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <i className='fas fa-comments'></i>
              <span className='sidenav__name'>Messenger</span>
            </NavLink>
            <NavLink
              to='/projects'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <i className='fas fa-folder'></i>
              <span className='sidenav__name'>Projects</span>
            </NavLink>
            <NavLink
              to='/analytics'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <i className='fas fa-chart-pie'></i>
              <span className='sidenav__name'>Analytics</span>
            </NavLink>
            <NavLink
              to='/team'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <i className='fas fa-user-friends'></i>
              <span className='sidenav__name'>Team</span>
            </NavLink>
            <NavLink
              to='/settings'
              exact
              className='sidenav__link'
              activeClassName='sidenav-active'
            >
              <i className='fas fa-cog'></i>
              <span className='sidenav__name'>Settings</span>
            </NavLink>
          </div>
        </div>

        <a href='#/' className='sidenav__link'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='sidenav__name'>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidemenu;
