import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios';
import { Box, Typography,styled } from '@mui/material';
import {CartContext} from '../Context/CartContext';
// import styled from '@emotion/styled';

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

const Cart = ({id,quantity}) => {
    const cart = useContext(CartContext);
    const [item,setitem]=useState([]);
    // console.log(id);
    useEffect(()=>{
        const fetch=async()=>{
           const res=await axios.get(`https://ecom-24.onrender.com/getproductbyid/${id}`);
           setitem(res.data);
        }
        fetch(); 
   },[id])
    // setPrice(prevPrice => prevPrice + (item.price * quantity))
  return (
    <Box style={{display:"flex",justifyContent:"center",gap:"6rem",alignItems:"center",padding:"8px"}}>
                <Box>
                    <img src={item.image} alt='photo' style={{width:"8rem",height:"8rem",border:"2px solid black"}}/>
                </Box>
                <Typography style={{fontSize:"18px",textWrap:"wrap",width:"10rem"}}>{item.title}</Typography>
                <Typography style={{fontSize:"18px"}}>{quantity}</Typography>
                <Typography style={{fontSize:"18px"}}>Rs.{item.price*quantity}</Typography>
                <Button onClick={()=>cart.removeoneproduct(item._id)}>Remove</Button>
    </Box>
  )
}

export default Cart