import React from 'react'

const Home = () => {
  return (
    <>
    <div className='img'>
      {/* <img src="https://images.unsplash.com/photo-1565373677928-90e963765eac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      {/* <img src="https://images.unsplash.com/photo-1496205856088-91b021308c54?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      {/* <img src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      {/* <img src="https://images.unsplash.com/photo-1568354900824-b26889441b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    </div>

    <div id="main">

      <div className="page1">
        <h1>Welcome To Our Bank</h1>
        <p>One of the most trusted bank in the world, with millions of users!</p>
      </div>

      <div className="page2">

        <div className='para'>
        <h1>About US</h1>
        <p>We are one pf the trusted bank in India . We care more about our customers
            We provide excellent services to the customers. We have so many 
            emerging and trusted employees who provide services to
            the customers. We provide one to one Customer Care to our
            customers and give them so many other facilities.
        </p>
        </div>

      </div>


      <div className="page3">

        <div className='loan'>
          <h1>Services</h1>

          <div className='loans-div'>

          <div className="loan1">
            <i className="ri-user-3-fill"></i>
            Personal Loan
          </div>
          <div className="loan1">
            <i className="ri-home-fill"></i>
            Home Loan
          </div>
          <div className="loan1">
            <i className="ri-car-fill"></i>
            Car Loan
          </div>
          <div className="loan1">
            <i className="ri-graduation-cap-fill"></i>
          Education Loan
          </div>

          </div>

        </div>

      </div>
    </div>


    </>
  )
}

export default Home