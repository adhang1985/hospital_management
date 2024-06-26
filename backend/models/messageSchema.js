import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3, "First Name must contain minimum 3 charaters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3, "Last Name must contain minimum 3 charaters!"]
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"Please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [11, "Phone number must contain exact 11 digits"],
        maxLength: [11, "Phone number must contain exact 11 digits"]
    },
    message:{
        type:String,
        required:true,
        minLength: [10, "Message must contain at least 10 characters!"]
    }
})

export const Message = mongoose.model("Message",messageSchema);