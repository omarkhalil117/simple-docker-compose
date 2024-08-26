import { NavLink } from 'react-router-dom'

function Navbar() {

  const styleHandler = ({isActive}) => {
    return isActive ? 'text-danger' : 'text-primary'
  }

  return (
    <>
    <div className='align-items-center mb-5'>
    <NavLink to='/' className={styleHandler}> Home </NavLink>
    <NavLink to='/dashboard' className={styleHandler}> Dashboard </NavLink>
    <NavLink to='/test' className={styleHandler}> Test </NavLink>
    <NavLink to='/form' className={styleHandler}> Form </NavLink>
    <NavLink to='/context' className={styleHandler}> Redux </NavLink>
    </div>
    </>
  )
}

export default Navbar