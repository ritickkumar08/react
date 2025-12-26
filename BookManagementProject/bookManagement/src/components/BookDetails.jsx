import { useParams } from "react-router-dom"


function BookDetails() {
    const para = useParams
    
    return(
        <div>
            <h1>{`book details for with id ${para.id}`}</h1>
        </div>
    )
}

export default BookDetails