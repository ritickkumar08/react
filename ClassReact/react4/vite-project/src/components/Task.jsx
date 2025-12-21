import { useState } from "react"

function Task() {
    const [number, setNumber] = useState(0)

    function increment() {
        setNumber(number + Math.floor(Math.random()*10))
    }
    function decrement() {
        setNumber(number - Math.floor(Math.random()*10))
    }
    return(
        <div style={{border:"2px solid white",padding:"50px", width:"40vw"}}>
            <button onClick={increment}>plus</button>
            <h2>{number}</h2>
            <button onClick={decrement}>minus</button>
        </div>
    )
}

export default Task