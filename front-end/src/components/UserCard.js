import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import { approveRegister } from "../features/slices/approveUserRegisterSlice";
import { listUsersReqisterRequests } from "../features/slices/adminGetUsersRegisterRequestsSlice";

export default function UserCard({ user }) {
  const dispatch = useDispatch();
  const { name, email, password } = user;

  const handleClick = () => {
    if (user.accountName) {
      console.log("clicked")
    } else {
      dispatch(approveRegister({ name, email, password }));
      dispatch(listUsersReqisterRequests());
    }
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      {user.accountName ? (

        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {user.user}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {user.accountName}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Type: {user.accountType}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Balance: {user.accountBalance}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {email}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
        </CardContent>
      )}

      <CardActions>
        <Button variant="contained" size="small" onClick={handleClick}>
          Approve
        </Button>
        <Button variant="contained" size="small">
          Deny
        </Button>
      </CardActions>
    </Card>
  );
}
