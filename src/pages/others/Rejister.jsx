import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { FaGoogle } from "react-icons/fa";
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import biman from '../../assets/biman.png'
import { AuthContext } from '../../authprovidr/Authprovider';
import Login from './Login';
import { updateProfile } from 'firebase/auth';


function Rejister() {
const {rejister, nameudater, auth}=useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()

const from = location.state?.from?.pathname || '/';


    const handelLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        
        rejister(email, password)
        .then(res=>{
            // console.log(res.user);
            updateProfile(res.user,{
                displayName:name, photoURL: photo
            })
            .then(ress=>{console.log(ress)})
            .catch(errr=>console.log(errr))
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
                                    <h2 className="card-title mb-3 text-light text-center">Rejister</h2>
                                    <Form onSubmit={handelLogin}>
                                        <Form.Group className="mb-2" >
                                            {/* <Form.Label>Your Name</Form.Label> */}
                                            <Form.Control name='name' type="text" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-2" >
                                            {/* <Form.Label>Email address</Form.Label> */}
                                            <Form.Control name='email' type="email" placeholder="email@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            {/* <Form.Label>Password</Form.Label> */}
                                            <Form.Control name='password' placeholder='Password' type="password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            {/* <Form.Label>Photo Url</Form.Label> */}
                                            <Form.Control name='photo' placeholder='Photo Url' type="url" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                        <div>
                                            <input className='w-100 btn-light btn' type="submit" value='Rejister' />
                                        </div>
                                        </Form.Group>
                                        
                                        <p>
                                            <Link to='/login' className='text-light '>I have a  <span className="fw-bold">account !</span></Link>
                                        </p>
                                        
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



export default Rejister