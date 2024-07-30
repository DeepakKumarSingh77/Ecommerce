import React, { useEffect, useState } from 'react'
import {Box,Typography,styled} from "@mui/material"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosDoneAll } from "react-icons/io";
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
const AllExitingproduct = () => {
  const [data,setdata]=useState([]);
  const [toggle,settoggle]=useState(false);
  const [price,setprice]=useState(false);
  const [value,setvalue]=useState('');
  const removeproduct=async(id)=>{
    settoggle(pre=>!pre);
    try {
         await axios.delete(`https://ecom-24.onrender.com/deleteproduct/${id}`);
    } catch (error) {
         console.log("error while deleting product");
    }
}
const updateprice=async(id)=>{
     settoggle(pre=>!pre);
     try {
        await axios.put(`https://ecom-24.onrender.com/updateprice/${id}`,{price:value});
     } catch (error) {
        console.log("error while updating price");
     }
}
  useEffect(()=>{
    const fetch=async()=>{
        try {
            const res = await axios.get('https://ecom-24.onrender.com/exitingproduct');
            setdata(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetch();
  },[toggle,price])

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
         {
            data.map((item)=>{
                return(
                    <Box style={{display:"flex",justifyContent:"center",gap:"7rem",alignItems:"center",padding:"8px"}}>
                <Box>
                    <img src={item.image} alt='photo' style={{width:"8rem",height:"8rem",border:"2px solid black"}}/>
                </Box>
                <Typography style={{fontSize:"18px",textWrap:"wrap",width:"10rem"}}>{item.title}</Typography>
                <Typography style={{fontSize:"18px",width:"5rem"}}>{item.mainCategory}</Typography>
                <Typography style={{fontSize:"18px"}}>Rs.{item.price}<Typography onClick={()=>setprice(pre=>!pre)} style={{border:"1px solid"}}>UpdatePrice</Typography><Box>
                      {price?<Box><input type='text' placeholder='new price' onChange={(e)=>{setvalue(e.target.value)}}/><IoIosDoneAll onClick={()=>{updateprice(item._id);setprice(pre=>!pre);}}/></Box>:<Box></Box>}
                      </Box>
                </Typography>
                <Button onClick={()=>{removeproduct(item._id)}}>Remove</Button>
    </Box>
                )
            })
         }    
    </Box>
    </Box>
  )
}

export default AllExitingproduct