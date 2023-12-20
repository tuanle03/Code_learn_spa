import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";

interface HeaderProps {
  avatar: string;
  username: string;
}

function Account({ avatar, username }: HeaderProps) {
  const [setting, setSetting] = useState("hiddenSetting set");
  const showSetting = () => {
    setSetting(setting === "setting set" ? "hiddenSetting set" : "setting set");
  };
  const nav = useNavigate();

  const SignOut = async () => {
    try {
      const response = await fetch(
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/registrations",
        {
          method: "DELETE",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'Token': document.cookie,
          },
        }
      );

      if (response.ok) {
        document.cookie = "";
        console.log("Log-out successful");
        nav("/");
      } else {
        console.error("Log-out failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau");
    }
  };

  if (avatar) {
    return (
      <div className="account">
        <button onClick={showSetting} className="accountBtn">
          <img className="avatar" src={avatar} alt="" />
          <p className="username">{username}</p>
        </button>
        <span className={setting}>
          <Link to="/profile">Profile</Link>
          <a href="/" onClick={SignOut}>
            Sign out
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="account">
        <button onClick={showSetting} className="accountBtn">
          <img className="avatar" src="./src/assets/avatar.png" alt="" />
          <p className="username">{username}</p>
        </button>
        <span className={setting}>
          <Link to="/profile">Profile</Link>
          <a href="/" onClick={SignOut}>
            Sign out
          </a>
        </span>
      </div>
    );
  }
}

const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("", {
      method: "GET",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSignIn(data.signIn);
        setAvatar(data.avatar);
        setUsername(data.username);
      })
      .catch((error) => {
        console.error("Error fetching Header data:", error);
      });
  }, []);

  const [active, setActive] = useState("menu");
  const navToggle = () => {
    setActive(active === "hiddenMenu" ? "menu" : "hiddenMenu");
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
              <Account avatar={avatar} username={username} />
              <a className="forum" href="https://www.google.com">
                Forum
              </a>
            </>
          ) : (
            <>
              <a className="forum" href="https://www.google.com">
                Forum
              </a>
              <Link className="signIn btn" to="/sign_in">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
