/**
 * Booklist component
 * book component
 */
import BookList from "./components/BookList"
import { books } from "./utils/bookData"
import "./components/style.css"
import { useState } from "react"

function App() {

  const [searchText, setsearchText] = useState(" ")
  const [filteredBooks, setFilteredBooks] = useState(books)

  function handleSearch() {
    console.log(searchText);  
    const filtered = books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
    console.log(filtered);
    

    setFilteredBooks(filtered)
  }
  return (
    <>
    <div className="search">
      <h2>Search book</h2>
      <div>
        <input type="text" className="search-input" onChange={(event)=>setsearchText(event.target.value)}/>
       <button onClick={handleSearch}>Search</button>
      </div>  
    </div>
    
      <BookList booksData={filteredBooks}/>
    </>
  )
}

export default App
