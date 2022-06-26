import { Formik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";

const UserDashboardScreen = () => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.logIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  },[isLoggedIn, navigate]);
  return (
    <div className="loginBack">
      {(isLoggedIn && !userInfo.hasAccount) ? (
        
        <CreateAccount />
      ) : (
        <div>
          <h1>You have an account</h1>
        </div>
      )}
    </div>
  );
};

export default UserDashboardScreen;
