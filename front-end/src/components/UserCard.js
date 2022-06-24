import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import { approveRegister } from '../features/slices/approveUserRegisterSlice';
import { listUsersReqisterRequests } from '../features/slices/adminGetUsersRegisterRequestsSlice';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserCard({ user }) {
  const dispatch = useDispatch();
  const { name, email, password } = user;

  const handleClick = () => {
    dispatch(approveRegister({name, email, password}));
    dispatch(listUsersReqisterRequests());
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name: {email}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small"onClick={handleClick}>Approve</Button>
        <Button variant="contained" size="small">Deny</Button>
      </CardActions>
    </Card>
  );
}
