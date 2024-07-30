import mongoose from "mongoose";

const saveProductSchema=new mongoose.Schema({
    // id:{
    //     type:String,
    //     unique:true,
    // },
    // quantity:{
    //     type:String,
    // },
    // price:{
    //     type:String,
    // },
    // username:{

    // },
    // remainDay:{
    //     type:Date,
    // }
})

const saveProduct=mongoose.model('saveProducts',saveProductSchema);

export default saveProduct;