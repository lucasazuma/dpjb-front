import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import AppBar from "./components/AppBar/AppBar";
import RegisterAsset from "./pages/RegisterAsset/RegisterAsset";
import AssetInfo from "./pages/AssetInfo/AssetInfo";
import QRcode from "./pages/QRcode/QRcode";
import UpdateAsset from "./pages/UpdateAsset/UpdateAsset";
import Requests from "./pages/Requests/Requests"
import store from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/RegisterAsset" element={<RegisterAsset />} />
          <Route path="/AssetInfo" element={<AssetInfo />} />
          <Route path="/QRcode" element={<QRcode />} />
          <Route path="/UpdateAsset" element={<UpdateAsset />} />
          <Route path="/Requests" element={<Requests />} />
        </Routes>
      </Router>
    </Provider>

  );
}