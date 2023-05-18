import React from 'react'
import { Outlet } from 'react-router-dom'
import Navmenu from '../pages/sheare/navbar/Navmenu'

function Main() {
  return (
    <div>
        <Navmenu></Navmenu>
        <Outlet></Outlet>
    </div>
  )
}

export default Main