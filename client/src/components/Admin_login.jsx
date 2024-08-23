import axios from 'axios';
import React, { useContext, useState } from 'react'
import { context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Admin_login = () => {

    const{ isAuthenticated, setisAuthenticated, adminisAuthenticated, setadminisAuthenticated } = useContext(context);

    if(isAuthenticated){
        // toast.error("You're already logged in as a user . Please log out First and then try!")
         return <div className="authentication">
            You're already logged in as a user . Please log out First and then try!
        </div>
        // return <Navigate to={"/"}/>
    }

    // console.log(isAuthenticated,adminisAuthenticated);

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const clear = () =>{
        setemail("");
        setpassword("");
      }

    const admin_login_handler = async (e) => {
        e.preventDefault();

        try {

           const { data } = await axios.post(`${server}/users/adminlogin`, {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })

            toast.success(data.message);

            setadminisAuthenticated(true);

            // setisAuthenticated(true);

            clear();

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setadminisAuthenticated(false);
            // setisAuthenticated(false);
            clear();
        }
    }

  if(adminisAuthenticated) return <Navigate to={"/adminUpdate"}/>


    return (

        <div className="fixed">
            <div className='login'>

                <div className='login_inner'>

                    <form action=""  onSubmit={admin_login_handler}>

                        <h1>Admin</h1>

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

                        <button type="submit" className='btn'>LogIn</button>

                    </form>



                </div>

            </div>
        </div>

    )
}

export default Admin_login