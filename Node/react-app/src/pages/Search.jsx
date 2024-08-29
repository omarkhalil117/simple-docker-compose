import axios from "axios"
import { useEffect, useState } from "react"
import BooksTable from "../components/BooksTable";
import { Link } from "react-router-dom";

function Search({ advanced }) {
  const [books, setBooks] = useState([]);
  const [searchTxt , setSearchTxt] = useState('');
  const [filter , setFilter] = useState('title');

  useEffect(() => {
    axios.get("http://localhost:8080/api/books")
    .then( (res) => setBooks(res.data.data) )
    .catch( (err) => console.log(err))
    },[])

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      axios.get(`http://localhost:8080/api/search?${filter}=${searchTxt}`)
      .then( (res) => {
        setBooks(res.data.books)
        console.log(books)
       })
      .catch( (err) => console.log(err))
    }, 500);


    return () => clearTimeout(debounceTimer);
  },[searchTxt,filter])

  const handleSearchText = (e) => {
    console.log(e.target.value)
    setSearchTxt(e.target.value);
  }

  const handleSetFilter = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

    return (
        <>
        <div className="d-flex justify-content-around">

        {/* <input style={{backgroundColor: "white"}} type="search" name="book-search" id="book-search" onChange={handleSearchText} /> */}
        
        <div className="input-group flex-nowrap">
            <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping" onChange={handleSearchText}/>
        </div>

        <select className="form-select" aria-label="Default select example" onChange={handleSetFilter} >
        <option value="author">Author</option>
        <option value="title">Title</option>
        </select>

        </div>

        {books && books.length > 0 ? 
            books.map( (book,index) => {
                return <>
                <Link to={`/books/${book._id}`}>{index}</Link>
                <p>{book.title}</p>
                <p>{book.author}</p>
                </>
            })
        : <h2>No results found</h2>}
        </>
  )
}

export default Search