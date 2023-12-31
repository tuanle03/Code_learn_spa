import { Route, Routes, Navigate } from "react-router-dom";

import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SignUp from "./Pages/SignUp/SignUp";
import ChangeProfile from "./Pages/ChangeProfile/ChangeProfile";
import UploadAvatar from "./components/UploadAvatar/UploadAvatar";
import Answer from "./components/Answer/Answer";
import Question from "./components/Question/Question";
import PaperPage from "./Pages/PaperPage/PaperPage";
import TopicPage from "./Pages/TopicPage/TopicPage";
import ForumPage from "./Pages/ForumPage/ForumPage";

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
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/topic" element={<TopicPage />} />
        <Route path="/forum" element={<ForumPage />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/question/:id"element={<Question option="id"/>} />
        <Route path="/ask" element={<Question option="addQuestion"/>} />

        <Route path="/article/:id" element={<PaperPage />} />
        <Route path="/forum/:id" element={<ForumPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
};

export default App;
