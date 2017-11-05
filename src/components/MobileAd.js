import React from 'react';

import teebird from '../discs/teebird.gif';

const MobileAd = () => {
  return (
    <a href="https://infinitediscs.com/Home" target="_blank" rel="noopener" className="mb">
      <div style={AdContainer}>
        <img src={teebird} alt="innova teebird" style={ImgStyle} />
        <h3 style={AdStyle}>Handpick the disc for you at <br /> 
        <span style={LinkColor}>infinitediscs.com</span></h3>
      </div>
    </a>
  );
}

const AdContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: 250,
  minWidth: 300,
  background: '#1b1b28',
  border: '1px solid rgba(255, 255, 255, 0.1)',  
  marginBottom: 25
}

const AdStyle = {
  fontSize: 14,
  textAlign: 'center'
}

const LinkColor = {
  color: '#ffef00'
}

const ImgStyle = {
  width: 160,
  height: 'auto'
}

export default MobileAd;