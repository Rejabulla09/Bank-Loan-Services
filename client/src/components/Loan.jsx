import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../main'

const Loan = () => {

    const{isAuthenticated} = useContext(context);

    if(!isAuthenticated){
          return <div className='authentication'>
        LogIn First
      </div>
    }

    return (
        
        <div className='outer_loan'>
            <div className='inner_loan'>

                <div className='loan2'>
                    <i className="ri-car-fill"></i>
                    <Link to={'/apply'}>Car loan</Link>
                </div>

                <div className='loan2'>
                    <i className="ri-home-fill"></i>
                    <Link to={'/apply'}>Home loan</Link>
                </div>

                <div className='loan2'>
                    <i className="ri-graduation-cap-fill"></i>
                    <Link to={'/apply'}>Education loan</Link>
                </div>
                
                <div className='loan2'>
                    <i className="ri-user-3-fill"></i>
                    <Link to={'/apply'}>Personal loan</Link>
                </div>

            </div>
        </div>
    )
}

export default Loan