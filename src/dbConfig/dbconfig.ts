import mongoose from "mongoose";

export const connect = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on("connected",() =>{
            console.log(`%c Connected with DB`, 'background: #008000; color: #fff');
        });
        connection.on("error",(error) =>{
            console.log(`%c Error in DB Connection `, 'background: #008000; color: #fff');
            console.log(`Error ${error}`);
            process.exit();
        });
    } catch (error) {
        console.group("Error in DB")
        console.log(`Error while connecting to DB ${error}`);
        console.groupEnd(); 
    }
}