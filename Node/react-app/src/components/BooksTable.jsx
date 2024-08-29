/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import BookRow from './BookRow'

function BooksTable({setMethod,books, showActions}) {
  
  const handleSetMethod = useCallback((book) => {
    setMethod(book);
  }, [setMethod]);
  console.log("inside table",books)
  return (
        <table className='mt-2'>
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            {showActions && <th>Actions</th>}
            {!showActions && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {books.map((book,index) => (
            <BookRow 
            key={book._id} 
            book={book} 
            index={index} 
            setMethod={handleSetMethod} 
            showActions={showActions} />
          ))}
        </tbody>
      </table>
  )
}

export default BooksTable