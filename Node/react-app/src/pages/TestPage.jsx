import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

function TestPage() {
  
  const getBooks = async () => {
    const res = await axios.get("http://localhost:8080/api/books")
    return res.data;    
  } 

  const { data, error, isLoading } = useQuery({queryKey:['books'],queryFn:getBooks});

  return (
    <>
    {isLoading && <p>Loading...</p>}
    
    {error && <p>Error occured</p>}

    <ul>
    {data?.data.map( (el,index)=> <p key={index+1}>{index+1} : {el.name}</p>)}
    </ul>

    </>
  )
}

export default TestPage