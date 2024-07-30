import React, { useEffect, useState } from 'react'
import {Box,styled,Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import  axios  from 'axios';
const Button=styled("div")`
     background-color: red;
     color: white;
     padding: 8px 16px;
     border: none;
     border-radius: 4px;
     cursor: pointer;
     transition: background-color 0.3s ease;
     &:hover {
       background-color: darkred;
     }
`;
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
const AllUser = () => {
  const [data,setdata]=useState([]);
  const [toggle,settoggle]=useState(false);
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get('https://ecom-24.onrender.com/getalluser');
      setdata(res.data.user);
    }
    fetch();
},[toggle])
const removeUser=async(id)=>{
  try {
    await axios.delete(`https://ecom-24.onrender.com/deleteuserdetail/${id}`);
    settoggle(cur=>!cur);
  } catch (error) {
    console.log("Error while deleting user detail");
  }
}
console.log(data);
  return (
    <Box>
    <Component>
        <h3>Welcome to admin Dashboard</h3>
        <Link to="/alluser" style={{textDecoration:"none"}}><Button1>All User</Button1></Link>
        <Link to="/exitingproduct" style={{textDecoration:"none"}}><Button1>All Existing Product</Button1></Link>
        <Link to="/addproduct" style={{textDecoration:"none"}}><Button1>Add new Product</Button1></Link>
    </Component>
    <Box>
    {data.map((item) => (
          <Box key={item._id} style={{ display: "flex", justifyContent: "center", gap: "7rem", alignItems: "center", padding: "8px" }}>
          <Typography style={{ fontSize: "18px", textWrap: "wrap", width: "15rem" }}>{item.username}</Typography>
            <Typography style={{ fontSize: "18px", textWrap: "wrap", width: "15rem" }}>{item.email}</Typography>
            <Typography style={{ fontSize: "18px", width: "15rem" }}>{item.number}</Typography>
            <Typography style={{ fontSize: "18px",width: "10rem" }}>{item.city}</Typography>
            <Button onClick={() => { removeUser(item._id) }}>Remove User</Button>
          </Box>
        ))}   
    </Box>
    </Box>
  )
}

export default AllUser