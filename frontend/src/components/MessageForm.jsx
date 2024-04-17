// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const MessageForm = () => {

    const [msgObj,setMsgObj] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    });

    const handleChange = (e) => {
        setMsgObj({...msgObj,[e.target.name]:e.target.value});
    }

    const handleMessage = async(e) => {
        e.preventDefault();
        const BASE_URL = "http://localhost:5000/api/v1/message/send/";

        try {
           
            await axios.post(BASE_URL,msgObj)
            .then(res => {
                console.log(res);
                toast.success(res.data.message);
                setMsgObj({
                    firstName:"",
                    lastName:"",
                    email:"",
                    phone:"",
                    message:""
                })
            })
        } catch (error) {
            console.log(error.message);
            toast.error(error.response.data.message);
        }

    }

  return (
    <div className='container form-component message-form'>
        <h2>Send Us a message</h2>
        <form onSubmit={handleMessage}>
            <div>
                <input type="text" name="firstName" placeholder='First Name' value={msgObj.firstName} onChange={handleChange}/>
                <input type="text" name="lastName" placeholder='Last Name' value={msgObj.lastName} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name="email" placeholder='Email' value={msgObj.email} onChange={handleChange}/>
                <input type="number" name="phone" placeholder='Phone' value={msgObj.phone} onChange={handleChange}/>
            </div>
            <textarea name="message" rows={7} value={msgObj.message} onChange={handleChange}></textarea>
            <div style={{justifyContent:"center",alignItems:"center"}}>
                <button type='submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default MessageForm