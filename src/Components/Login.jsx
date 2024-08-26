import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from "../config";

const Login = () => {
  const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login/`, {
        username: email,
        password,
      });
      toast.success("Login successful!", { autoClose: 3000 });
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.user.first_name);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials and try again.");
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };
  

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
              <input type="email" placeholder="Email" value={email}   onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
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
