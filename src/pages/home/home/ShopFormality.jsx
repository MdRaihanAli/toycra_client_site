import React from 'react'
import { FaTruck , FaMobileAlt, FaShopify, FaCodiepie } from "react-icons/fa";
import './Home.css'

function ShopFormality() {
    return (
        <div className='container my-md-5 my-3 ' >
            <div className="row g-2">
                <div className="col-md-6 col-lg-3" data-aos="fade-up"  >
                    <div className='card text-center'>
                        <h4 className=' icon'> <FaTruck /> </h4>
                        <h4 className='card-title'> Free Shipping </h4>
                        <p>On everything</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-down">
                    <div className='card text-center'>
                        <h4 className=' icon'> <FaMobileAlt /> </h4>
                        <h4 className='card-title'> Give Us A Call </h4>
                        <p>Or Whatsapp on - 9638993429</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-up">
                    <div className='card text-center'>
                        <h4 className=' icon'> <FaShopify /> </h4>
                        <h4 className='card-title'> Bulk Inquiry</h4>
                        <p>Email - Toycra@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-down">
                    <div className='card text-center'>
                        <h4 className=' icon'> <FaCodiepie /> </h4>
                        <h4 className='card-title'> Toycra's Quality </h4>
                        <p>Every product is original,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopFormality