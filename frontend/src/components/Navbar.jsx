import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import NewContext from '../context/NewContext';

const Navbar = () => {

    const [show,setShow] = useState(false);
    const {isAuthenticated,setIsAuthenticated} = useContext(NewContext);
    const navigateTo = useNavigate();

    const handleLogout = () => {
        // await axios.get("http://localhost:5000/api/v1/user/patient/logout")
        // .then((res) => {
        //     toast.success(res.data.message);
        //     setIsAuthenticated(false);
        // })
        // .catch((err) => {
        //     toast.error(err.response.data.message);
        // })
        setIsAuthenticated(false);
    };

    const handleLogin = () => {
        navigateTo('/login');
        console.log(isAuthenticated);
    }

  return (
    <nav className='container'>
        <div className="logo">
            Adriti {isAuthenticated}
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                <Link to={'/'} onClick={() => setShow(!show)}>Home</Link>
                <Link to={'/appointment'} onClick={() => setShow(!show)}>Appointment</Link>
                <Link to={'/about'} onClick={() => setShow(!show)}>About Us</Link>
            </div>
            
            {
                isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button>) : (<button className='logoutBtn btn' onClick={handleLogin}>LOGIN</button>)
            }
        </div>
    </nav>
  )
}

export default Navbar