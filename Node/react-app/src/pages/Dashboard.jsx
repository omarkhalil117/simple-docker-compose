import React, { useEffect, useState } from 'react';
import UpdateModal from '../components/UpdateModal';
import DeleteModal from '../components/DeleteModal';
import axios from 'axios';
import BooksTable from '../components/BooksTable';
import AddBookModal from '../components/AddBookModal';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(()=> {
    axios.get(`http://localhost:8080/api/books`)
    .then((res) =>  setBooks(res.data.data))
    .catch((err) => console.log(err));
    console.log(books);
  },[]);

  const setBook = (book) => {
    setCurrentBook(book);
    console.log(book);
  }

  return (
    <>
    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#addModal">Add Book</button>

    <AddBookModal/>

    <div className='mt-5'>
      <h2>Admin Dashboard</h2>

      <BooksTable books={books} setMethod={setBook}/> 
      
      <UpdateModal currentBook={currentBook} />
      <DeleteModal currentBook={currentBook}/>
    </div>
    </>
  );
};

export default Dashboard;
