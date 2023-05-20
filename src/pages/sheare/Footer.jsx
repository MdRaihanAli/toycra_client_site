import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='my-5'>
        <div className="container">
            <div className="row g-md-4">
                <div className="col-md-6 lg-3">
                    <h3 className='text-bold'>Reach Us</h3>
                    <hr />
                    <div><Link className='nav-link'>About Us</Link></div>
                    <div><Link className='nav-link'>Contact Us</Link></div>
                    <div><Link className='nav-link'>Terms of Service</Link></div>
                    <div><Link className='nav-link'>Refund policy</Link></div>
                </div>
                <div className="col-md-6 lg-3">
                    <h3 className='text-bold'>Store Policies</h3>
                    <hr />
                    <div><Link className='nav-link'>Shipping & Returns Policy</Link></div>
                    <div><Link className='nav-link'>Privacy Policy</Link></div>
                    <div><Link className='nav-link'>Terms of Service</Link></div>
                    <div><Link className='nav-link'>Refund policy</Link></div>
                </div>
                <div className="col-md-6 lg-3">
                    <h3 className='text-bold'>Subscribe</h3>
                    <hr />
                    <div><p className='nav-link'>Get Exclusive Deals & More!</p></div>
                    <div> <input className='form-control w-75' placeholder='Enter Email' type="text" /> </div>
                    <div> <button className='btn btn-light mt-3'>Send Us</button> </div>

                    
                </div>
                <div className="col-md-6 lg-3"></div>
                <div className="col-md-6 lg-3"></div>
                <div className="col-md-6 lg-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Footer