import React, { useContext } from 'react'
import { AuthContext } from '../authprovidr/Authprovider'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

function PrivetRoute({ children }) {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <div className='text-center mt-5 dispay-5'><Spinner animation="grow" />;</div>
    }
    if (user) {
        return children
    }
   return <Navigate to='/login' state={{from : location}}  replace></Navigate>
}

export default PrivetRoute