import { useContext } from 'react'
import { SimpleContext } from '../contexts/SimpleContext'

function SecondComponent() {
    
    const { count , upCount , downCount } = useContext(SimpleContext);
  
   return (
    <>
        <h1 className='text-center'>Count is {count}  in Comp (2)</h1>
        <button className="btn btn-primary" onClick={upCount}> + </button> 
        <button className="btn btn-danger" onClick={downCount}> - </button> 
    </>
  )
}

export default SecondComponent