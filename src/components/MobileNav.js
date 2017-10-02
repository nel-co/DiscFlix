import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/App.css';

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav-wrapper">
        <a className="MobileIcon" style={iconStyle} href="https://github.com/nel-co/DiscFlix/issues/new" target="_blank">
          <i className="fa fa-comments" aria-hidden="true"></i>
          <span>Suggestions</span>
        </a>
        <span style={borderStyle}></span>
        <NavLink to="/watchlist">
          <div className="MobileIcon" style={iconStyle}>
            <i className="fa fa-bookmark" aria-hidden="true"></i>
            <span>Watch List</span>
          </div>
        </NavLink>
        <span style={borderStyle}></span>        
        <NavLink to="/favorites">
          <div className="MobileIcon" style={iconStyle}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>Favorites</span>
          </div>
        </NavLink>
      </div>
    )
  }
}

const iconStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const borderStyle = {
  borderLeft: '1px solid #1B1A26'
}