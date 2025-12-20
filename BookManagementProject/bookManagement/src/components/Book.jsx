import "./style.css"

function Book(props) {
    return(
        <div className="book-card">
            <img className="book-cover" src={props.bookDetails.coverImage} alt="Book cover photo" width="200px" height="250px"/>
            <div className="bookDetails">
                <h1 className="book-title">{props.bookDetails.title}</h1>
                <h2 className="book-author">{props.bookDetails.author}</h2>
                <p className="book-description">{props.bookDetails.description}</p>
            </div>
        </div>
    )
}

export default Book