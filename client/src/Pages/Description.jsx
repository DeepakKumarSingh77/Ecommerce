import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Section3 from '../Components/Section3';
const Description = ({items,isAuthenticated,isUserAuthenticated}) => {
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // This ensures the page scrolls to the top when loaded
}, [location]);
    
  return (
    <Box>
        <Navbar isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated}/>
        <Section3 items={items}/>
    </Box>
  )
}

export default Description