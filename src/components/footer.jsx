import React from "react";
import '../styles/components/footer.css';

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="logo-name">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <div className="divider">

                    </div>
                    <div className="name">
                        <p>E-learning <br/>Platform</p>
                    </div>
                </div>
                <div className="subscribe">
                    <h2>Subscribe To Get Our Newsletter</h2>
                    <div className="form">
                    <input type="email" placeholder="Your Email" />
                    <button type="submit">Subscribe</button>
                    </div>
                    
                </div>

                <div className="links">
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                    <p>© 2021 Class CSR Ltd</p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Footer;