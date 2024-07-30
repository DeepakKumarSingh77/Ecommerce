import React from 'react'
import { Typography, Box, styled } from "@mui/material";
import Item from "./Item";
import { FaAngleDoubleRight } from "react-icons/fa";

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
   width: 18rem;
   justify-content: center;
   height: 5rem;
   margin-top: 60px;
   margin-bottom: 60px;
`;
const Section2 = ({items}) => {
  return (
    <Component>
      <Wrapper>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "25px 0",
            }}
          >
            {/* <h3>Deals of the Day</h3>
            <h2>|</h2> */}
            <h2 style={{ color: "red" }}>Popular Products</h2>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography style={{ color: "purple" }}></Typography>
          </Box>
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
            .slice(12,18)}
        </Box>
      </Wrapper>
      <Box style={{display:"flex",justifyContent:"space-evenly",width:"70%",margin:"20px 0",}}>
        <Tabs><Typography style={{fontSize:"32px",color:"blue"}}>Women Clothing</Typography><Box><FaAngleDoubleRight style={{color:"blue"}}/></Box></Tabs>
        <Tabs><Typography style={{fontSize:"32px",color:"blue"}}>Lipsticks</Typography><Box><FaAngleDoubleRight style={{color:"blue"}}/></Box></Tabs>
        <Tabs><Typography style={{fontSize:"32px",color:"blue"}}>Perfumes</Typography><Box><FaAngleDoubleRight style={{color:"blue"}}/></Box></Tabs>
      </Box>
      </Component>
  )
}

export default Section2