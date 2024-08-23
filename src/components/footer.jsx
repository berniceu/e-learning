import React from "react";

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="logo-name">
                    <div className="logo">

                    </div>
                    <div className="divider">

                    </div>
                    <div className="name">
                        <p>E-learning <br/>Platform</p>
                    </div>
                </div>
                <div className="subcribe">
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