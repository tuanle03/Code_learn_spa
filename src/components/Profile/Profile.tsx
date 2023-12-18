import React, { useState } from "react";
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

const Profile: React.FC<ProfileProps> = ({
  firstName,
  lastName,
  username,
  email,
  password,
  avatar,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);
  const [editedUserName, setEditedUserName] = useState(username);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPassword, setEditedPassword] = useState(password);

  const [changePassword, setChangePassword] = useState("hiddenPassword pass");
  const showPassword = () =>{
    setChangePassword(isEditing ? "hiddenPassword pass" : "password pass");
    console.log(changePassword);
  }

  const handleEditClick = () => {
    setIsEditing(false);
    showPassword();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (isEditing) setValue(e.target.value);
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
                value={editedFirstName}
                readOnly={!isEditing}
                onChange={(e) => handleChange(e, setEditedFirstName)}
              />
            </div>
            <div className="input_container">
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                value={editedLastName}
                readOnly={!isEditing}
                onChange={(e) => handleChange(e, setEditedLastName)}
              />
            </div>
          </div>
          <div className="username">
            <input
              className="input_container"
              placeholder="Username"
              type="text"
              id="username"
              value={editedUserName}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, setEditedUserName)}
            />
          </div>
          <div className="email">
            <input
              className="input_container"
              placeholder="Your email"
              type="text"
              id="email"
              value={editedEmail}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, setEditedEmail)}
            />
          </div>
          <div className={changePassword}>
            <input
              className="input_container"
              placeholder="Old password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, setEditedPassword)}
            />
            <input
              className="input_container"
              placeholder="New password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, setEditedPassword)}
            />
            <input
              className="input_container"
              placeholder="Confirm password"
              type="password"
              id="Password"
              onChange={(e) => handleChange(e, setEditedPassword)}
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
