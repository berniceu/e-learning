import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setRole(role);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register/`, {
        email,
        password,
        full_name: fullName,
      });

      toast.success("Login successful!", { autoClose: 3000 });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        setError("An account with this email already exists.");
        toast.error("An account with this email already exists.");
      } else {
        setError("Signup failed. Please try again.");
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="image-section">
        <img
          src="pictures/Group 54.png" 
          alt="Student"
          className="student-image"
        />
      </div>

      <div className="form-section">
        <h2>Create an account</h2>
        <form>
          <input type="text" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <div className="role-selection">
            <button
              type="button"
              className={`role-btn ${role === "learner" ? "active" : ""}`}
              onClick={() => handleRoleChange("learner")}
            >
              Learner
            </button>
            <button
              type="button"
              className={`role-btn ${role === "instructor" ? "active" : ""}`}
              onClick={() => handleRoleChange("instructor")}
            >
              Instructor
            </button>
          </div>

          <button type="submit" className="create-account-btn" onClick={handleSignup}>
            Create Account
          </button>
        </form>

        <p className="signin-link">
        Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
