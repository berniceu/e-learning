import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgotPassword from './ForgotPassword';

const Login = () => {
  const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  const handleForgotPasswordClick = () => {
    setForgotPasswordVisible(true);
  };

  const handleBackToLogin = () => {
    setForgotPasswordVisible(false);
  };

  return (
    <div className="login-page">
      <div className="image-section">
        <img
          src="pictures/Group 54.png"
          alt="Student"
          className="student-image"
        />
      </div>

      <div className="form-section">
        {!isForgotPasswordVisible ? (
          <>
            <h2>Sign in to your account</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <p onClick={handleForgotPasswordClick} className="forgot-password-link">
                Forgot Password?
              </p>
              <button type="submit" className="sign-in-btn">
                Sign in
              </button>
            </form>
            <p className="signup-link">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </>
        ) : (
          <ForgotPassword onBackToLogin={handleBackToLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
