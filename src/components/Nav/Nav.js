import React from 'react';
import { NavLink } from 'react-router-dom';

import MobileNav from './MobileNav';

import Logo from '../../Discflix.png';
import '../../css/App.css';

export default class Nav extends React.Component {

  render() {
    return (
      <div className="NavBar" style={NavBar}>
        <NavLink to="/"><img style={logoStyle} src={Logo} alt="DGVN Logo" /></NavLink>
        <div className="NavLink-wrapper" style={NavLinks}>
          <NavLink to="/watchlist"><span className="NavLinks">Watch List</span></NavLink>
          <NavLink to="/favorites"><span className="NavLinks">Favorites</span></NavLink>
          <NavLink to="/stats"><span className="NavLinks">Stats</span></NavLink>
          <a className="NavLinks" href="https://github.com/nel-co/DiscFlix/issues/" target="_blank" rel="noopener noreferrer">Suggest a Feature</a>
        </div>
        <MobileNav />
      </div>
    );
  }
}

const NavBar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  width: '90%',
  paddingTop: 30,
}

const NavLinks = {
  fontSize: 13,
  cursor: 'pointer'
}

const logoStyle = {
  maxWidth: 150,
  height: 'auto'
}