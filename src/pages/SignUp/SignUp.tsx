import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./signUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignIn = () => {
    // Thực hiện xử lý đăng nhập tại đây
    console.log("Signing up...");
  };

  return (
    <div className="SignUp">
      <div className="left">
        <Logo />
        <h3>Group 4</h3>
      </div>
      <div className="right">
        <h2>Sign up to CodeLearn</h2>
        <div className="signUp_container">
          <div className="name">
            <div className="input_container ">
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input_container ">
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="input_container">
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_container">
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input_container">
            <input
              placeholder="Confirm password"
              type="password"
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="signUp_btn" onClick={handleSignIn}>
            <Link to="/">Sign Up</Link>
          </button>
          <div className="already_have_an_account">
            <p>Already have an account?</p>
            <Link to="/sign_in">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
