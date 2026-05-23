import React, { useState } from "react";
// import "./LoginPage.css"; // Import the CSS file for styling
import "../standard.css"; // Import standard CSS
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

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


  return (
    <div className="standard-container">
      <form className="form-container">
        <h2>Login</h2>
        <div className="standard-input-group">
          <label>username:</label>
          <input
            type="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="standard-input-group">
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
