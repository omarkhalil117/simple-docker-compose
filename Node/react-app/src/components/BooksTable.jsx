import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

function BooksTable({ setMethod, books }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📚 Books Table</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>
                  <Link to={`/books/${book._id}`} className="text-decoration-none">
                    {index + 1}
                  </Link>
                </td>
                <td>{book.author}</td>
                <td>{book.name}</td>
                <td>
                  <button
                    className="btn btn-info mx-2"
                    data-bs-toggle="modal"
                    onClick={() => setMethod(book)}
                    data-bs-target="#exampleModal"
                  >
                    <FaEdit className="me-1" />
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    data-bs-toggle="modal"
                    onClick={() => setMethod(book)}
                    data-bs-target="#deleteModal"
                  >
                    <FaTrash className="me-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BooksTable;

