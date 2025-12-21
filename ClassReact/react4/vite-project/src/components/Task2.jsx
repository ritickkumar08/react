import { useState } from "react"

function Task2() {
    const [number, setNumber] = useState(0)

    function increment() {
        setNumber(prev => prev+1) 
        setNumber(prev => prev+1) 
        setNumber(prev => prev+1)
    }
    
    return(
        <div style={{border:"2px solid white",padding:"50px", width:"40vw"}}>
            <button onClick={increment}>plus</button>
            <h2>{number}</h2>
        </div>
    )
}

export default Task2