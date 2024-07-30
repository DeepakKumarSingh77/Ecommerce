import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useState,useEffect,useContext } from "react";
import Item from "./Item";
import Footer from "./Footer";
import { useLocation,Link } from 'react-router-dom'
import axios from 'axios';
import {CartContext} from '../Context/CartContext';

const Components = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Description = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 91%;
`;
const Image = styled(Box)`
  width: 22rem;
  height: 34rem;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled(Box)`
  width: 30rem;
`;
const Title = styled("h2")`
  margin-top: 35px;
  font-size: 32px;
`;
const Price = styled(Typography)`
  color: green;
  font-size: 20px;
`;
const Descriptions = styled(Typography)`
  font-size: 16px;
  line-height: 25px;
  margin: 15px 0 40px 0;
`;
const Wrapper2 = styled(Typography)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Button = styled(Box)`
  border: 1px solid blue;
  padding: 10px 15px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const Wrapper3=styled(Box)`
   display: flex;
   gap:50px;
   margin-top: 60px;
`;
const About=styled(Box)`
   margin-left: 6rem;
`;
const ReturnPolicy=styled(Box)`
    margin-right: 6rem;
`;
const Component = styled(Box)`
  width: 340px;
  height: 420px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image1 = styled(Box)`
  width: 260px;
  height: 250px;
  display: flex;
  justify-content: center;
`;
const ViewMore=styled(Box)`
     width: 120px;
     height: 35px;
     background-color: black;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     &:hover{
       background-color :white;
       color: black;
       border:1.5px solid black;
     }
`;
const  AddCart=styled(Box)`
     width: 120px;
     height: 35px;
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1.5px solid black;
     text-align: center;
     cursor: pointer;
`;
const Section3 = ({items }) => {
    const location=useLocation();
    const value=location.search?.split("=")[1];
    const [item,searchitem]=useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const cart = useContext(CartContext);
    // const [select,selected]=useState(false);
    // console.log(value);
    useEffect(()=>{
         const fetch=async()=>{
            const res=await axios.get(`https://ecom-24.onrender.com/getproductbyid/${value}`);
            searchitem(res.data);
         }
         fetch(); 
    },[value])
//   const [product,setproduct]=useState([]);
  const filterproduct=items.filter((cur)=>cur.mainCategory===item.mainCategory);
  const handleSmoothScroll = () => {
    const section = document.getElementById("#sectionid");
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
};
const handleAddToCart = (cur) => {
  cart.addoneProduct(cur._id,cur.price);
};
  return (
    <Components id="#sectionid">
      <Description >
        <Image>
          <img
            src={item.image}
            alt="photo"
            style={{ width: "100%", height: "100%" }}
          />
        </Image>
        <Wrapper>
          <Title>{item.title}</Title>
          <Price>Rs.{item.price}</Price>
          <Typography style={{ color: "purple", fontSize: "12px" }}>
            *inclusive of all taxes
          </Typography>
          <Descriptions>{item.description}</Descriptions>
          <Wrapper2>
            <Button onClick={()=>handleAddToCart(item)}>Add to Cart</Button>
            <Typography
              style={{
                backgroundColor: "lightgreen",
                color: "green",
                padding: "8px 8px",
                borderRadius: "17px",
              }}
            >
              {item.commonCategory}
            </Typography>
          </Wrapper2>
        </Wrapper>
      </Description>
      <Wrapper3>
        <About>
          <Typography style={{fontSize:"30px"}}>About</Typography>
          <Typography style={{fontSize:"18px"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            consectetur voluptatem sequi recusandae accusantium veniam provident
            labore? Itaque aut eius voluptatum modi rerum. Pariatur, porro?
            Deserunt harum ipsa dolores neque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus, fuga dolorem,
            exercitationem quae inventore fugiat non aperiam corporis ratione
            cupiditate nostrum optio corrupti amet, nobis neque molestiae culpa
            consequatur repudiandae doloribus reprehenderit voluptate? Itaque
            saepe quod accusamus, tenetur dolorum quasi a soluta optio quisquam
            beatae illum veniam consectetur, autem asperiores. Lorem ipsum,
            dolor sit amet consec Itaque saepe quod accusamus, tenetur dolorum
            quasi a soluta optio quisquam beatae illum veniam consectetur,
          </Typography>
        </About>
        <ReturnPolicy>
          <Typography style={{fontSize:"30px"}}>Return Policy</Typography>
          <Typography style={{fontSize:"18px"}}>
            Thanks for purchasing our products (or subscribing to our services)
            at [website] operated by [name]. We offer a full money-back
            guarantee for all purchases made on our website. If you are not
            satisfied with the product that you have purchased from us, you can
            get your money back no questions asked. You are eligible for a full
            reimbursement within 14 calendar days of your purchase. After the
            14-day period you will no longer be eligible and won't be able to
            receive a refund. We encourage our customers to try the product (or
            service) in the first two weeks after their purchase to ensure it
            fits your needs. If you have any additional questions or would like
            to request a refund, feel free to contact us.
          </Typography>
        </ReturnPolicy>
      </Wrapper3>
      <Box>
      <Typography style={{margin:"30px 0 20px 0",color:"Blue",fontSize:"25px",textAlign:"center"}}>Related Products</Typography>
      <Box style={{display:"flex"}}>
         {
            filterproduct.map((cur)=>(
            <Component key={cur._id}>
                <Image1>
                    <img src={cur.image} alt="photo" style={{ width: "150px" }} />
                </Image1>
                <Typography style={{ fontSize: "24px", color: "purple", fontFamily: "Poppins!important", marginTop: "20px" }}>
                    {cur.title.slice(0, 24)}
                </Typography>
                <Typography style={{ fontSize: "16px", color: "black", fontFamily: "Poppins!important", marginLeft: "15px" }}>
                    {cur.description.slice(0, 30)}...
                </Typography>
                <Box style={{ display: "flex", gap: "25px", marginTop: "20px", marginBottom: "10px" }}>
                    <Link to={`/description?item=${cur._id}`} style={{ textDecoration: "none" }}>
                    <a href="#sectionid" onClick={handleSmoothScroll} style={{textDecoration:"none"}}><ViewMore>View More</ViewMore></a>
                    </Link>
                    <AddCart onClick={()=>handleAddToCart(cur)}>Add to Cart</AddCart>
                </Box>
            </Component>)
            ).slice(0,4)
         }
      </Box>
      </Box>
      <Box style={{width:"100%",margin:"30px"}}>
      <Footer/>
      </Box>
    </Components>
  );
};

export default Section3;
