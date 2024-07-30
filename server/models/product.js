import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    title:{
        type:String
    },
    description:{
        type:String
    },image:{
        type:String
    },price:{
        type:String
    },
    deal:String,
    mainCategory:String,
    commonCategory:String,
    icon:String
})

const products=mongoose.model('product',productSchema);

export default products;