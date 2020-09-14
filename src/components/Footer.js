import React from 'react';

function Footer() {
  const footerStyle = {
    fontFamily: 'sans-serif',
    position: 'absolute',
    bottom: '0',
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '1320px',
    marginBottom: "10px"
  }
  const h1Footer = {
    fontWeight: 'bold',
    color: 'white'
  }
  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright: Taylor Phillips; 2020</h3>
    </div>
  )
}

export default Footer;