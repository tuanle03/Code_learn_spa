import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import ChangeProfile from "./Pages/ChangeProfile/ChangeProfile";
import UploadAvatar from "./components/UploadAvatar/UploadAvatar";
import Answer from "./components/Answer/Answer";
import Question from "./components/Question/Question";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/create_account" element={<SignUp />} />
        <Route path="/profile" element={<ChangeProfile />} />
        <Route path="/change_avatar" element={<UploadAvatar />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/ask" element={<Question />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
