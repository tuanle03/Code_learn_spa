import React, { useState } from "react";
import Logo from "../../components/Logo";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const nav = useNavigate();

  const handleSignIn = async (email: string, password: string) => {
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/sessions/sign_in",
        {
          method: "POST",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: formData.toString(),
        }
      );
      console.log("Response Status Code:", response.status);
      if (response.ok) {
        console.log("Sign-in successful");

        const responseData = await response.json();
        const token = responseData.token;
        console.log(token);
        // document.cookie = 'Token=${token};';
        document.cookie = `Token=${token}`;
        nav("/");
      } else {
        console.error("Sign-in failed:", response.statusText);
        alert("Thông tin đăng nhập không hợp lệ");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau");
    }
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
          <button
            className="signIn_btn"
            onClick={() => handleSignIn(email, password)}
          >
            <p>Sign In</p>
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
