import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import biman from '../../assets/biman.png'
import { AuthContext } from '../../authprovidr/Authprovider';


function Login() {
const {googleLogin}=useContext(AuthContext)

const handeGoole =()=>{
    googleLogin()
        .then(res=>{})
        .catch(data=>{
            console.log(data);
        }
    )
}


    const handelLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.email.value
        const password = form.password.value
        console.log(name, password);
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
                                            <input className='w-100 btn-light' type="submit" />
                                        </div>
                                        </Form.Group>
                                        
                                        <p>
                                            <Link className='text-light '>I have a  <span className="fw-bold">account !</span></Link>
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