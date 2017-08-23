import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../dgvn.png';
import '../css/App.css';

export default class ListNav extends React.Component {
  render() {
    return (
      <div style={NavBar}>
        <NavLink to="/"><img src={Logo} alt="DGVN Logo" /></NavLink>
        <div style={NavLinks}>
          <NavLink to="/"><span className="NavLinks"><i className="fa fa-times" aria-hidden="true" style={IconStyle}></i></span></NavLink>
        </div>
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

const IconStyle = {
  fontSize: 24
}