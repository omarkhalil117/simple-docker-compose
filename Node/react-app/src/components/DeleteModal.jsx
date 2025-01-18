import React from 'react';
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

const DeleteModal = ({ currentBook , booksMutation  }) => {
    
  const deleteBook = () => {
    axios.delete(`http://localhost:8080/api/books/${currentBook._id}`)
    .then((res) => { 
      booksMutation(currentBook._id,"delete"); 
      alert(res.data.message);
    } )
    .catch( (err)=> console.log(err))
  };

  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete Book: <span className="fw-bold">{currentBook?.name}</span>
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

          {/* Modal Body */}
          <div className="modal-body text-center">
            <h4 className="text-danger">Confirm Deletion</h4>
            <p className="text-muted">
              Are you sure you want to delete the book{" "}
              <strong>{currentBook?.name}</strong>? This action cannot be undone.
            </p>
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
              className="btn btn-danger"
              onClick={() => deleteBook()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
