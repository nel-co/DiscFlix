import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div style={FooterContainer}>
      	Built by &nbsp;<a style={link} href="http://heyimnelson.com/" target="_blank" rel="noopener">Nelson</a>
      </div>
    );
  }
}

const FooterContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 30,
  fontSize: 12,
  textAlign: 'center'
}

const link = {
  color: '#ffef00'
}