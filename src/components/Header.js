import React from 'react';
import Nav from './Nav/Nav';
import BG from '../bg.png';

class Hero extends React.Component {
  render() {
    return (
      <div style={HeaderText}>
        <span>
          Disc Golf videos from <br />
          your favorite YouTube channels.
        </span>
      </div>
    );
  }
}


export default class Header extends React.Component {
  render() {
    return (
      <div style={HeaderSection}>
        <Nav />
        <Hero />
      </div>
    );
  }
}

const HeaderSection = {
  background: `url(${BG})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 530
}

const HeaderText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 400,
  fontSize: 24,
  textAlign: 'center',
  padding: 20,
  fontWeight: 400
}