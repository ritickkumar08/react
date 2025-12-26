import { useState } from "react";
import { books } from "../utils/bookData";
import BookList from "./BookList";
import './style.css'

function Search() {
  const [searchText, setsearchText] = useState(" ")
  const [filteredBooks, setFilteredBooks] = useState(books)
    
  function handleSearch() {
    console.log(searchText);  
    const filtered = books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
    console.log(filtered);
    
  
    setFilteredBooks(filtered)
  }

  return(
    <div>
     <div className="search">
      <h2>Search book</h2>
      <div>
        <input type="text" className="search-input" onChange={(event)=>setsearchText(event.target.value)}/>
       <button onClick={handleSearch}>Search</button>
      </div>  
    </div>
    <BookList booksData={filteredBooks}/>
    </div>
  )
}

export default Search