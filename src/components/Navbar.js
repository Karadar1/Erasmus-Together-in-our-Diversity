import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ErasmusLogo from '../assets/Romania1.png';
import Italy from '../assets/it.svg';
import Romania from '../assets/ro.svg';
import Latvia from '../assets/lv.svg';
import Spania from '../assets/es.svg';

export function Navbar() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    // textDecoration: "underline"
    borderBottom: '2px solid #033e8c',
  };

  return (
    <>
      <nav>
        <div className='navLogo'>
          <NavLink to='/'>
            {/* <img src={ErasmusLogo} alt="" id='logo'/>s */}
            <span id='logo'>
              Erasmus <span className='erasmusPlus'> +</span>
            </span>
          </NavLink>
          <div className='flagRow'>
            <img src={Spania} alt='' className='flagIcon' />
            <img src={Italy} alt='' className='flagIcon' />
            <img src={Latvia} alt='' className='flagIcon' />
            <img src={Romania} alt='' className='flagIcon' />
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='about'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='activities'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink
              to='mobilities'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mobilities
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
