import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-column'>
        <h3 className='footer-title'>VD RESEARCH CHEM</h3>
        <h5>Copyright@2024</h5>
      </div>
      <div className='footer-column'>
        <h3 className='footer-title'>Contact US</h3>
        <p>Email: info@vdresearchchem.com</p>
        <p>Address: 4th Floor TDI City, Sector 118. Mohali Punjab </p>
        <p>Phone: +91 8369017670</p>
      </div>
      <div className='footer-column'>
        <h3 className='footer-title'> Connect Us on social media</h3>
        <div className='social-icons'>
          <i className='fab fa-facebook-f'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-instagram'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
