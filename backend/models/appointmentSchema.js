import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength: [12, "NIC must contain exact 12 digits"],
        maxLength: [12, "NIC must contain exact 12 digits"]
    },
    dob:{
        type: Date,
        required:[true,"DOB is required"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    appointmentDate:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    doctor:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        }
    },
    hasVisited:{
        type:Boolean,
        default:false
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }
});


export const Appointment = mongoose.model("Appointment",appointmentSchema);