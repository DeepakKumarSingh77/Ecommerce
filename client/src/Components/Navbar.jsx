import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const Wrapper = styled(Box)`
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
`;

const Logo=styled(Box)`
     font-size: 29px;
  font-weight: 600;
  cursor: pointer;
  font-family: Merriweather;
  color: purple;
`;

const Serachbar=styled(Box)`
  width: 45rem;
  display: flex;
  align-items: center;
  border-radius: 3px;
  height: 35px;
`;
const Input=styled("input")`
  outline: none;
  border: none;
  width: 45rem;
  height: 35px;
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  padding-left: 10px;
`;
const Button=styled(Box)`
   font-size: 17px;
  font-family: 500;
  color: purple;
  background-color: white;
  padding: 10px 15px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid blue;
  }
`;
const CartIcon=styled(Box)`
   width: 45px;
   height: 45px;
   background-color: white;
   border-radius: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   color:purple;
   position: fixed;
   right: 70px;
   z-index: 500;
`;

const Counting=styled(Box)`
   position: absolute;
   right: 2px;
    top: -3px;
`;
const Navbar = ({isAuthenticated,isUserAuthenticated}) => {
  const cart = useContext(CartContext);
  return (
    <Box style={{display:"flex",justifyContent:"center",padding:"20px"}}>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none"}}><Logo>Apna Store</Logo></Link>
        <Serachbar>
          <Link to="/product">
          <Input placeholder="Search by Products,Category,Specification..." />
          </Link>
        </Serachbar>
        {
          isAuthenticated?<Button onClick={()=>{isUserAuthenticated(false)}}>Logout</Button>:<Link to="/login" style={{textDecoration:"none"}}><Button>Login</Button></Link>
        }
        {cart.admin?<Link to="/admin" style={{textDecoration:"none"}}><Button>Admin Dashboad</Button></Link>:<Box></Box>
        }
        <CartIcon>
              <Counting>{cart.getnooftotalitems()}</Counting>
             <Link to="/cart"><FaShoppingCart style={{width:"20px",height:"20px"}}/></Link>
        </CartIcon>
      </Wrapper>
    </Box>
  );
};

export default Navbar;
