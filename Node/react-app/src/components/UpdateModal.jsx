import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateModal = ({ currentBook }) => {
  const [book, setBook] = useState({ name: '', author: '' });

  useEffect(() => {
    setBook({ ...currentBook });
  }, [currentBook]);

  const handleNameUpdate = (e) => {
    const name = e.target.value;
    setBook((prevBook) => ({ ...prevBook, name }));
  };

  const handleAuthorUpdate = (e) => {
    const author = e.target.value;
    setBook((prevBook) => ({ ...prevBook, author }));
  };

  const updateBook = () => {
    axios.patch(`http://localhost:8080/api/books/${book._id}`, { name: book.name, author: book.author })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Book {currentBook.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>

          <div className="modal-body">
            <label htmlFor="title">Title:</label>
            <input type="text" value={book.name} onChange={handleNameUpdate} required />

            <br />

            <label htmlFor="author">Author:</label>
            <input type="text" value={book.author} onChange={handleAuthorUpdate} required />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={updateBook}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
