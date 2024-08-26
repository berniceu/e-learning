import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
        <h2>Sign in to your account</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
