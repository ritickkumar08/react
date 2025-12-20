import { useRouteError } from "react-router-dom"

function Error() {

    const err = useRouteError()
    console.log(err);
    
    return(
        <>
            <h1>Oops!</h1>
            {/* <h2>the path doesn't exists</h2> */}
            <h2>{err.status} {err.statusText}</h2>
            <h2>{err.data}</h2>
        </>
    )
}

export default Error