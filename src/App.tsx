import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import ChangeProfile from "./Pages/ChangeProfile/ChangeProfile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/create_account" element={<SignUp />} />
        <Route path="/change_profile" element={<ChangeProfile/>} />
      </Routes>
    </div>
  );
};

export default App;
