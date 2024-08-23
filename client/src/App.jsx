import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from './components/Home'
import Profile from './components/Profile'
import Register from './components/Register'
import Header from './components/Header'
import Login from './components/Login'
import { useEffect } from 'react'
import axios from 'axios'
import { context, server } from './main'
import Footer from './components/Footer'
import Loan from './components/Loan'
import ApplyForLoan from './components/ApplyForLoan'
import Admin_login from './components/Admin_login'
import AdminUpdate from './components/AdminUpdate'

const App = () => {

  const { setuser ,user, setisAuthenticated, isAuthenticated, adminisAuthenticated, setadminisAuthenticated} = useContext(context);

  // console.log(isAuthenticated,adminisAuthenticated);

  useEffect(() =>{

    axios.get(`${server}/users/me`,{
      withCredentials : true,
    })
    .then((res) =>{ 
      // console.log(res);
      setuser(res.data.user);
      // console.log(res.data.user);
      // console.log(user);
      if(res.data.user.role === "admin"){
        setadminisAuthenticated(true);
      }
      else{
        setisAuthenticated(true);
      }
      // setisAuthenticated(true);
      
    })
    .catch(() => {
      setuser({});
      setisAuthenticated(false);
    })
  },[])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/apply' element={<ApplyForLoan/>}/>
        <Route path='/adminUpdate' element={<AdminUpdate/>}/>
        <Route path='/adminlogin' element={<Admin_login/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App