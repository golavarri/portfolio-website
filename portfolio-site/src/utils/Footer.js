import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Genevieve Olavarri.</p>
    </footer>
  );
};

export default Footer;
