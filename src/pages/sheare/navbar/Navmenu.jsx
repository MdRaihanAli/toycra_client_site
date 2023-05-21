import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../../assets/logo.webp'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../authprovidr/Authprovider';

function Navmenu() {
  const { user, logout } = useContext(AuthContext)

  // console.log(user);

  const handelLogot = () => {
    logout().then(res => { }).then(data => { console.log(data) })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img width='120' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='test' to='/'> <span className="text-bold">Home</span></NavLink>
            {
              user ? <>
                <NavLink className='test' to='/addtoy'>Add A Toy</NavLink>
                <NavLink className='test' to='/mytoy'>My Toy</NavLink>
              </>:""
            }

            <NavLink className='test' to='/alltoy'>All Toy</NavLink>
            <NavLink className='test' to='/blogs'>Blogs</NavLink>




          </Nav>
          <div className="d-flex">
            {
              user ? <div title={user?.displayName} className='mx-2 rounded'>
              <img className='rounded' width='40' height='40' src={user?.photoURL} alt="" />
            </div>:""
            }
            {
              user ? <button onClick={handelLogot} className='btn bg_tomato'>Log Out</button> : <NavLink className='nav-link' to='/login'><button className='btn bg_tomato'>Login</button></NavLink>
            }



          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navmenu