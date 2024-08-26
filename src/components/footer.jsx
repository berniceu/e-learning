import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>Subscribe to get our Newsletter</p>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit" className="footer-btn">Subscribe</button>
      </form>
      <nav>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} class CSR Ltd</p>
    </footer>
  );
}

export default Footer;