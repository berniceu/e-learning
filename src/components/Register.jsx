import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("");

  const handleRoleChange = (role) => {
    setRole(role);
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
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

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

          <button type="submit" className="create-account-btn">
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
