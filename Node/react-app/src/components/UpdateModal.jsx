import React, { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ currentBook }) => {

  const updateBook = () => {
    axios.patch(`http://localhost:8080/api/books/${currentBook._id}`, { name , author })
    .then( (res) => { 
      console.log(res.data) 
      alert(res.data.message);    
    } )
    .catch( (err) => console.log(err) )
  };
  const [name,setName] = useState(currentBook?.name);
  const [author,setAuthor] = useState(currentBook?.author);

  const handleNameUpdate = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }
  const handleAuthorUpdate = (e) => {
    console.log(e.target.value);
    setAuthor(e.target.value);
  }
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Book {currentBook?.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>
          <div className="modal-body">

            <label htmlFor="title"> Title: </label>
            <input type="text" id="title" value={name} onChange={handleNameUpdate} required />

            <br />

            <label htmlFor="title"> Author: </label>
            <input type="text" id="author" value={author} onChange={handleAuthorUpdate} required />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => updateBook()}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
