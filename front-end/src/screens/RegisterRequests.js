import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import UserCard from '../components/UserCard'
import { listUsersReqisterRequests } from '../features/slices/adminGetUsersRegisterRequestsSlice';

const RegisterRequests = () => {
  const usersRegisterRequests = useSelector((state) => state.usersRegisterRequests);
  const { registerRequests, isLoading, error } = usersRegisterRequests;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsersReqisterRequests())
  },[dispatch])
  if (isLoading) {
    return(
      <div>Loading....</div>
    )
  }
  const handleClick = (e) => {
    
  }
  return (
    <div className='container'>
      {registerRequests.map((user) => (
        <UserCard key={user._id} user={user}/>
      ))}
        
        
    </div>
  )
}

export default RegisterRequests