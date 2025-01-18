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
    <div
      className="modal fade"
      id="addModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title fs-5" id="exampleModalLabel">
              Add Book
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <form>
              {/* Book Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <strong>Name</strong>:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Book Name"
                  onChange={handleName}
                  required
                />
              </div>

              {/* Author Input */}
              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  <strong>Author</strong>:
                </label>
                <input
                  type="text"
                  id="author"
                  className="form-control"
                  placeholder="Enter Author Name"
                  onChange={handleAuthor}
                  required
                />
              </div>
            </form>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBookModal
