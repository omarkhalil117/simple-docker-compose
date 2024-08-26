import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";
function FirstComponent() {
    
    const count = useSelector(state => state.counter.value) 
    const dispatch = useDispatch();
    
   return (
    <>
        <h1 className='text-center'>Count is {count} in Comp (1)</h1>
        <button className="btn btn-primary" onClick={() => dispatch(increment())}> + </button> 
        <button className="btn btn-danger" onClick={() => dispatch(decrement())}> - </button> 
    </>
  )
}

export default FirstComponent