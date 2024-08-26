import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";

function SecondComponent() {
    
  const count = useSelector(state => state.counter.value) 
  const dispatch = useDispatch();

  
   return (
    <>
        <h1 className='text-center'>Count is {count} in Comp (2)</h1>
        <button className="btn btn-primary" onClick={() => dispatch(increment())}> + </button> 
        <button className="btn btn-danger" onClick={()=> dispatch(decrement())}> - </button> 
    </>
  )
}

export default SecondComponent