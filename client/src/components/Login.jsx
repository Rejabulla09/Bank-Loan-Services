import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { context, server } from '../main'
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

  const {isAuthenticated,user,setisAuthenticated,loading,setloading} = useContext(context);

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const clear = () =>{
    setemail("");
    setpassword("");
  }

  const submitHandler = async(e) =>{

    e.preventDefault();
    setloading(true);

    try {

      const {data} = await axios.post(`${server}/users/login`,{
        email,
        password
      },{
        headers : {
          "Content-Type" : "application/json"
        },
        withCredentials : true,
      })
  
      toast.success(data.message);
      // console.log(user);
      setisAuthenticated(true);
      setloading(false);
      clear();
      
    } catch (error) {

      toast.error(error.response.data.message);
      console.log(error);
      setisAuthenticated(false);
      setloading(false);
      
    }
  }

  if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <div className="fixed">
    <div className='login'>

      <div className='login_inner'>

        <form action="" onSubmit={submitHandler}>

          <h1>Login</h1>

          <div className="input-box">
            <input 
                  type="email" 
                  placeholder='email' 
                  value={email} 
                  onChange={(e) => setemail(e.target.value)}
            />

            <i className="ri-mail-fill"></i>

          </div>


          <div className="input-box">
            <input 
                  type="password" 
                  placeholder='password' 
                  value={password} 
                  onChange={(e) => setpassword(e.target.value)} 
            />

            <i className="ri-lock-fill"></i>

          </div>

          <button disabled={loading} type="submit" className='btn'>LogIn</button>

          <div className='register_login'>
            <h4>or</h4>

            <Link to={"/register"}>Sign Up</Link>
          </div>

        </form>



      </div>

    </div>
    </div>
  )
}

export default Login