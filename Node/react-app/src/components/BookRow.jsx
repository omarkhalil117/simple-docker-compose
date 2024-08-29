/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import React from 'react'

const BookRow = ({ book , index , setMethod , showActions}) => {
  return (
    <tr>
        <td className='mx-5'><Link to={`/books/${book._id}`} > {index + 1} </Link></td>
        <td className='mx-5' >{book.author}</td>
        <td className='mx-5'>{book.title}</td>
        {!showActions && <td className='mx-5'>{book.price}</td>}
    
        <td>
          {
            showActions &&
            <>
            <button className='mx-3 btn btn-info' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#exampleModal">Edit</button>
            <button className='mx-3 btn btn-danger' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#deleteModal">Delete</button>
            </> 
          }
        </td>
    </tr>
  )
};

export default BookRow