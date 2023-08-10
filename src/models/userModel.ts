import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:[true, "Please provide a email"],
    unique:true
},
password:{
    type:String,
    required:[true, "Please Provide password"],
},
isVerified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean, 
    default:false,
}
})

const User = mongoose.model("users", userSchema);
export default User