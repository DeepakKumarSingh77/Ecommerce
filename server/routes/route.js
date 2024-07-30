import express from "express";
const router=express.Router();
import { getAllProduct,getProductById,getexitproduct,deleteproductbyid,updatepriceofproduct,Addnewproduct} from "../controller/product-controller.js";
import {signupUser,loginUser,getAllUser,deleteUser} from "../controller/user-controller.js"
import {stripesession} from "../controller/checkout-controller.js";

router.get("/getallproduct",getAllProduct);
router.get("/getproductbyid/:id",getProductById);
router.post('/signup',signupUser);
router.post('/login',loginUser);
router.get('/exitingproduct',getexitproduct);
router.delete('/deleteproduct/:id',deleteproductbyid);
router.put('/updateprice/:id',updatepriceofproduct);
router.post('/addnewproduct',Addnewproduct);
router.get('/getalluser',getAllUser);
router.delete('/deleteuserdetail/:id',deleteUser);

// router.post('/create-checkout-session',stripesession);

export default router;

