import React from 'react'
import { Link } from 'react-router-dom'

function BooksTable({setMethod,books}) {
  return (
        <table className='mt-2'>
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book,index) => (
            <tr key={book._id}>
              <td className='mx-5'><Link to={`/books/${book._id}`} > {index + 1} </Link></td>
              <td className='mx-5' >{book.author}</td>
              <td className='mx-5'>{book.name}</td>
              <td>
                <button className='mx-3 btn btn-info' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#exampleModal">Edit</button>
                <button className='mx-3 btn btn-danger' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#deleteModal">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default BooksTable