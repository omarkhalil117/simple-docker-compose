import { useCallback, useEffect, useState } from 'react';
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
  },[]);

  useEffect(()=> {
    console.log("hi")
  },[books])

  const setBook = useCallback((book) => {
    setCurrentBook(book);
    console.log(book);
  },[])

  const updateBook = (id,method,updated) => {
    if(method === "update")
    {
      let book = books.find((el)=> el._id === id);
      
      Object.assign(book,updated);

      console.log(1111,books)
      // book.author = updated.author;
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

      <BooksTable books={books} setMethod={setBook} showActions={true}/> 
      
      <UpdateModal currentBook={currentBook} booksMutation={updateBook} />
      <DeleteModal currentBook={currentBook} booksMutation={updateBook}/>
    </div>
    </>
  );
};

export default Dashboard;
