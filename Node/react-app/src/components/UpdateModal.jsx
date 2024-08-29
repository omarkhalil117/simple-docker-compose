/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateModal = ({ currentBook , booksMutation }) => {
  const [book, setBook] = useState({ 
    title: '',
    author: '',
    country: '',
    language: '',
    year: 0,
    price: 0,
    stock: 0, });

  useEffect(() => {
    setBook({ ...currentBook });
  }, [currentBook]);

  const handleBookChange = (e) => {
    const { id, value } = e.target;
    setBook((prev) => ({
        ...prev,
        [id]: id === 'year' || id === 'price' || id === 'stock' ? Number(value) : value
    }));
}


  const updateBook = () => {
    axios.patch(`http://localhost:8080/api/books/${book._id}`, { ...book })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        booksMutation(res.data.book._id,"update",res.data.book)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Book {currentBook.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> X </button>
          </div>

          <div className="modal-body">

            <form onChange={handleBookChange}>

            <label htmlFor="title">Title:</label>
            <input id="title" type="text" value={book.title} 
            // onChange={handleNameUpdate} 
            required />

            <br />

            <label htmlFor="author">Author:</label>
            <input id="author" type="text" value={book.author} 
            // onChange={handleAuthorUpdate} 
            required />

            <br />

            <label htmlFor="country">Country:</label>
            <input id="country" type="text" value={book.country} 
            // onChange={handleCountryUpdate} 
            required />

            <br />

            <label htmlFor="language">Language:</label>
            <input id="language" type="text" value={book.language} 
            // onChange={handleLanguageUpdate} 
            required />

            <br />

            <label htmlFor="year">Year:</label>
            <input id="year" type="number" value={book.year} 
            // onChange={handleYearUpdate} 
            required />

            <br />

            <label htmlFor="price">Price:</label>
            <input id="price" type="number" value={book.price} 
            // onChange={handlePriceUpdate} 
            required />

            <br />

            <label htmlFor="stock">Stock:</label>
            <input id="stock" type="number" value={book.stock} 
            // onChange={handleStockUpdate} 
            required />            
            
            </form>
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
