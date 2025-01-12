import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookDetails() {
    const [book, setBook] = useState('');
    const params = useParams();

    const bookId = params.id;

    useEffect(()=> {
        axios.get(`${import.meta.env.VITE_API_URL}/api/books/${bookId}`)
        .then((res) => setBook(res.data.book))
        .catch((err) => console.log(err));
    },[]);

  return (
    <>
        <h4>Book Name: <span className='text-primary'>{book.name}</span> </h4>    
        <h4>Book Autor: <span className='text-primary'>{book.author}</span> </h4>    
        <Link to='/dashboard' > Back </Link>
    </>
  )
}

export default BookDetails
