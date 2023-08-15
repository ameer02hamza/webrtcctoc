import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
connect();

export const POST = async (request: NextRequest) =>{

    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({ error:"user doesn't exists" }, { status: 400 })
 
        }
        const validPassword = bcryptjs.compare(password, user.password!)
        if(!validPassword){
            return NextResponse.json({ error:"Password is incorrect" }, { status: 400 })
        }
        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }
        const token =  await jwt.sign(tokenData, process.env.TOKEN_SECRET!)

        const response =  NextResponse.json({
            message: "User Logged In Successfully",
            token:token,
            sucess: true,
        })
        response.cookies.set("token", token , {httpOnly:true})
        return response;
    } catch (error) {
        
    }
    
}