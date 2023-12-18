import React, { useState } from "react";
import Logo from "../../components/Logo";
import "./signIn.css";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSignIn = () => {
    // Thực hiện xử lý đăng nhập tại đây
    console.log("Signing in...");
  };

  return (
    <div className="SignIn">
      <div className="signIn_left">
        <Logo />
        <h3>Group 4</h3>
      </div>
      <div className="signIn_right">
        <h2>Sign in to CodeLearn</h2>
        <div className="signIn_container">
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
          <div className="option">
            <div className="checkbox_container">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot_password">
              <Link to="/forgot_password">Forgot Password?</Link>
            </div>
          </div>
          <button className="signIn_btn" onClick={handleSignIn}>
            <Link to="/">Sign In</Link>
          </button>
          <div className="new_to_codeLearn">
            <p>New to CodeLearn?</p>
            <Link to="/create_account">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
