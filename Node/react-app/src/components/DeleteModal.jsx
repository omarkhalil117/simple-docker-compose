import React from 'react';

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Confirm Deletion</h4>
        <p>Are you sure you want to delete this book?</p>
        <button onClick={onDelete}>Yes, delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModal;
