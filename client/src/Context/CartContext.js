import React, { createContext,useState } from 'react'
import CartProduct from '../Pages/CartProduct';
import axios from 'axios';


export const CartContext=createContext({
    items:[],
    getproductQuantity:()=>{},
    addoneProduct:()=>{},
    removeoneproduct:()=>{},
    getnooftotalitems:()=>{},
    // gettotalPrice:()=>{},
    setadmin: () => {}, // Make sure setadmin is included
    admin: false
})
export const CartProvider = ({children}) => {
  const [cartproduct,setcardproduct]=useState([]);
  // const [item,searchitem]=useState([]);
  const [admin,setadmin]=useState(false);

  // [{id:1,quantity:3},{id:2,quantity:1}]

  const getproductQuantity=(id)=>{
           const quantity=cartproduct.find(product=>product.id===id)?.quantity;
           if(quantity===undefined){
            return 0;
           }
           return quantity;
  } 

  const addoneProduct=(id,value)=>{
         const quantity=getproductQuantity(id);
         if(quantity===0){
              setcardproduct([
                ...cartproduct,{
                  id:id,
                  quantity:1,
                  price:value
                }
              ])
         }else{
          setcardproduct(
            cartproduct.map(cur=>cur.id===id?{
              ...cur,quantity:cur.quantity+1}:cur)
          )
         }
  }
  const removeoneproduct=(id)=>{
        const quantity=getproductQuantity(id);
        if(quantity===1){
          deleteItem(id);
        }else{
          setcardproduct(
          cartproduct.map(cur=>cur.id===id?{...cur,quantity:cur.quantity-1}:cur)
          )
        }
  }
  

  const deleteItem=(id)=>{
    setcardproduct(
      cartproduct =>
      cartproduct.filter(currentProduct => {
          return currentProduct.id != id;
      })  
  )
  } 
  // const gettotalPrice=(id)=>{
    
  // }
  

  // const getproductbyid=async(id)=>{
  //   try {
  //     const res=await axios.get(`https://ecom-24.onrender.com/getproductbyid/${id}`);
  //     searchitem(res.data);
  //   } catch (error) {
  //     console.log("Error while fetching data from context page")
  //   }
  // }
  const getnooftotalitems=()=>{
    let cnt=0;
    cartproduct.map((cur)=>{
      cnt+=cur.quantity;
    })
    return cnt;
  }

  const contextValue={
    items:cartproduct,
    getproductQuantity,
    addoneProduct,
    removeoneproduct,
    // gettotalPrice
    getnooftotalitems,
    setadmin,
    admin
  }
  console.log(cartproduct);
  return (
    <CartContext.Provider value={contextValue}>
         {children}
    </CartContext.Provider>
  )
}

export default CartProvider;