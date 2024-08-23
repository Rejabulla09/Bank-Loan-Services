import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import toast from 'react-hot-toast';
import axios from 'axios';

const ApplyForLoan = () => {

  const{isAuthenticated,user} = useContext(context);


    if(!isAuthenticated){
          return <div className='authentication'>
        LogIn First
      </div>
    }

  const[loan_name, setLoanName] = useState("");
  const[user_name, setUserName] = useState("");
  const[D_O_B, setDOB] = useState("");
  const[address, setaddress] = useState("");
  const[phn, setPhn] = useState(null);
  const[requested_amount, setReqAmount] = useState(null);
  const[loan_period, setLoanPeriod] = useState(null);

  const clear = () =>{
    setLoanName("");
    setUserName("");
    setDOB("");
    setaddress("");
    setPhn("");
    setReqAmount("");
    setLoanPeriod("");
  }

  const applyHandler = async(e) =>{
    e.preventDefault();

   try {

    axios.post(`${server}/Homeloans/applyHomeLoan`,{
      loan_name,
      user_name,
      D_O_B,
      address,
      phn,
      requested_amount,
      loan_period
    },{
      withCredentials : true,
    })

    // console.log(data);
    // setamount(null);

    toast.success("Loan request Send");
    clear();
    
   } catch (error) {
    
    console.log(error);
    toast.error("error");
    clear();
   }


    // if(!isAuthenticated){
    //   return toast.error("Login First")
    // }
    // if(amount > user.balance ){
    //    return toast.error("Loan rejected")
    // }
    // else{
    //   return toast.success("loan accepted");
    // }
  }

  return (
    <div className='applyforloan'>
      <div className='apply_inner'>
        <h1>Apply For Loan</h1>
        <form onSubmit={applyHandler} action="">

        <div>
          <label htmlFor="">Loan Name</label>
          <input type="text" value={loan_name} onChange={(e) => setLoanName(e.target.value)} placeholder='Enter Loan name Here..' />
        </div> 
        <div>
          <label htmlFor="">User Name</label>
          <input type="text" value={user_name} onChange={(e) => setUserName(e.target.value)} placeholder='Enter Your name Here..' />
        </div> 
        <div>
          <label htmlFor="">Date Of Birth</label>
          <input type="text" value={D_O_B} onChange={(e) => setDOB(e.target.value)} placeholder='Enter Your date of birth Here..' />
        </div> 
        <div>
          <label htmlFor=""> Address</label>
          <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder='Enter Your address Here..' />
        </div> 
        <div>
          <label htmlFor=""> Phone Number</label>
          <input type="number" value={phn} onChange={(e) => setPhn(e.target.value)} placeholder='Enter Your Number Here..' />
        </div> 
        <div>
          <label htmlFor="">Loan Amount</label>
          <input type="number" value={requested_amount} onChange={(e) => setReqAmount(e.target.value)} placeholder='Enter Loan amount Here..' />
        </div> 
        <div>
          <label htmlFor="">Loan Period</label>
          <input type="number" value={loan_period} onChange={(e) => setLoanPeriod(e.target.value)} placeholder='Enter Loan period Here..' />
        </div> 

        <button type='submit'>apply</button>

        </form>
      </div>
    </div>
  )
}

export default ApplyForLoan