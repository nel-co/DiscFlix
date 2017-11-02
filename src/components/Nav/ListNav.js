import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/App.css';

export default class ListNav extends React.Component {
  render() {
    return (
      <div style={NavBar}>
        <NavLink to="/"><span className="NavLinks NavLinks-i"><i className="fa fa-chevron-left" aria-hidden="true" style={IconStyle}></i></span></NavLink>
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

const IconStyle = {
  fontSize: 24
}