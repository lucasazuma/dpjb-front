import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import AppBar from "./components/AppBar/AppBar";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import UserInfo from "./pages/UserInfo/UserInfo";
import QRcode from "./pages/QRcode/QRcode";

export default function App() {
  return (
    
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/addUser" element={<RegisterUser />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/QRcode" element={<QRcode />} />
        </Routes>
      </Router>
  );
}