import React, { useEffect } from 'react';
import {Typography, TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';
import axios from 'axios';

export default function ViewAllComponent() {
  const [data, setData] = React.useState([]);
 
  useEffect(()=>{
 axios.get("http://localhost:9095/users/getall").then(res =>{
  console.log(res.data)
  setData(res.data)
 });
 
  }, [])
const arr = data.map((data,index) => {
  return (

        <TableBody>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell align="right">{data.firstName}</TableCell>
              <TableCell align="right">{data.lastName}</TableCell>
              <TableCell align="right">{data.phoneNumber}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
        </TableBody>
 
  );
})
return (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        {arr}
        </Table>
        </TableContainer>
        
);
}
