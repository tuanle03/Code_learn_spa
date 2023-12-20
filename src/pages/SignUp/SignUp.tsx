import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import "./signUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const nav = useNavigate();

  const handleSignUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const formData = new URLSearchParams();
      formData.append("user[first_name]", firstName);
      formData.append("user[last_name]", lastName);
      formData.append("user[email]", email);
      formData.append("user[password]", password);
      formData.append("user[password_confirmation]", confirmPassword);

      const urlEncodedString = formData.toString();
      console.log(urlEncodedString);

      const response = await fetch(
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/registrations",
        {
          method: "POST",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: formData.toString(),
        }
      );

      console.log('Response Status Code:', response.status);
      const responseData = await response.json();

      if (response.ok) {
        console.log("Sign-up successful");

        const token = responseData.token;
        document.cookie = token;
        nav("/");
      } else {
        console.error("Sign-up failed:", response.statusText);
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Error. Try again!");
    }
  };
  return (
    <div className="SignUp">
      <div className="signUp_left">
        <Logo />
        <h3>Group 4</h3>
      </div>
      <div className="signUp_right">
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
          <button
            className="signUp_btn"
            onClick={() =>
              handleSignUp(
                firstName,
                lastName,
                email,
                password,
                confirmPassword
              )
            }
          >
            <p>Sign Up</p>
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
