import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = ({ onConfirm }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

   
    if (enteredOtp === "1234") {
      if (onConfirm) {
        onConfirm(enteredOtp); 
      }
     
      navigate("/ResetPassword");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-verification-container">
        <div className="image-section">
          <img
            src="pictures/Group 54.png"
            alt="OTP Verification"
            className="otp-image"
          />
        </div>
        <div className="form-section">
          <h2>OTP Verification</h2>
          <p>Enter OTP sent to your email</p>
          <form onSubmit={handleSubmit} className="otp-form">
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="otp-input"
                />
              ))}
            </div>
            <button type="submit" className="confirm-btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
