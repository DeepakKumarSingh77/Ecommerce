import { Typography, Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import Item from "./Item";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled(Box)`
  margin: 0 5rem 0 5rem;
  width: 80rem;
`;
const Tabs=styled(Box)`
   display: flex;
   align-items: center;
   border: 1px solid #d1d1d1;
   box-shadow:31.2px 1.2px 2.2px rgba(0,0,0,.02),-5.5px -5.5px 5.3px rgba(0,0,0,.028),-12px -12px 10px rgba(0,0,0,.035),-8.5px -8.5px 17.9px rgba(0,0,0,.042),19.5px 19.5px 33.4px rgba(0,0,0,.05),100px 100px 80px rgba(0,0,0,.07);
   border-radius: 5px;
   width: 14rem;
   justify-content: center;
   height: 5rem;
   margin-top: 60px;
   margin-bottom: 60px;
`;
const Section1 = ({items}) => {
  //    console.log(items);
  return (
    <Component>
      <Wrapper>
        <Box style={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "25px 0",
            }}
          >
            <h3>Deals of the Day</h3>
            <h2>|</h2>
            <h2 style={{ color: "red" }}>Sale ends in 2 days !!!</h2>
          </Box>
          <Link to="/product" style={{textDecoration:"none"}}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography style={{ color: "purple" }}>View More Deals</Typography>
            <FaCaretRight
              style={{ color: "grey", width: "25px", height: "25px" }}
            />
          </Box>
          </Link>
        </Box>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
            justifyContent: "center",
          }}
        >
          {items
            .map((cur, index) => <Item key={index} cur={cur} />)
            .slice(0, 6)}
        </Box>
      </Wrapper>
      <Box style={{ width: "70%",margin:"3rem 0 0 0"}}>
        <img
          src="https://ecom-avez.netlify.app/static/media/banner2.170a5e5bfb405952b6f8.jpg"
          alt="photo"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box style={{display:"flex",justifyContent:"space-evenly",width:"70%"}}>
        <Tabs><Typography style={{fontSize:"32px",color:"purple"}}>Laptops</Typography><Box><FaAngleDoubleRight/></Box></Tabs>
        <Tabs><Typography style={{fontSize:"32px",color:"purple"}}>Chargers</Typography><Box><FaAngleDoubleRight/></Box></Tabs>
        <Tabs><Typography style={{fontSize:"32px",color:"purple"}}>Keyboards</Typography><Box><FaAngleDoubleRight/></Box></Tabs>
      </Box>
    </Component>
  );
};

export default Section1;
