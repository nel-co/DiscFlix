import React from 'react';
import MobileAd from './MobileAd';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="FooterContainer" style={FooterContainer}>
        <MobileAd />
        <div>Help support the site and/or my <br />
        disc golf habits with a <a style={link} href="https://ko-fi.com/A7704BUX" target="_blank" rel="noopener noreferrer">micro-donation</a>.</div>
      </div>
    );
  }
}

const FooterContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 30,
  fontSize: 12,
  textAlign: 'center'
}

const link = {
  color: '#ffef00',
  fontWeight: 'bold'
}