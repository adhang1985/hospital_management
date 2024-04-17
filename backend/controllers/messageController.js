import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncError(async(req,res,next) => {
    const {firstName,lastName,email,phone,message} = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Please fill all the fields",400));
    }
    const newMsg = new Message(req.body);
    await newMsg.save();
    res.status(201).json({
        success:true,
        data:newMsg,
        message: "Message is posted successfully"
    })
});

export const getAllMessages = catchAsyncError(async(req,res,next) => {
    const messages = await Message.find();
    res.status(200).json({
        success:true,
        data:messages
    })
})