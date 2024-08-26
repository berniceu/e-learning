import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('test@example.com');
  const navigate = useNavigate();

  const handleSendOTP = (event) => {
    event.preventDefault();
    console.log(`OTP sent to: ${email}`);
    
    navigate('/otp-verification');
  };

  return (
    <div className='forgot'>
      <div className="forgot-password-container">
        {/* <img src="pictures/Group 54.png" alt="Forgot Password" /> */}
        <h2>Forgot Password</h2>
        <form onSubmit={handleSendOTP}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="send-otp-btn">
            Send OTP
          </button>
        </form>
        <p>
          Did you remember your password? <a href="/login" className='forgot-login'>Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
