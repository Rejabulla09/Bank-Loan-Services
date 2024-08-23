import React, { useContext } from 'react'
import {Link, Navigate} from "react-router-dom";
import { context, server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {

  const{isAuthenticated,setisAuthenticated,loading,setloading, adminisAuthenticated, setadminisAuthenticated} = useContext(context);

  // console.log(isAuthenticated);

  const logoutHandler = async() =>{
    setloading(true);

    try {

      const {data} = await axios.get(`${server}/users/logout`,{
        withCredentials : true,
      })
  
      toast.success("Logged Out Successfully");
      setisAuthenticated(false);
      setadminisAuthenticated(false);
      setloading(false);
      
    } catch (error) {

      toast.error(error.response.data.message);
      console.log(error);
      setisAuthenticated(true);
      setadminisAuthenticated(true);
      setloading(false);
      
    }
  }

  

  return (
    <nav className='header'>

      <div className="title">

       <h2>BBitBank.</h2>

      </div>


      <article>
        {/* <Link to={"/"}>Home</Link> */}
        {/* <Link to={"/profile"}>Profile</Link> */}

        <a href="/">Home</a>
        <a href="/profile">Profile</a>

        {
          adminisAuthenticated ? "" : <Link to={"/loan"}>Loan</Link>
        }
        

        {/* <button disabled={adminisAuthenticated}><a href="/adminlogin">Admin</a></button> */}

        <a href="/adminlogin">Admin</a>



        {/* {
          adminisAuthenticated ? 
          // (<button disabled={loading} onClick={logoutHandler} className='btn'>LogOut</button>)
          ""
          // (<Link to={"/logout"}>Logout</Link>)
          :
          ( <Link to={"/adminlogin"}>Admin</Link>)
        } */}

        {/* <Link to={"/admin"}>Admin</Link> */}

        {
          isAuthenticated || adminisAuthenticated ? 
          (<button disabled={loading} onClick={logoutHandler} className='btn'>LogOut</button>)
          // (<Link to={"/logout"}>Logout</Link>)
          :
          ( <Link to={"/login"}>Login</Link>)
        }
       
      </article>

    </nav>
  )
}

export default Header