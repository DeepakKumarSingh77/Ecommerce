import { Box,Typography,styled } from '@mui/material'
import React, { useState,useContext } from 'react'
import Item from '../Components/Item';
import Footer from '../Components/Footer';
import { CartContext } from '../Context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
const Components=styled(Box)`
   background-color: #edf3f8;;
`;

const Wrapper1=styled(Box)`
 display:flex;
 justify-content: center;
 gap: 20px;
 margin-top: 30px;
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
const Counting=styled(Box)`
   position: absolute;
   right: 2px;
    top: -3px;
`;
const Products = ({items,isAuthenticated,isUserAuthenticated}) => {
  const [search,setsearch]=useState('');
  const [item,setitem]=useState('');
  const cart = useContext(CartContext);

  const changeHandle=(e)=>{
          setitem('');
          setsearch(e.target.value);
  }
  const filterproduct=item.length>0?items.filter((cur)=>cur.mainCategory.toLowerCase().includes(item.toLowerCase())):search.length>0?items.filter((cur)=>cur.title.toLowerCase().includes(search.toLowerCase())):items;
  // console.log(filterproduct);
  // console.log(item);
  return (
    <Components>
         <Box style={{display:"flex",justifyContent:"center",padding:"20px"}}>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none"}}><Logo>Apna Store</Logo></Link>
        <Serachbar>
          <Input placeholder="Search by Products,Category,Specification..." onChange={(e)=>{changeHandle(e)}} value={search}/>
        </Serachbar>
        {isAuthenticated?<Button>Logout</Button>:<Link to="/login" style={{textDecoration:"none"}}><Button>Login</Button></Link>}
        <CartIcon>
          <Counting>{cart.getnooftotalitems()}</Counting>
          <Link to="/cart"><FaShoppingCart style={{width:"20px",height:"20px"}}/></Link>
        </CartIcon>
      </Wrapper>
    </Box>
        <Wrapper1>
            <Button1 onClick={()=>{setitem('')}}>All</Button1>
            <Button1 onClick={()=>{setitem('Home')}}>Home</Button1>
            <Button1 onClick={()=>{setitem('Kids')}}>Kids</Button1>
            <Button1 onClick={()=>{setitem('Woman')}}>Woman</Button1>
            <Button1 onClick={()=>{setitem('Gaming')}}>Gaming</Button1>
            <Button1 onClick={()=>{setitem('Books')}}>Books</Button1>
            <Button1 onClick={()=>{setitem('Electronics')}}>
Electronics</Button1>
             <Button1 onClick={()=>{setitem('Shoes')}}>Shoes</Button1>
        </Wrapper1>
        <Box style={{width:"100%",marginTop:"40px",display:"flex",justifyContent:"center",marginBottom:"20px"}}>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
            justifyContent: "center",
            width:"70rem"
          }}
        >
          {filterproduct.length>0?filterproduct
            .map((cur, index) => <Item key={index} cur={cur} />):
            <Typography >No such product is available</Typography>
            }
        </Box>
        </Box>
        <Footer/>
    </Components>
  )
}

export default Products