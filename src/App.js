import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import AppBar from "./components/AppBar/AppBar";
import RegisterAsset from "./pages/RegisterAsset/RegisterAsset";
import AssetInfo from "./pages/AssetInfo/AssetInfo";
import QRcode from "./pages/QRcode/QRcode";
import UpdateAsset from "./pages/UpdateAsset/UpdateAsset";
import Requests from "./pages/Requests/Requests";
import ApproveRequest from "./pages/Requests/ApproveRequest";
import CreateAsset from "./pages/CreateAsset/CreateAsset";
import UpdateProposals from "./pages/Requests/UpdateRequests";
import CreateDeletion from "./pages/CreateDeletion/CreateDeletion";
import ApiRequestPage from "./pages/ApiRequestPage/ApiRequestPage";
import { AuthProvider } from "./context/auth-context"; // 👈 import the context

export default function App() {
  return (
    <AuthProvider>
      {" "}
      {/* 👈 wrap with AuthProvider */}
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterAsset" element={<RegisterAsset />} />
          <Route path="/AssetInfo" element={<AssetInfo />} />
          <Route path="/QRcode" element={<QRcode />} />
          <Route path="/UpdateAsset/:id" element={<UpdateAsset />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/DeletionRequests" element={<Requests />} />
          <Route path="/UpdateRequests" element={<Requests />} />
          <Route path="/SearchName" element={<LoginPage />} />
          <Route path="/ApproveRequest/:id/:operation" element={<ApproveRequest />} />
          <Route path="/CreateAsset/:id" element={<CreateAsset />} />
          <Route path="/UpdateProposals" element={<UpdateProposals />} />
          <Route path="/CreateDeletion/:id" element={<CreateDeletion />} />
          <Route path="/SearchAsset" element={<ApiRequestPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
