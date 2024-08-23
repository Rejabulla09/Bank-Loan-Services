import axios from 'axios';
import React, { useContext, useState } from 'react'
import { context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const AdminUpdate = () => {

    const { user, isAuthenticated, adminisAuthenticated } = useContext(context);

    if (!adminisAuthenticated) {
        return <Navigate to={"/"} />
    }
    // if(isAuthenticated || !adminisAuthenticated){
    //     return <Navigate to={"/"}/>
    // }

    const [loanId, setloanId] = useState("");
    const [action, setaction] = useState("");
    const [loans, setloans] = useState([]);


    const clear = () => {
        setaction("");
        setloanId("");
    }

    const adminHandler = async (e) => {
        e.preventDefault();

        try {

            await axios.post(`${server}/users/admin/action`, {
                loanId,
                action
            }, {
                withCredentials: true,
            })

            toast.success("Request Updated");
            clear();

        } catch (error) {
            console.log(error);
            toast.error("error");
        }


    }

    const allLoans = async (e) => {

        const { data } = await axios.get(`${server}/loans/allLoans`)

        console.log(data.loans);

        // setloans.push(data.loans);

    //    data.loans.forEach((l) => (
    //     setloans(l)
    //    ))


    }

    // if(!adminisAuthenticated){
    //     return <Navigate to={"/"}/>
    // }


    return (
        <div className='admin_outer'>
            <div className="admin_inner">


                <form onSubmit={adminHandler} action="">

                    <div>
                        <h4>LoanId</h4>
                        <input type="text" value={loanId} onChange={(e) => setloanId(e.target.value)} placeholder='Enter LoanId..' />
                    </div>

                    <div>
                        <h4>Action</h4>
                        <input type="text" value={action} onChange={(e) => setaction(e.target.value)} placeholder='Enter action..' />
                    </div>

                    <button>Proceed</button>
                </form>

            </div>

            {/* <div className='allLoans'>
                <h2>All Loan Requests</h2>

               <button onClick={allLoans}>click</button>
            </div> */}
        </div>
    )
}

export default AdminUpdate