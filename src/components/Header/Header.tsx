import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";

interface HeaderProps {
  signIn: boolean;
  avatar: string;
  username: string;
}

function Account({ signIn, avatar, username }: HeaderProps) {
  if (avatar) {
    return (
      <Link to="/profile" className="account">
        <img className="avatar" src={avatar} alt="" />
        <p className="username">{username}</p>
      </Link>
    );
  } else {
    return (
      <Link to="/profile" className="account">
        <img className="avatar" src="./src/assets/avatar.png" alt="" />
        <p className="username">{username}</p>
      </Link>
    );
  }
}

const Header = ({ signIn, avatar, username }: HeaderProps) => {
  const [active, setActive] = useState("menu");

  const navToggle = () => {
    setActive(active === "hiddenMenu" ? "menu" : "hiddenMenu");
    console.log(active);
  };

  return (
    <div className="Header">
      <Logo />
      <div className="nav">
        <img
          onClick={navToggle}
          className="nav_icon"
          src="src\assets\menu-burger.png"
          alt=""
        />
        <div className={active}>
          {signIn ? (
            <>
              <Account signIn={signIn} avatar={avatar} username={username} />
              <a className="forum" href="https://www.google.com">
                Forum
              </a>
              <a className="signOut btn" href="#">
                Sign out
              </a>
            </>
          ) : (
            <>
              <a className="forum" href="https://www.google.com">
                Forum
              </a>
              <Link className="signIn btn" to="/signin">
                Sign in
              </Link>
              <Link className="register btn" to="https://www.google.com">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
