import { NextRequest, NextResponse } from "next/server";

export const GET =(request:NextRequest) =>{
    try {
        const response = NextResponse.json({
            message:"Success fully logged out",
            status:200
        });
        response.cookies.set("token","", {httpOnly:true})
        return response
    } catch (error) {
        const response = NextResponse.json({
            message:"Failed to logged out",
            status:400
        });
    }
}