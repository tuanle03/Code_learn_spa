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
    setSetting((prevSetting) =>
      prevSetting === "setting set" ? "hiddenSetting set" : "setting set"
    );
  };
  const nav = useNavigate();
  const [token, setToken] = useState('');

  const SignOut = async () => {
    try {
      const cookies = document.cookie;
      const cookieArray = cookies.split('; ');
      const tokenCookie = cookieArray.find((cookie) =>
        cookie.startsWith('Token=')
      );
      document.cookie = `Token=`;

      if (tokenCookie) {
        const tokenValue = tokenCookie.split('=')[1];
        setToken(tokenValue);

        const response = await fetch(
          "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/sessions/sign_out",
          {
            method: "DELETE",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              'Cache-Control': "no-cache, no-store, must-revalidate",
              'Token': tokenValue,
            },
          }
        );

        console.log(response.status);

        if (response.ok) {
          console.log("Log-out successful");
          nav("/"); // Redirect to the home page after successful logout
        } else {
          console.error("Log-out failed:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
      alert("Error. Try again");
    }
  };

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
}

const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookies = document.cookie;
        const cookieArray = cookies.split('; ');
        const tokenCookie = cookieArray.find((cookie) =>
          cookie.startsWith('Token=')
        );

        if (tokenCookie) {
          const tokenValue = tokenCookie.split('=')[1];
          setToken(tokenValue);

          const response = await fetch(
            "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/users",
            {
              method: "GET",
              headers: {
                'Accept': "application/json",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                'Cache-Control': "no-cache, no-store, must-revalidate",
                "Token": tokenValue
              },
            }
          );

          // console.log(response.status);

          if (response.ok) {
            const data = await response.json();
            setSignIn(data.success);
            if (data.success) {
              setAvatar(data.user.avatar_url || "");
              setUsername(data.user.last_name || "");
            }
          } else {
            console.error("Error fetching Header data:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchData();
  }, [token]); // Add token to the dependency array

  const [active, setActive] = useState("menu");
  const navToggle = () => {
    setActive((prevActive) =>
      prevActive === "hiddenMenu" ? "menu" : "hiddenMenu"
    );
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
