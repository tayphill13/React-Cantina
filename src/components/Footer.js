import React from 'react';

function Footer() {
  const footerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'orange',
    paddingTop: '20px',
    paddingBottom: "20px",
    marginBottom: "10px"
  }
  const h1Footer = {
    fontWeight: 'bold'
  }
  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright: Taylor Phillips; 2020</h3>
    </div>
  )
}

export default Footer;