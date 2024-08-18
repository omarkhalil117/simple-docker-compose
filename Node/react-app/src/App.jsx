import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Table from './components/Table';
import axios from 'axios';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [books , setBooks] = useState([]);

  useEffect(()=> {
    axios.get(`http://localhost:8080/api/books`)
    .then((res) =>  setBooks(res.data.data))
    .catch((err) => console.log(err));
  },[]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  async function handleSubmit() {
    const output = await axios.post(`http://localhost:8080/api/books`, { name , author });
    console.log(output.data.message);

    if(output.data.message === 'added successfully') {
      alert('added successfully');
      books.push({name,author})
      setBooks(books);
      setAuthor('');
      setName('');
    }
  }

  return (
    <>
    <h1> Add book</h1>

    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#addModal">Add Book</button>

    <Dashboard/>


    {/* add book */}
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Book </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>
          <div class="modal-body">

            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter Name' onChange={handleName} />

            <br />

            <label htmlFor="">Author: </label>
            <input type="text" placeholder='Enter Author' onChange={handleAuthor} />

            <br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className='btn btn-success' onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App




      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}