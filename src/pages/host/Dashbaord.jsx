import React from 'react'
import { Outlet } from 'react-router-dom'
const Dashbaord = () => {
  return (
    <div>
      <div>Dashbaord</div>
      <Outlet />
    </div>
  )
}

export default Dashbaord