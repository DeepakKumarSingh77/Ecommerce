import mongoose from "mongoose";
import Product from "../models/product.js";
import saveProduct from "../models/saveproduct.js";

export const getAllProduct=async(req,res)=>{
    try {
        const product=await Product.find({});
        return res.status(200).json(product);
    } catch (error) {
        return res.status(503).json({msg:"Error while fetching allproduct from db"});
    }
}

export const getProductById=async(req,res)=>{
    // console.log(req.params.id);
    try {
        const id=req.params.id;
        const product=await Product.findOne({_id:id});
        // console.log(product);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(503).json({msg:"Error while fetching product from db"});
    }
}

export const getexitproduct=async(req,res)=>{
    try {
        const product=await Product.find();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(503).json({msg:"Error while getting data from admin dashboard"});
    }
}

export const deleteproductbyid=async(req,res)=>{
    try {
        // console.log(req.params.id);
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json('product getting delete');
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updatepriceofproduct=async(req,res)=>{
      try {
        const id=req.params.id;
        const newprice=req.body.price;
        await Product.findByIdAndUpdate(id,{price:newprice});
        return res.status(200).json({msg:"price update successfully"});
      } catch (error) {
        return res.status(500).json({ msg: "Error updating product price", error: error.message });
      }
}

export const Addnewproduct=async(req,res)=>{
    try {
        const data=req.body;
        const product=await new Product(data);
        product.save();
        return res.status(200).json({msg:"product added successfully"});
    } catch (error) {
        return res.status(404).json({msg:"Due some issue product are not added"});
    }
}

export const Saveproduct=async(req,res)=>{
    try {
        const data=req.body;
        console.log(data);
        // const product=await new saveProduct(data);
        // saveProduct.save();
    } catch (error) {
        
    }
}