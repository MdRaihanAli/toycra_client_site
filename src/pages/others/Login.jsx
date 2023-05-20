import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import biman from '../../assets/biman.png'
import { AuthContext } from '../../authprovidr/Authprovider';


function Login() {
    const [errorM, setError]=useState('')
const {googleLogin, login}=useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()

const from = location.state?.from?.pathname || '/'

const handeGoole =()=>{
    
    googleLogin()
        .then(res=>{
            navigate(from, {repls: true})
        })
        .catch(err=>{
            console.log(err);
        }
    )
}


    const handelLogin =(event)=>{
        event.preventDefault()
        
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        if (password.length<6) {
            setError('passwort miniman 6 charecter')
        }
        if (email=="") {
            setError('please inpun email')
        }


        login(email, password)
        .then(res=>{
            navigate(from, {repls: true})
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className='bg_image' >
            <div className="bg_color">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="login_contaienr">
                            <div className="row">
                                <div className="col-6">
                                    <h2 className="card-title text-light text-center">Login</h2>
                                    <span className='text-danger'>{errorM}</span>
                                    <Form onSubmit={handelLogin}>
                                        <Form.Group className="mb-2" >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control name='email' type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name='password' placeholder='Password' type="password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                        <div>
                                            <input className='w-100 btn btn-light' type="submit" value='Log In' />
                                        </div>
                                        </Form.Group>
                                        
                                        <p>
                                            <Link to='/rejister' className='text-light '>Are You New <span className="fw-bold">Click Here!</span></Link>
                                        </p>
                                        <div>
                                            <button onClick={handeGoole} className='btn btn-light'> <FaGoogle /> Log In</button>
                                            
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <img className='w-100' src={biman} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login