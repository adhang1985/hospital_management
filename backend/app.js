import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './routers/messageRouter.js';
import userRouter from './routers/userRouter.js';
import appointmentRouter from './routers/appointmentRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();
config({path:"./config/config.env"});

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

app.use('/api/v1/message',messageRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/appointment',appointmentRouter);


dbConnection();


app.use(errorMiddleware);

export default app;