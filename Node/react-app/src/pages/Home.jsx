import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1 className="text-center mt-5" >Hi !!</h1>
    
    <Link to='/dashboard'>Dashboard</Link>
    </>
  )
}

export default Home