// eslint-disable-next-line no-unused-vars
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import AboutUs from './pages/AboutUs'
import Register from './pages/Register'
import Login from './pages/Login'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import NewContext from './context/NewContext'

const App = () => {

  // const {isAuthenticated,setIsAuthenticated,setUser} = useContext(NewContext);

  

  // useEffect(() => {
  //   const fetchUser = async() => {
  //     try {
  //         const response = await axios.get("http://localhost:5000/api/v1/user/patient/me");
  //         setIsAuthenticated(true);
  //         setUser(response.data.user);
  //     } catch (error) {
  //         setIsAuthenticated(false);
  //         setUser({});
  //     }
  //   };
  //   fetchUser();
  // },[isAuthenticated])  

  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
