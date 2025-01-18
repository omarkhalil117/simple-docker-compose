import React from 'react'
import { Link } from "react-router-dom";
import { FaBook, FaUser, FaListOl } from "react-icons/fa";

function Table({ rows }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📚 Book List</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>
                <FaListOl /> No.
              </th>
              <th>
                <FaUser /> Author
              </th>
              <th>
                <FaBook /> Title
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "table-light" : "table-secondary"}>
                <td>
                  <Link to={`/books/${row.id}`} className="text-decoration-none">
                    {index + 1}
                  </Link>
                </td>
                <td>{row.author}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table
