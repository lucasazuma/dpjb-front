import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file for styling
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import api from "../../api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password)
      .then(() => {
        console.log("Navigating to /AssetInfo");
        navigate("/AssetInfo");
      })
      .catch(() => {
        alert("Login failed");
      })
      .finally(() => {
        console.log("Login attempt complete");
      });
  };

  const handleElection = async () => {
    console.log("hello from handle election")
    try {
        const response = await api.get(`/api/orjp/election`);
        console.log("response => ", response)
      } catch (err) {
        console.error("Failed to fetch journalists:", err);
      }
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <button onClick={handleElection}>handle election</button>
        <h2>Login</h2>
        <div className="input-group">
          <label>username:</label>
          <input
            type="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
