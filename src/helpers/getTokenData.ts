import { NextRequest } from "next/server";
import  Jwt  from "jsonwebtoken";

export const getTokenData =(request:NextRequest)=>{
    try {
        const token = request.cookies.get("token")?.value ||"";
       const decodedToken:any =  Jwt.verify(token.toString(), process.env.TOKEN_SECRET!);
       return decodedToken.id;
        
    } catch (error:any) {
        
    }

}