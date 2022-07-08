import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import UserCard from '../components/UserCard'
import { listUsersReqisterRequests } from '../features/slices/adminGetUsersRegisterRequestsSlice';
import { useNavigate } from "react-router-dom";
import { logout } from '../features/slices/userLogInSlice';
import { approveRegister } from '../features/slices/approveUserRegisterSlice';
import { listAccountsRequest } from '../features/slices/adminGetAccountsRequestSlice';

const AccountRequest = () => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.logIn);
  const usersAccountRequests = useSelector((state) => state.usersAccountRequests);
  const { accountRequests, isLoading, error } = usersAccountRequests;
  
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")  
    }
    dispatch(listAccountsRequest())
    if(error) {
      dispatch(logout());
      navigate("/login")
    }
  },[dispatch, error, isLoggedIn, navigate])
  if (error) {
    return(
    <div>
      Token expired
    </div>
    )
  }
  if (isLoading) {
    return(
      <div>Loading....</div>
    )
  }
 
  return (
    
    <div className='container'>
      {error && (
        <div>
          Error
        </div>
      )}
      {accountRequests.map((user) => (
        <UserCard key={user._id} user={user} />

      ))}
        
        
    </div>
  )
}

export default AccountRequest;