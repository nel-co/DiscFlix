import React from 'react';
import Nav from './Nav/Nav';
import Ad from './Ad';

class Hero extends React.Component {
  render() {
    return (
      <div className="Hero-Container">
        <h1>
          Watch Disc Golf videos from <br className="dt" />
          your favorite YouTube channels.
        </h1>
        <Ad />
      </div>
    );
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-Section" style={HeaderSection}>
        <Nav />
        <Hero />
      </div>
    );
  }
}

const HeaderSection = {
  background: `#1c1e2e`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}