import React,{useState} from 'react'
import {Box,styled} from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Initialvalue={
  title:"",
  description:"",
  image:"",
  price:"",
  deal:"",
  mainCategory:"",
  commonCategory:"",
  icon:"",
}
const Input=styled("input")`
   width: 20rem;
   height: 30px;
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
     margin: 0 0 10px 20px;
`;
const Addnewproduct = () => {
  const [data,setdata]=useState(Initialvalue);
  const navigate=useNavigate();
  const changeHandle=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }  
    const submitdata=async()=>{
      try {
        const res=await axios.post('https://ecom-24.onrender.com/addnewproduct',data);
        console.log(res);
      if(res.statusText==='OK'){
        console.log("hello");
        navigate("/exitingproduct");
      }
      } catch (error) {
        console.log("Error while adding new product")
      }
    }
  return (
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
      <Box style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",boxShadow:"1px 1px 1px 1px rgba(0,0,0,.2)",gap:"5px"}} >
          <Input  placeholder='Enter title' name='title' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter description' name='description' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your Images url' name='image' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your price' name='price' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your deal' name='deal' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your mainCategory' name='mainCategory' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your commonCategory' name='commonCategory' onChange={(e)=>{changeHandle(e)}}/>
          <Input placeholder='Enter your icon' name='icon' onChange={(e)=>{changeHandle(e)}}/>
          <Button onClick={()=>{submitdata()}}>Submit</Button>
      </Box>
    </Box>
  )
}

export default Addnewproduct