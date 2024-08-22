import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    <h1 className='text-danger text-center' >Error 404</h1>
    <Link to='/' className='text-center' >Home Page</Link>
    </>
  )
}

export default Error