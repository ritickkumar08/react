function ListRendering({booksList}) {
    return(
        <div style={{border:"2px solid black"}}>
            {booksList.map((book) => <h1 key={book.id}>{book.title}</h1>)}
        </div>
    )
}

export default ListRendering