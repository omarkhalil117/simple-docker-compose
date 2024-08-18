import React, { useState } from 'react';

const UpdateModal = ({ book, onClose, onUpdate }) => {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedBook);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Update Book</h4>
        <form onSubmit={handleSubmit}>

          <input type="text" name="author" value={updatedBook.author} onChange={handleInputChange}/>
          
          <input type="text" name="title" value={updatedBook.title} onChange={handleInputChange}/>
          
          <button type="submit">Update</button>

          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
