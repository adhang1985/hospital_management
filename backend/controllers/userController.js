import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from 'cloudinary';


export const patientRegister = catchAsyncError(async(req,res,next) => {
    const {firstName,lastName,email,phone,nic,dob,gender,password,role} = req.body;
    if(!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role){
        return next(new ErrorHandler("Please fill all the fields!", 400));
    }

    const user = await User.findOne({email});

    if(user){
        return next(new ErrorHandler("User already registered",400))
    }

    const newUser = await User.create(req.body);

    res.status(201).json({
        success: true,
        message:"New patient is registered"
    })
})


export const login = catchAsyncError(async(req,res,next) => {
    const {email,password,confirmPassword,role} = req.body;
    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("Please provide all the details", 400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Password and confirm password do not match", 400));
    }

    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password or Email",400));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password or Email",400));
    }

    if(role !== user.role){
        return next(new ErrorHandler("User with this role not found",400));
    }

    generateToken(user,"User is logged in",200,res);

});


export const adminRegister = catchAsyncError(async(req,res,next) => {
    const {firstName,lastName,email,password,phone,nic,dob,gender} = req.body;
    if(!firstName || !lastName || !email || !password || !phone || !nic || !dob || !gender){
        return next(new ErrorHandler("Please fill all the fields!", 400));
    }

    const isAdminRegistered = await User.findOne({email});

    if(isAdminRegistered){
        return next(new ErrorHandler("Admin with this Email is already registered",400))
    }

    const newAdmin = await User.create({
        firstName,lastName,email,password,phone,nic,dob,gender,role:"Admin"
    });

    res.status(201).json({
        success: true,
        message:"New Admin is registered"
    })
});

export const getAllDoctors = catchAsyncError(async(req,res,next) => {
    const doctors = await User.find({role:"Doctor"});
    res.status(200).json({
        success:true,
        data:doctors
    })
});

export const getUserDeatils = catchAsyncError(async(req,res,next) => {
    console.log(req.user);
    const user = req.user;
    res.status(200).json({
        success:true,
        user
    })
});

export const logoutAdmin = catchAsyncError(async(req,res,next) => {
    res.status(200).cookie("adminToken","",{
        expires: new Date(Date.now())
    }).json({
        success:true,
        message: "Admin logged out successfully"
    })
});

export const logoutPatient = catchAsyncError(async(req,res,next) => {
    res.status(200).cookie("patientToken","",{
        expires: new Date(Date.now())
    }).json({
        success:true,
        message: "Patient logged out successfully"
    })
});

export const addNewDoctor = catchAsyncError(async(req,res,next) => {
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("Doctor Avatar Required!",400));
    }
    const {docAvatar} = req.files;
    const allowedFormat = ["image/png","image/jpeg","image/webp"];

    if(!allowedFormat.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("File format not supported",400));
    }

    const {firstName,lastName,email,password,phone,nic,dob,gender,doctorDepartment} = req.body;

    if(!firstName || !lastName || !email || !password || !phone || !nic || !dob || !gender || !doctorDepartment){
        return next(new ErrorHandler("Please provide full details",400))
    }

    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already registered with this email`,400))
    }

    const cloudineryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if(!cloudineryResponse || cloudineryResponse.error){
        console.error("Cloudinary Error:",cloudineryResponse.error || "Unknown cloudinary error")
    }

    const doctor = await User.create({firstName,lastName,email,password,phone,nic,dob,gender,doctorDepartment,role:"Doctor",
                docAvatar:{
                    public_id:cloudineryResponse.public_id,
                    url:cloudineryResponse.secure_url
                }
            });

        res.status(201).json({
            success:true,
            message:"New doctor registered",
            doctor
        })    

})