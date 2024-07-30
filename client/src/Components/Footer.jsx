import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import React from 'react'

const Component=styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #ebe7e7;
   height: 120px;
`;

const Footer = () => {
  return (
    <Component>
        <Typography style={{fontSize:"20px"}}>One Stop Platform for all your needs ❤️</Typography>
    </Component>
  )
}

export default Footer