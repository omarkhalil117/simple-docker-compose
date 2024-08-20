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

  const setBook = (book) => {
    setCurrentBook(book);
  }

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
                <button className='mx-3 btn btn-info' data-bs-toggle='modal' onClick={()=> setBook(book)} data-bs-target="#exampleModal">Edit</button>
                <button className='mx-3 btn btn-danger' data-bs-toggle='modal' onClick={()=> setBook(book)} data-bs-target="#deleteModal">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <UpdateModal currentBook={currentBook} />
      <DeleteModal currentBook={currentBook}/>
    </div>
  );
};

export default Dashboard;
