import { useContext } from 'react'
import { SimpleContext } from '../contexts/SimpleContext'

function FirstComponent() {
    
    const { count , upCount , downCount } = useContext(SimpleContext);
  
   return (
    <>
        <h1 className='text-center'>Count is {count} in Comp (1)</h1>
        <button className="btn btn-primary" onClick={upCount}> + </button> 
        <button className="btn btn-danger" onClick={downCount}> - </button> 
    </>
  )
}

export default FirstComponent