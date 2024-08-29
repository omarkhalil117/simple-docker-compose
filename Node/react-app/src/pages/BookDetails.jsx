import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookDetails() {
    const [book, setBook] = useState('');
    const params = useParams();

    const bookId = params.id;

    useEffect(()=> {
        axios.get(`http://localhost:8080/api/books/${bookId}`)
        .then((res) => setBook(res.data.book))
        .catch((err) => console.log(err));
    },[]);

  return (
    <>
        <h4>Name: <span className='text-primary'>{book.title}</span> </h4>    
        <h4>Author: <span className='text-primary'>{book.author}</span> </h4>    
        <h4>Country: <span className='text-primary'>{book.country}</span> </h4>    
        <h4>Language: <span className='text-primary'>{book.language}</span> </h4>    
        <h4>Pages: <span className='text-primary'>{book.pages}</span> </h4>    
        <h4>Price: <span className='text-primary'>{book.price}</span> </h4>    
        <Link to='/dashboard' > Back </Link>
    </>
  )
}

export default BookDetails