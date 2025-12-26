import "./style.css"

function Book({bookDetails}) {
    return(
        <div className="book-card">
            {/* <img className="book-cover" src={bookDetails.coverImage} alt="Book cover photo" width="200px" height="250px"/> */}
            <div className="bookDetails">
                <h1 className="book-title">{bookDetails.title}</h1>
                <h2 className="book-author">{bookDetails.author}</h2>
                <p className="book-description">{bookDetails.description}</p>
            </div>
        </div>
    )
}

export default Book