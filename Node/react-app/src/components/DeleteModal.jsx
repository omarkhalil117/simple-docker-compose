import React from 'react';
import axios from 'axios';

const DeleteModal = ({ currentBook , booksMutation  }) => {
    
  const deleteBook = () => {
    axios.delete(`http://localhost:8080/api/books/${currentBook._id}`)
    .then((res) => { 
      console.log(res.data);
      booksMutation(currentBook._id,"delete"); 
      alert(res.data.message);
    } )
    .catch( (err)=> console.log(err))
  };

  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Book {currentBook?.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>
          
          <div className="modal-body">
          <h4>Confirm Deletion</h4>
          <p>Are you sure you want to delete this book?</p>
          </div>
            
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => deleteBook()}>Delete</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DeleteModal;
