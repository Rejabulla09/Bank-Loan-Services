import React, { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom"
import axios from "axios";
import { context, server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [pan, setpan] = useState("");
  const [phone, setphone] = useState(null);

  const { isAuthenticated, setisAuthenticated, loading, setloading } = useContext(context);

  const clear = () => {
    setemail("");
    setname("");
    setpassword("");
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);

    try {

      const { data } = await axios.post(`${server}/users/new`, {
        name,
        email,
        password,
        phone,
        pan
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      toast.success(data.message);
      setisAuthenticated(true);
      setloading(false);
      clear();

    } catch (error) {

      toast.error(error.response.data.message);
      console.log(error);
      setisAuthenticated(false);
      setloading(true);

    }
  }

  if (isAuthenticated) return <Navigate to={"/"} />


  return (
    <div className="register">

      <div className='register_inner'>

        <form onSubmit={submitHandler} action="">

          <div>

            <h1>Regsiter</h1>

          </div>

          <div className='reg_input'>
            <input
              type="text"
              placeholder='name'
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />

            <i className="ri-user-3-fill"></i>

          </div>

          <div className='reg_input'>
            <input
              type="email"
              placeholder='email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />

            <i className="ri-mail-fill"></i>

          </div>

          <div className='reg_input'>
            <input
              type="text"
              placeholder='Pan number..'
              value={pan}
              onChange={(e) => setpan(e.target.value)}
              required
            />

            <i class="ri-bank-card-line"></i>


          </div>

          <div className='reg_input'>
            <input
              type="number"
              placeholder='Phone number'
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              required
            />

            <i class="ri-phone-line"></i>


          </div>

          <div className='reg_input'>
            <input
              type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />

            <i className="ri-lock-fill"></i>

          </div>



          <button disabled={loading} type='submit' className='btn'> Sign UP</button>

          <div className='register_login'>

            <h4>or</h4>

            <Link to={"/login"}>Login</Link>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Register