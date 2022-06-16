import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const UserDashboardScreen = () => {
    const { userInfo, isLoggedIn } = useSelector((state) => state.logIn);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login")  
        }
    })
  return (
    <div>UserDashboardScreen</div>
  )
}

export default UserDashboardScreen;