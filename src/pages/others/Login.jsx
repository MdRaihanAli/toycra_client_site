import React from 'react'
import Form from 'react-bootstrap/Form'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='bg_image' >
            <div className="bg_color">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="login_contaienr">
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="card-title text-light text-center">Login</h3>
                                    <Form>
                                        <Form.Group className="mb-2" >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                        <div>
                                            <input className='w-100 btn-light' type="submit" />
                                        </div>
                                        </Form.Group>
                                        
                                        <p>
                                            <Link className='text-light '>I have a  <span className="fw-bold">account !</span></Link>
                                        </p>
                                        <div>
                                            <button className='btn btn-light'> <FaGoogle /> Log In</button>
                                            
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-6"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login