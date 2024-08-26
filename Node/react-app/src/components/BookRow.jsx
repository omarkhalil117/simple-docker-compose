/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const BookRow = ({ book , index , setMethod}) => {
  return (
    <tr>
        <td className='mx-5'><Link to={`/books/${book._id}`} > {index + 1} </Link></td>
        <td className='mx-5' >{book.author}</td>
        <td className='mx-5'>{book.name}</td>
    
        <td>
            <button className='mx-3 btn btn-info' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#exampleModal">Edit</button>
            <button className='mx-3 btn btn-danger' data-bs-toggle='modal' onClick={()=> setMethod(book)} data-bs-target="#deleteModal">Delete</button>
        </td>
    </tr>
  )
}

export default BookRow