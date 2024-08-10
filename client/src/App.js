import React,{useContext, useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom"
import Home from './Pages/Home';
import Products from './Pages/Products';
import axios from 'axios';
import Description from './Pages/Description';
import CartProduct from './Pages/CartProduct';
import Login from './Components/Login';
import Error from './Components/Error';
import { CartContext } from './Context/CartContext';
import AdminDashboard from './Pages/AdminDashboard';
import Addnewproduct from './Components/Addnewproduct';
import AllUser from './Components/AllUser';
import AllExitingproduct from './Components/AllExitingproduct';
import Responsive from './Components/Responsive';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';

const PrivateRouteadmin=({admin,...props})=>{
  return admin?(
      <Outlet/>
  ):(
    <Navigate replace to="/Error"/>
  )
}
const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated?(
      <Outlet/>
  ):(
    <Navigate replace to="/login"/>
  )
}
function App() {
  const {admin}=useContext(CartContext);
  // console.log("admin",admin);
  const [items, setitems] = useState([]);
  const [isAuthenticated,isUserAuthenticated]=useState(false);
    useEffect(() => {
      const fetch = async () => {
        const res = await axios.get("https://ecom-24.onrender.com/getallproduct");
        setitems(res.data);
      };
      fetch();
    }, []);
  return (
    <>
    <Responsive/>
    <div className='app'>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home items={items} isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated}/>}/>
        <Route path='/product' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path='/product' element={<Products items={items}/>}/>
        </Route>
        <Route path='/description' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path='/description' element={<Description items={items} />}/>
        </Route>
        <Route path='/cart' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path='/cart' element={<CartProduct/>}/>
        </Route>
        <Route path='/login' element={<Login isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated}/>}/>
        <Route path='/Error' element={<Error/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/admin" element={<PrivateRouteadmin admin={admin}/>}>
              <Route path='/admin' element={<AdminDashboard/>}/>
        </Route>
        <Route path="/addproduct" element={<PrivateRouteadmin admin={admin}/>}>
              <Route path='/addproduct' element={<Addnewproduct/>}/>
        </Route>
        <Route path="/exitingproduct" element={<PrivateRouteadmin admin={admin}/>}>
              <Route path='/exitingproduct' element={<AllExitingproduct/>}/>
        </Route>
        <Route path="/alluser" element={<PrivateRouteadmin admin={admin}/>}>
              <Route path='/alluser' element={<AllUser/>}/>
        </Route>
        <Route path='/success' element={<Success/>}/>
          <Route path='/cancel' element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
