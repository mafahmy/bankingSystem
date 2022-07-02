import React from "react";
import AdminDashScreen from "./screens/AdminDashScreen";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Navbar from "./components/Navbar";
import UserDashboardScreen from "./screens/UserDashboardScreen";
import RegisterRequests from "./screens/RegisterRequests";
import CreateAccountScreen from "./screens/CreateAccountScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/user-dashboard/:id" element={<UserDashboardScreen />} />
          <Route path="/create-account/:id" element={<CreateAccountScreen />} />

          {/* Will be Protected Route */}
          <Route path="/adminPanel" element={<AdminDashScreen />} />
          <Route path="/registerrequest" element={<RegisterRequests />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
