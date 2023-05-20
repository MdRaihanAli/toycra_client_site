import React from 'react'
import { Outlet } from 'react-router-dom'
import Navmenu from '../pages/sheare/navbar/Navmenu'
import Footer from '../pages/sheare/Footer'

function Main() {
  return (
    <div>
        <Navmenu></Navmenu>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main