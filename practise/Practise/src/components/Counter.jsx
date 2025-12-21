import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }

    return (
        <div className="counter" style={{border:"2px solid white", padding:"20px"}}>
            <button className="plus" onClick={increment}>plus</button>
            <h2 className="count-value">{count}</h2>
            <button className="minus" onClick={decrement}>minus</button>
        </div>
    )
}
export default Counter