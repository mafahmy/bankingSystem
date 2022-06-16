import React, { useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../features/slices/usersListSlice';




// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function UsersList() {
    const { isLoading, error, users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers())
    },[dispatch])
  return (
    <React.Fragment>
        {isLoading || error ? (<div>Loading</div>) 
        
        : (
            <>
            <Title>ALL Clients</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              
                  <TableBody> 
                  {users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell>{user._id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.balance}</TableCell>
                      {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
      
              
              
            </Table>
            </>
        )}
      
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Users
      </Link>
    </React.Fragment>
  );
}