import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import Logo from "../../components/Logo";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const handleForgot = () => {
    console.log("Requesting...");
  };
  return (
    <div className="Forgot">
      <div className="forgot_left">
        <Logo />
        <h3>Group 4</h3>
      </div>
      <div className="forgot_right">
        <div className="forgot_container">
          <h2>Forgot password</h2>
          <p>Please enter the email you use to sign in.</p>
          <div className="input_container">
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="request_btn" onClick={handleForgot}>
            <Link to="/">Request password reset </Link>
          </button>
          <div className="back">
            <Link to="/sign_in">Back to sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
