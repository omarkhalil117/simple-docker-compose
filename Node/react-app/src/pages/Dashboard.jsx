import React, { useEffect, useState } from 'react';
import UpdateModal from '../components/UpdateModal';
import DeleteModal from '../components/DeleteModal';
import axios from 'axios';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(()=> {
    axios.get(`http://localhost:8080/api/books`)
    .then((res) =>  setBooks(res.data.data))
    .catch((err) => console.log(err));
    console.log(books);
  },[]);

  const handleEdit = (book) => {
    setCurrentBook(book);
    setName(currentBook.name);
    setAuthor(currentBook.author);
  };

  const deleteBook = () => {
    axios.delete(`http://localhost:8080/api/books/${currentBook._id}`)
    .then((res) => { 
      console.log(res.data); 
      books.filter((el) => el._id !== currentBook._id );
      setBooks(books);
      alert(res.data.message);
    } )
    .catch( (err)=> console.log(err))
  };

  return (
    <div className='mt-5'>
      <h2>Admin Dashboard</h2>
      <table className='mt-2'>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className='mx-5' >{book.author}</td>
              <td className='mx-5'>{book.name}</td>
              <td>
                <button className='mx-3 btn btn-info' onClick={() => handleEdit(book)} data-bs-toggle='modal' data-bs-target="#exampleModal">Edit</button>
                <button className='mx-3 btn btn-danger' onClick={() => handleDelete(book)} data-bs-toggle='modal' data-bs-target="#deleteModal">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <UpdateModal currentBook={currentBook} />

    {/* deleteModal */}
    <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Book {currentBook?.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>
          
          <div className="modal-body">
          <h4>Confirm Deletion</h4>
          <p>Are you sure you want to delete this book?</p>
          </div>
            
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => deleteBook()}>Delete</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Dashboard;
