/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import BookRow from './BookRow'

function BooksTable({setMethod,books}) {
  
  const handleSetMethod = useCallback((book) => {
    setMethod(book);
  }, [setMethod]);

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
            <BookRow key={book._id} book={book} index={index} setMethod={handleSetMethod} />
          ))}
        </tbody>
      </table>
  )
}

export default BooksTable