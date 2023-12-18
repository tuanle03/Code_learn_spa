import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword.tsx'
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
// import ForumQues from "./components/ForumQues/ForumQues.tsx";
// import RateButton from "./components/RateButton/RateButton.tsx";
// import Home from './assets/Pages/Home/Home.tsx'
// import App from './App.tsx'
// import SignUp from './pages/SignUp/SignUp.tsx'
import Article from "./components/Article/Article.tsx";
import Comment from "./components/Comment/Comment.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      {/* <ForgotPassword /> */}
      <Header signIn={false} avatar="" username="" />
      {/* <Header signIn={true} avatar='src\assets\avatar.png' username='Bông Hub'/> */}
      <Article />
      <Comment />
      {/* <RateButton /> */}
      {/* <ForumQues /> */}
      <Footer />
      {/* <Home /> */}
      {/* <App /> */}
      {/* <SignUp /> */}
    </Router>
  </React.StrictMode>
);
