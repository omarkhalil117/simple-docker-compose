import axios from "axios"
import { useEffect, useState } from "react"
import BooksTable from "../components/BooksTable";

function AdvSearch() {
  const [books, setBooks] = useState([]);
  const [range , setRange] = useState({
    min:0,
    max:0,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/books")
    .then( (res) => setBooks(res.data.data) )
    .catch( (err) => console.log(err))
    },[]);

    const handleSearch = () => {
      axios.post(`http://localhost:8080/api/search/advanced`, {range : `${range.min},${range.max}` } )
      .then( (res) => {
        setBooks(res.data.data.flat())
        console.log(books)
       })
      .catch( (err) => console.log(err))
  };

  const handleMin = (e) => {
    setRange((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(range)
  };

  const handleMax = (e) => {
    setRange((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(range)
  };

    return (
        <>
        <h1 className="text-center">Search by range</h1>
        <div className="d-flex justify-content-around">

        <label htmlFor="min">Minimum</label>
        <input type="number" name="min" id="min" placeholder="0" onChange={handleMin} />

        <label htmlFor="max">Maximum</label>
        <input type="number" name="max" id="max" placeholder="0" onChange={handleMax}/>

        <button onClick={handleSearch}>Search</button>
        </div>

        {books && books.length > 0 ? 
        <BooksTable books={books} showActions={false} />  
        : <h2>No results found</h2>}
        </>
  )
}

export default AdvSearch;