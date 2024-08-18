import React from 'react'

function Table({rows}) {
    console.log(rows)
  return (
     <div className="container mt-4">
      <h2>Book List</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.author}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
  );
}

export default Table

//       <div className="mb-4">
        {/* <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={newRow.author}
            onChange={handleInputChange}
            placeholder="Enter author"
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newRow.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
        </div> */}
        {/* <button className="btn btn-primary mt-2" onClick={addRow}>
          Add Book
        </button> */}
    //   </div>