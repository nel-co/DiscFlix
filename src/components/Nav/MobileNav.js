import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../css/App.css';

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav-bar">
        <div className="MobileNav-wrapper">
          <a className="MobileIcon" style={iconStyle} href="https://github.com/nel-co/DiscFlix/issues/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-comments" aria-hidden="true"></i>
            <span>Suggestions</span>
          </a>
          <NavLink to="/watchlist">
            <div className="MobileIcon" style={iconStyle}>
              <i className="fa fa-bookmark" aria-hidden="true"></i>
              <span>Watch List</span>
            </div>
          </NavLink>
          <NavLink to="/favorites">
            <div className="MobileIcon" style={iconStyle}>
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>Favorites</span>
            </div>
          </NavLink>
          <NavLink to="/stats">
            <div className="MobileIcon" style={iconStyle}>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
              <span>Stats</span>
            </div>
          </NavLink>
        </div>
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