import { connect } from "@/dbConfig/dbconfig";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server"

connect();
export const GET =async (request:NextRequest) =>{
    try {
      const userId =  await getTokenData(request);
      const user = await User.findOne({_id:userId}).select("-password");
      return NextResponse.json({
        message:"user found",
        data:user
      });
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:400});
    }
}