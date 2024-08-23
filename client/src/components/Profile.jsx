import React, { useContext, useState } from 'react'
import { context, server } from '../main'
import Loader from './Loader';
import toast from 'react-hot-toast';
import axios from 'axios';

const Profile = () => {

  const { isAuthenticated, loading, user, adminisAuthenticated, setadminisAuthenticated } = useContext(context);

  // console.log(user.balance);
  // console.log(user.role);


  if (!isAuthenticated && !adminisAuthenticated) {
    return <div className='authentication'>
      LogIn First
    </div>
  }

  const [money, setmoney] = useState({ money: null })
  const [debit, setdebit] = useState({ debit: null })
  const [email, setemail] = useState()
  const [transfer, setTransfer] = useState({ transfer: null })




  const addhandler = async (e) => {
    e.preventDefault();
    // console.log(Number(add));

    //  const money2 = Number(money);
    // console.log(typeof(money2));

    await axios.put(`${server}/users/credit`, {
      money
    }, {
      withCredentials: true,
    })
    setmoney("")
    toast.success("credited");
  }

  const debithandler = async (e) => {
    e.preventDefault();


    // console.log("ff");
    if (debit <= user.balance) {
      await axios.put(`${server}/users/debit`, {
        debit
      }, {
        withCredentials: true,
      })
      setdebit("")
      toast.success("debited");
    }
    else {
      return toast.error("Don't have that much money!")
    }

  }

  const transferHandler = async (e) => {
    e.preventDefault();

   const { data } = await axios.post(`${server}/users/transfer`, {
      email: email,
      money: transfer,
    }, {
      withCredentials: true,
    })
    setemail("");
    setTransfer("")

    toast.success(data.message);
  }

  // console.log(user);
  return (
    loading ? <Loader /> : (
      <>
        <div className="profile">
          <div className='border'>
            <div className='first'>
              <div className="name_balance">
                <div className="name">
                  {`Account Holder -> ${user.name}`}
                </div>

                <div className="balance">
                  {`Total Balance -> ${user.balance}`}
                </div>

                <div className="id">
                  {`Account no. -> ${user._id}`}
                </div>
              </div>


              <div className="allform">


                <div className='add_debit'>
                  <form onSubmit={addhandler} action="">

                    <div className="add">
                      {/* <h4>Add money</h4> */}
                      <input type="number" value={money} onChange={(e) => setmoney(e.target.value)} placeholder='Enter amount here...' />
                      <button>Add </button>

                    </div>

                  </form>



                  <form onSubmit={debithandler} action="">

                    <div className="debit">
                      {/* <h4>   money</h4> */}
                      <input type="number" value={debit} onChange={(e) => setdebit(e.target.value)} placeholder='Enter amount here...' />
                      <button>Withdraw </button>
                    </div>

                  </form>
                </div>


                <form className='transfer_to' onSubmit={transferHandler} action="">

                  <div className="debit">
                    {/* <h4>Withdraw money</h4> */}
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter email here...' />
                  </div>

                  <div className="debit">
                    {/* <h4>Withdraw money</h4> */}
                    <input type="number" value={transfer} onChange={(e) => setTransfer(e.target.value)} placeholder='Enter amount here...' />
                  </div>

                  <button>Transfer </button>


                </form>

              </div>


            </div>

            <div className='trans_hist'>
              <div>
                <h3>Transaction History</h3>
              </div>
              <div className='container'>
                {
                  // console.log(`${user.transfer_Hist}`)

                  user.transfer_Hist.map((item, index) => (
                    <p key={index}>{`${index + 1}) ${item}`}</p>
                  ))
                }
              </div>
            </div>

          </div>




        </div>



      </>
    )
  )
}

export default Profile