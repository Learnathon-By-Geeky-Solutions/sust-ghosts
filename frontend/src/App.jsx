import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LandingPage from "./components/Landing Page/LandingPage";
import LoginPage from "./components/Login Page/Login";
import SignUpPage from "./components/Sign Up Page/SignUp";
import Homepage from "./components/HomePage/Homepage";
import DashboardLayout from "./components/DashBoardLayout/DashboardLayout";
import MainHomePage from "./components/Main HomePage/MainHomePage";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/main-home" element={<MainHomePage />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
