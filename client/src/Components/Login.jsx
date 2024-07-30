import { Box, Typography,styled } from '@mui/material'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext';
import { Navigate,Outlet } from 'react-router-dom';


const Component=styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-shadow: 1.2px 1.2px 2.2px rgba(0,0,0,.02), -5.5px -5.5px 5.3px rgba(0,0,0,.028), -12px -12px 10px rgba(0,0,0,.035), -8.5px -8.5px 17.9px rgba(0,0,0,.042), 19.5px 19.5px 33.4px rgba(0,0,0,.05), 100px 100px 80px rgba(0,0,0,.07);
`;
const Button=styled(Box)`
background: #000;
border: 2px solid #000;
border-radius: 5px;
color: #fff;
display: inline;
padding: 6px 45px;
text-align: center;
cursor: pointer;
`;
const Input=styled("input")`
    border: none;
    border-radius: 10px;
    border:2px solid #edf3f8;
    outline: none;
    padding: 11px 21px;
    color: black;
`;
const loginIntialvalue={
    username:'',
    password:''
}
const SignupIntialValue={
    username:'',
    password:'',
    email:'',
    number:'',
    city:''
}
const Login = ({isUserAuthenticated}) => {
  const {setadmin} = useContext(CartContext);
  const [account,setaccount]=useState('login');
  const [signup,setsignup]=useState(SignupIntialValue);
  const [login,setlogin]=useState(loginIntialvalue);
  const [toggle,settoggle]=useState(false);
  const navigate = useNavigate();
  
  const UserSignin=async()=>{
    try {
        const res=await axios.post(`https://ecom-24.onrender.com/signup`,signup);
        console.log(res.status);
        if(res.status===200){
          setaccount('login');
        }else{
          // Settoggle(cur=>!cur);
          window.alert("User Detail is Incomplete");
        }
    } catch (error) {
      window.alert("Username Already exist");
    }
}
const userLogin=async()=>{
    try {
      const res=await axios.post(`https://ecom-24.onrender.com/login`,login);
      console.log(res);
       if(res.status===200 && res.data.value===1){
        setadmin(true);
        navigate('/');
        isUserAuthenticated(true);
       }else if(res.status===200){
        navigate('/');
        isUserAuthenticated(true); 
       }
    } catch (error) {
      window.alert("Invalid User Information");
    }
  }

  const changelogin=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value});
  }
  const changesignup=(e)=>{
    setlogin({...login,[e.target.name]:e.target.value});
  }
  // console.log(account);
  return (
    <Component>
    {
        account==='signup'?(<Box style={{width:"20rem",backgroundColor:"White",borderRadius:"15px"}}>
              <Typography style={{fontSize:"24px",margin:"10px 0 10px 30px",fontWeight:"bold"}}>Register</Typography>
              <Box style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"15px"}}>
                <Input type="text" placeholder='Enter your Name' name="username" style={{width:"80%"}} onChange={(e)=>{changelogin(e)}}/>
                <Input type="text" placeholder='Enter your Email' name="email" style={{width:"80%"}} onChange={(e)=>{changelogin(e)}}/>
                <Input type="text" placeholder='Enter your mobile Number' name="number" style={{width:"80%"}} onChange={(e)=>{changelogin(e)}}/>
                <Input type="text" placeholder='City of Residense' name="city" style={{width:"80%"}} onChange={(e)=>{changelogin(e)}}/>
                <Input type="text" placeholder='Create Password' name="password" style={{width:"80%"}} onChange={(e)=>{changelogin(e)}}/>
                <Button onClick={()=>{UserSignin()}}>Register</Button>
              </Box>
              <Typography style={{marginLeft:"15px",margin:"10px "}}>Already have an acoount <span onClick={()=>{setaccount('login')}} style={{color:"blue",cursor:"pointer"}}>Login</span></Typography>
        </Box>):(
            <>
            <Box style={{width:"20rem",backgroundColor:"White",borderRadius:"15px"}}>
        <Typography style={{fontSize:"24px",margin:"10px 0 10px 30px",fontWeight:"bold"}}>Login</Typography>
        <Box style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"15px"}}>
            <Input type="text" placeholder="Enter your Username" name="username" onChange={(e)=>{changesignup(e)}}/>
            <Input type="text" placeholder="Enter your password" name="password" onChange={(e)=>{changesignup(e)}}/>
            <Button onClick={()=>{userLogin()}}>Login</Button>
        </Box>
        <Typography style={{marginLeft:"15px",margin:"10px "}}>Create new Account <span onClick={()=>{setaccount('signup')}} style={{color:"blue",cursor:"pointer"}}>Sign up</span></Typography>
        </Box>
        </>
    )
    }
        
        <Box>

        </Box>
    </Component>
  )
}

export default Login