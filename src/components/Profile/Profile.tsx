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

  const handleEditClick = () => {
    setIsEditing(false);

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setIsEditing(true);
    setValue(e.target.value);
  };

  return (
    <div className="Profile">
      <h2>Your profile</h2>
      <div className="profile_container">
        <div className="profile_left">
          <h3>Information</h3>
          <div className="name">
            <div className="input_container">
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                value={editedFirstName}
                onChange={(e) => handleChange(e, setEditedFirstName)}
              />
            </div>
            <div className="input_container">
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                value={editedLastName}
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
              onChange={(e) => handleChange(e, setEditedEmail)}
            />
          </div>
          <div className="Password">
            <input
              className="input_container"
              placeholder="Password"
              type="password"
              id="password"
              value={editedPassword}
              onChange={(e) => handleChange(e, setEditedPassword)}
            />
          </div>
          <button className="edit" onClick={handleEditClick} disabled={!isEditing}>
            Save
          </button>
        </div>
        <div className="profile_right">
          <h3>Avatar</h3>
          <img className="avatar" src={avatar} alt="" />
          <button><Link to='/change_avatar'>Edit</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
