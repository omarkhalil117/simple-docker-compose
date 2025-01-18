import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

const UpdateModal = ({ currentBook , booksMutation }) => {
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
    axios.patch(`${import.meta.env.VITE_API_URL}/api/books/${book._id}`, { name: book.name, author: book.author })
      .then((res) => {
        alert(res.data.message);
        booksMutation(res.data.book._id,"update",res.data.book)
      })
      .catch((err) => console.log(err));
  };

return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title d-flex align-items-center" id="exampleModalLabel">
              Update Book: <span className="fw-bold ms-2">{currentBook?.name}</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <strong>Title</strong>:
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={book.name}
                  onChange={handleNameUpdate}
                  placeholder="Enter book title"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  <strong>Author</strong>:
                </label>
                <input
                  type="text"
                  id="author"
                  className="form-control"
                  value={book.author}
                  onChange={handleAuthorUpdate}
                  placeholder="Enter author name"
                  required
                />
              </div>
            </form>
          </div>

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
              className="btn btn-primary"
              onClick={updateBook}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
