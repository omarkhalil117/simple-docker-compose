import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AddBookModal({ booksMutation }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  async function handleSubmit() {
    const output = await axios.post(`${import.meta.env.VITE_API_URL}/api/books`, { name , author });

    if(output.data.message === 'added successfully') {
      booksMutation(output.data.book);
      alert('added successfully');
      setAuthor('');
      setName('');
    }
  }

  return (
    <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Book </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>
          <div className="modal-body">

            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter Name' onChange={handleName} />

            <br />

            <label htmlFor="">Author: </label>
            <input type="text" placeholder='Enter Author' onChange={handleAuthor} />

            <br />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className='btn btn-success' onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBookModal
