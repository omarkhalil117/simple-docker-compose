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

  useEffect(()=> {
    console.log(books)
  },[books])

  const setBook = (book) => {
    setCurrentBook(book);
    console.log(book);
  }

  const updateBook = (id,method,updated) => {
    if(method === "update")
    {
      let book = books.find((el)=> el._id === id);
      book.name = updated.name;
      book.author = updated.author;
      console.log(`book: ${JSON.stringify(book)} updated: ${JSON.stringify(books)}`);
      setBooks([...books]);
      return 
    }

    if(method === "delete" ) 
    {
      let updatedBooks = books.filter((el) => el._id !== id)
      setBooks([...updatedBooks]);
      return 
    }
  }

  const pushBook = (book) => {
    books.push(book)
    console.log(book);
    setBooks([...books]);
  }

  return (
    <>
    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#addModal">Add Book</button>

    <AddBookModal booksMutation={pushBook}/>

    <div className='mt-5'>
      <h2>Admin Dashboard</h2>

      <BooksTable books={books} setMethod={setBook}/> 
      
      <UpdateModal currentBook={currentBook} booksMutation={updateBook} />
      <DeleteModal currentBook={currentBook} booksMutation={updateBook}/>
    </div>
    </>
  );
};

export default Dashboard;
