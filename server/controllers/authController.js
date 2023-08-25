import asyncHandler from "express-async-handler"
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt"

export const login = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        throw new Error("Enter all details",StatusCodes.BAD_REQUEST);
    }
    const user = await User.findOne({email,isActive : true});
    if(!user)
    {
        throw new Error("User Not found",StatusCodes.NOT_FOUND);
    }
    const match = await user.comparePassword(password);
    if(!match)
    {
        throw new Error("Invalid credentials",StatusCodes.UNAUTHORIZED);
    }
    const accessToken = await user.createAccessToken();
    return res.status(StatusCodes.OK).json({ message : "Login successful", accessToken : accessToken , user , role : user.role })
})

export const registeration = asyncHandler(async(req,res)=>{
    const {name,email,password,contact} = req.body;
    if(!name || !email || !password || !contact) 
    {
        throw new Error("Fill all details",StatusCodes.BAD_REQUEST);
    }
    const isRegistered = await User.findOne({email});
    if(isRegistered)
    {
        throw new Error("User already registered",StatusCodes.CONFLICT);
    }
    const hashedPassword = await bcrypt.hash(password,10)
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    return res.status(StatusCodes.CREATED).json({message : "User registeration successful"});
})

