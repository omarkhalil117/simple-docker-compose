import { NavLink } from 'react-router-dom'

function Navbar() {

  const styleHandler = ({isActive}) => {
    return isActive ? 'text-danger' : 'text-primary'
  }

  return (
    <>
    <div className='align-items-center mb-5 d-flex justify-content-between'>
    <NavLink to='/' className={styleHandler}> Home </NavLink>
    <NavLink to='/dashboard' className={styleHandler}> Dashboard </NavLink>
    <NavLink to='/test' className={styleHandler}> Test </NavLink>
    <NavLink to='/form' className={styleHandler}> Form </NavLink>
    <NavLink to='/context' className={styleHandler}> Redux </NavLink>
    <NavLink to='/search' className={styleHandler}> Search </NavLink>
    <NavLink to='/adv-search' className={styleHandler}> Advanced Search </NavLink>
    </div>
    </>
  )
}

export default Navbar