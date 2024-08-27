import React from 'react';
import '../styles/components/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div class="divider"></div>
        <div className="footer_title">E-learning <br /> Platform</div>
      </div>
      <p>Subscribe to get our Newsletter</p>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit" className="footer-btn">Subscribe</button>
      </form>
      <nav>
        <ul>
          <li><a href="#">Careers</a></li>
          <div className="divider"></div>
          <li><a href="#">Privacy Policy</a></li>
          <div className="divider"></div>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} class CSR Ltd</p>
    </footer>
  );
}

export default Footer;