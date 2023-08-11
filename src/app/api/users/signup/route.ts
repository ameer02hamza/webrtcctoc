import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export const POST = async (request: NextRequest) => {
    console.log(`%c POST`);
    try {
        const reqBody = await request.json();
        console.log(`%c reqBody`, reqBody);
        const { email, username, password } = reqBody;
        const user = await User.findOne({ email });
        console.log(`%c user`, user);
        if (user) {
            return NextResponse.json({
                error: "User Already Exists"
            }, { status: 400 });
        }
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(
            password, salt
        )
        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
        await newUser.save()
        console.log("saved user", newUser);
        return NextResponse.json({
            message: "User created Successfully",
            sucess: true,
            newUser
        })
    } catch (error: any) {
        console.log("eeror", error);
        
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
export const GET = async (request: NextRequest) => {
    console.log(`%c POST`, 'background: #008000; color: #fff');
    try {
        return NextResponse.json({
            message: "User created Successfully",
            sucess: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}