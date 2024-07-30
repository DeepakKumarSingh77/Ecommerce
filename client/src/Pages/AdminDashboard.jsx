import React from 'react'
import {Box,styled} from "@mui/material"
import { Link } from 'react-router-dom'
const Component=styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap:5px;
`;
const Button1=styled(Box)`
  font-size: 17px;
  font-family: 500;
  color: purple;
  background-color: white;
  padding: 10px 15px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  cursor: pointer;
`;
const AdminDashboard = () => {
  return (
    <Component>
        <h3>Welcome to admin Dashboard</h3>
        <Link to="/alluser" style={{textDecoration:"none"}}><Button1>All User</Button1></Link>
        <Link to="/exitingproduct" style={{textDecoration:"none"}}><Button1>All Existing Product</Button1></Link>
        <Link to="/addproduct" style={{textDecoration:"none"}}><Button1>Add new Product</Button1></Link>
    </Component>
  )
}

export default AdminDashboard