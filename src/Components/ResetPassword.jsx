import React, { useState } from "react";

const ResetPassword = ({ onReset }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Add logic to reset the password
      onReset(email, newPassword);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="reset-container">
    <div className="reset-password-container">
      <div className="image-section">
        <img
          src="pictures/Group 54.png"
          alt="Reset Password"
          className="reset-image"
        />
      </div>
      <div className="form-section">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleReset} className="reset-password-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="reset-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
