import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

interface ProfileProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('./src/assets/avatar.png');
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookies = document.cookie;
        const cookieArray = cookies.split('; ');
        const tokenCookie = cookieArray.find(cookie => cookie.startsWith('Token='));
  
        if (tokenCookie) {
          const tokenValue = tokenCookie.split('=')[1];
          setToken(tokenValue);
  
          const response = await fetch("https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/users", {
            method: "GET",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Token": tokenValue
            },
          });

          console.log(response.status);
  
          if (response.ok) {
            const data = await response.json();
            if(data.success){
            setFirstName(data.user.first_name);
            setLastName(data.user.last_name);
            setUsername(data.user.name); // Assuming 'name' is a combination of first and last name
            setEmail(data.user.email);
            setAvatar(data.user.avatar_url || "./src/assets/avatar.png");
            } else{
              alert("Error. Try again");
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
  }, []);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedFields, setEditedFields] = useState({
    firstName,
    lastName,
    username,
    email,
    password: "",
    newPassword: "",
    confirmPassword: "",
    avatar,
  });

  // const [editedFirstName, setEditedFirstName] = useState(firstName);
  // const [editedLastName, setEditedLastName] = useState(lastName);
  // const [editedUserName, setEditedUserName] = useState(username);
  // const [editedEmail, setEditedEmail] = useState(email);
  // const [editedPassword, setEditedPassword] = useState(password);
  const [changePassword, setChangePassword] = useState("hiddenPassword pass");

  useEffect(() => {
    if (!isEditing) {
      setEditedFields({
        firstName,
        lastName,
        username,
        email,
        password: "",
        newPassword: "",
        confirmPassword: "",
        avatar
      });
      setChangePassword("hiddenPassword pass");
    }
  }, [isEditing, firstName, lastName, username, email]);

  const showPassword = () =>{
    setChangePassword(isEditing ? "hiddenPassword pass" : "password pass");
    console.log(changePassword);
  }


  const handleEditClick = async() => {
    setIsEditing(false);
    showPassword();
    try {
      const cookies = document.cookie;
        const cookieArray = cookies.split('; ');
        const tokenCookie = cookieArray.find(cookie => cookie.startsWith('Token='));
  
        if (tokenCookie) {
          const tokenValue = tokenCookie.split('=')[1];
          setToken(tokenValue);
        
      const formData = new URLSearchParams();
      formData.append("last_name", editedFields.lastName);
      formData.append("first_name", editedFields.firstName);
      formData.append("avatar_url", editedFields.avatar);
      formData.append("old_password", editedFields.password);
      formData.append("new_password", editedFields.newPassword);
      formData.append("new_password_confirmation", editedFields.confirmPassword);

      const response = await fetch(
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/users",
        {
          method: "PUT",
          headers: {
            'Accept': "application/json",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Token": tokenValue
          },
          body: formData.toString(),
        }
      );
      console.log("Response Status Code:", response.status);
      if (response.ok) {
        console.log("Update successful");
      } else {
        console.error("Update failed:", response.statusText);
        alert("Update failed");
      }
    }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error. Try again");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (isEditing) setEditedFields((prevFields) => ({
      ...prevFields,
      [field]: e.target.value,
    }));
  };

  const editInfo = () => {
    console.log("Editting...");
    setIsEditing(true);
    showPassword();
  };

  return (
    <div className="Profile">
      <h2>Your profile</h2>
      <div className="profile_container">
        <div className="profile_left">
          <div className="info">
            <h3>Information</h3>
            <img src="src\assets\editing.png" alt="" onClick={editInfo} />
          </div>
          <div className="name">
            <div className="input_container">
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                value={editedFields.firstName}
                readOnly={!isEditing}
                onChange={(e) => handleChange(e, "firstName")}
              />
            </div>
            <div className="input_container">
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                value={editedFields.lastName}
                readOnly={!isEditing}
                onChange={(e) => handleChange(e, "lastName")}
              />
            </div>
          </div>
          <div className="username">
            <input
              className="input_container"
              placeholder="Username"
              type="text"
              id="username"
              value={editedFields.username}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, "username")}
            />
          </div>
          <div className="email">
            <input
              className="input_container"
              placeholder="Your email"
              type="text"
              id="email"
              value={editedFields.email}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div className={changePassword}>
            <input
              className="input_container"
              placeholder="Old password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, "password")}
            />
            <input
              className="input_container"
              placeholder="New password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, "newPassword")}
            />
            <input
              className="input_container"
              placeholder="Confirm password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, "confirmPassword")}
            />
          </div>
          <button
            className="edit"
            onClick={handleEditClick}
            disabled={!isEditing}
          >
            Save
          </button>
        </div>
        <div className="profile_right">
          <h3>Avatar</h3>
          <img className="avatar" src={avatar} alt="" />
          <button>
            <Link to="/change_avatar">Edit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
