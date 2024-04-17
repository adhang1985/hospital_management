import React from 'react'
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import NewContext from '../context/NewContext';

const Login = () => {

  const {isAuthenticated,setIsAuthenticated} = useContext(NewContext);

  const [credentials,setCredentials] = useState({
      email : "",
      password : "",
      confirmPassword : ""
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
     setCredentials({...credentials,[e.target.name]:e.target.value});
  }

  const handleLogin = async(e) => {
     e.preventDefault();
     try {
        const obj = {...credentials,role:"Patient"};
        const response = await axios.post("http://localhost:5000/api/v1/user/login",obj);
        toast.success(response.data.message);
        setIsAuthenticated(true);
        navigateTo('/');
     } catch (error) {
        toast.error(error.response.data.message);
     }
  }

  if(isAuthenticated){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please login to continue</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleLogin}>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Email"/>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password"/>
            <input type="password" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange} placeholder="Confirm Password"/>
            <div style={{gap:"10px",justifyContent:"flex-end",flexDirection:"row"}}>
              <p>Not Registered?</p>
              <Link to={'/register'}>Register Now</Link>
            </div>
            <div style={{justifyContent:"center",alignItems:"center"}}>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login