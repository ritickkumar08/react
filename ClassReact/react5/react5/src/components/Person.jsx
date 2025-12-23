import { useState } from "react"

function Person() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count+1)
        setCount(count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleClick}>Inc+</button>
        </>
    )
}

export default Person