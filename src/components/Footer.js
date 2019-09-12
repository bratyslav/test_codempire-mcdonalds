import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      This is the test project |&nbsp;
      <a
        className="footer__mailto"
        href="mailto:beginner.altavista@gmail.com"
      >
        beginner.altavista@gmail.com
      </a>
    </footer>
  );
};

export default Footer;