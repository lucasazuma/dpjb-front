import React from "react";
import { useNavigate } from "react-router-dom";
import "../standard.css";
import "./HomeScreen.css";
import homeImage from "../../assets/images/home.png";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="standard-container">
      <div className="home-screen-container">
        <div className="home-screen-content">
          <div className="home-screen-image">
            <img src={homeImage} alt="DPJB Logo" />
          </div>
          <h1 className="home-screen-title">DPJB</h1>
          <div className="home-screen-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
            <button
              className="btn-primary"
              onClick={() => navigate("/SearchAsset")}
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
