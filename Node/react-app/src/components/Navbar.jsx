import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const styleHandler = ({isActive}) => {
    return isActive ? 'text-danger' : 'text-primary'
  }

  return (
    <>
    <div className='align-items-center'>
    <NavLink to='/' className={styleHandler}> Home </NavLink>
    <NavLink to='/dashboard' className={styleHandler}> Dashboard </NavLink>
    <NavLink to='/test' className={styleHandler}> Test </NavLink>
    </div>
    </>
  )
}

export default Navbar