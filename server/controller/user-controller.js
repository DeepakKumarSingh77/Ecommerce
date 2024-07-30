import bcrypt from 'bcrypt';
import User from '../models/user.js';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import Token from '../model/token.js';
dotenv.config();

export const signupUser=async(req,res)=>{
    try {
        const { username, password, email, number, city } = req.body;
        if (!username || !password || !email || !number || !city) {
            return res.status(205).json({ msg: 'Please provide all required fields' });
        }
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        const user={username:req.body.username,password:hashedPassword,email:req.body.email,number:req.body.number,city:req.body.city};
        const newUser =new User(user);
        await newUser.save();
        return res.status(200).json({msg:'signup sucessfully'})
    } catch (error) {
        return res.status(500).json({msg:'Error while signup up user'})
    }
}

export const loginUser=async(req,res)=>{
    const user=await User.findOne({username:req.body.username});
    // console.log(user);
    if(!user){
        return res.status(500).json({msg:'Username does not match'});
    }
    try {
        let match=await bcrypt.compare(req.body.password,user.password);
        if(match){
            res.status(200).json({username:user.username,value:user.role});
        }else{
            res.status(450).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        return res.status(400).json({msg:'Error while Login up user'})
    }
}

export const getAllUser=async(req,res)=>{
    try {
        const user=await User.find({});
        return res.status(200).json({user});
    } catch (error) {
        return res.status(404).json({msg:"Error while fetching all user"});
    }
}

export const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json('delete user detail successfully');
    } catch (error) {
        return res.status(404).json({msg:"Error while delete user detail"});
    }
}