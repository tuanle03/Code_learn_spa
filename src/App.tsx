import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import ChangeProfile from "./Pages/ChangeProfile/ChangeProfile";
import UploadAvatar from "./components/UploadAvatar/UploadAvatar";
import ChatGPT from "./components/chatGPT/ChatGPT";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/create_account" element={<SignUp />} />
        <Route path="/profile" element={<ChangeProfile/>} />
        <Route path="/change_avatar" element={<UploadAvatar/>} />
        {/* <Route path="/new_blog" element */}
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </div>
  );
};

export default App;
