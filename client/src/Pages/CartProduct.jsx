import React,{useEffect,useState} from 'react'
import Navbar from '../Components/Navbar'
import { Box, Typography } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from '../Components/Cart';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Component=styled(Box)`
    display: flex;
    padding: 30px 0 0 0;
    background-color: #edf3f8;
    gap: 60px;
`;
const Wrapper1=styled(Box)`
     width: 59rem;
     background-color: #ffff;
     margin-left: 7rem;
     box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
     min-height: 30rem;
`;
const Wrapper2=styled(Box)`
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
    padding-top: 20px;
    /* position: absolute; */
    right: 8rem;
    height: 14rem;
    position: sticky;
    top: 4rem;
`;
const Button=styled(Box)`
     width: 10rem;
     background-color: black;
     color:white;
     /* text-align: center; */
     display: flex;
     justify-content: center;
     align-items: center;
     height: 35px;
     margin: 0 0 10px 70px;
`;

const CartProduct = ({isAuthenticated,isUserAuthenticated}) => {
  const cart=useContext(CartContext);
  // const [price, setPrice] = useState(0);
  const product=cart.items;
  const checkout = async () => {
    try {
        const res=await axios.post(`https://ecom-24.onrender.com/create-checkout-session`,product);
        window.location.href=res.data.url;
    } catch (error) {
        console.log(error);
    }
};
  const gettotalprice=()=>{
    let value=0;
    product.map((cur)=>{
     value+=cur.price*cur.quantity;
    })
    return value;
  }
  return (
    <Box>
        <Navbar isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated}/>
        <Component>
            <Wrapper1>
                 <Box style={{display:"flex",gap:"4rem",marginTop:"25px"}}>
                       <Typography style={{fontSize:"23px",fontWeight:"600",marginLeft:"50px"}}>Product Image</Typography>
                       <Typography style={{fontSize:"23px",fontWeight:"600"}}>Product Name</Typography>
                       <Typography style={{fontSize:"23px",fontWeight:"600"}}>Quantity</Typography>
                       <Typography style={{fontSize:"23px",fontWeight:"600"}}>Price</Typography>
                  </Box>
                  {/* <Line1/>
                  <Line2></Line2>
                  <Line3></Line3> */}
                  <Box style={{marginTop:"2rem"}}>
                  {product.length>0?(product.map((cur,index)=>
                      <Cart key={index} id={cur.id} quantity={cur.quantity} />
                      )):(
                        <Box style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}><Box style={{marginLeft:"15px",fontSize:"20px",color:"blue"}}>No Items Avalable for checkout</Box>
                      <Link to="/product" style={{textDecoration:"none"}}><Button style={{width:"7rem",backgroundColor:"#b674d4",marginTop:"30px",cursor:"pointer"}}>Add Products</Button></Link>
                      </Box>)
                  }
                  </Box>
            </Wrapper1>
            <Wrapper2>
                  <Box style={{width:"18rem",minHeight:"48px",border:"1px solid var(--color-grey-grade1)",display:"flex",flexDirection:"column",gap:"20px"}}>
                       <Typography  style={{fontSize:"23px",textAlign:"center"}}>PRICE DETAILS</Typography>
                       <Typography style={{fontSize:"18px",marginLeft:"20px",color:"purple"}}>Delivery Charges: <s>Rs.40</s> Free</Typography>
                       <Typography style={{fontSize:"18px",marginLeft:"20px",color:"purple"}}>Total Amount: Rs.{gettotalprice()}</Typography>
                       <Button onClick={checkout}>Check Out</Button>
                  </Box>
            </Wrapper2>
        </Component>
    </Box>
  )
}

export default CartProduct