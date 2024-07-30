import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import styled from '@emotion/styled'
import Herosection from '../Components/Herosection';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import axios from "axios";
import Footer from '../Components/Footer';

const Components=styled("div")`
  
`;
const Home = ({items,isAuthenticated,isUserAuthenticated}) => {
  return (
    <Components>
        <Navbar isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated}/>
        <Herosection/>
        <Section1 items={items}/>
        <Section2 items={items}/>
        <Footer/>
    </Components>
  )
}

export default Home