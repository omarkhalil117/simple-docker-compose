import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";
import { getDataFromApi } from "../store/slices/counterSlice";

function FirstComponent() {
    
    const { value , apiData , isLoading } = useSelector(state => state.counter) 

    const dispatch = useDispatch();

   return (
    <>
        <h1 className='text-center'>Count is {value} in Comp (1)</h1>
        <button className="btn btn-primary" onClick={() => dispatch(increment())}> + </button> 
        <button className="btn btn-danger" onClick={() => dispatch(decrement())}> - </button> 

        {isLoading ? <h1>Loading...</h1> : <h5>Data : {apiData || "not assigned"}</h5>}

        <button className="btn btn-primary" onClick={() => dispatch(getDataFromApi())} >get data</button>
    </>
  )
}

export default FirstComponent