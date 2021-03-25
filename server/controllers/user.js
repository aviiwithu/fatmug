
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup= async(req,res)=>{


    const{ email, password, firstName, lastName } = req.body;

    try {
        const oldUser = await userModel.findOne({email});

        if(oldUser) return res.status(400).json({message:'user already exists'});

        const hashedPassword = await bcrypt.hash(password, 12);

        const savedUser = await userModel.create({email:email,password:hashedPassword, name:`${firstName} ${lastName}`});

        const token = jwt.sign({email:savedUser.email,id:savedUser._id},process.env.JWT_SECRET,{expiresIn:'1h'} );

        res.status(201).json({name:savedUser.name,userid:savedUser._id,email:savedUser.email,token});

    } catch (error) {
        res.status(500).json(error);
    }
}

export const signin = async(req,res)=>{

    const {email, password} = req.body;
    try {

        const oldUser = await userModel.findOne({email});
        if(!oldUser) return res.status(404).json({message:'user does not exists'});

        const checkPassword = await bcrypt.compare(password, oldUser.password);

        if(!checkPassword) return res.status(404).json({message:'invalid credentials'});

        const token = jwt.sign({email:oldUser.email,userid:oldUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({email:oldUser.email,userid:oldUser._id, name:oldUser.name, token});

        
    } catch (error) {
        res.status(500).json(error)
    }
}