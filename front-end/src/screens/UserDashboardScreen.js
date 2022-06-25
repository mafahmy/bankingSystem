import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserDashboardScreen = () => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.logIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });
  return (
    <div className="container">
      {!userInfo.hasAccount ? (
        <div>
          <h1>Create an account</h1>
          <button>checking</button>
          <button>saving</button>
        </div>
      ) : (
        <div>
          <h1>You have an account</h1>
        </div>
      )}
      
    </div>
  );
};

export default UserDashboardScreen;
