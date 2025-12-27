import { useState } from "react"

function Inputt() {
    const[inp, setInp] = useState("")

    function handleInput(e) {
        setInp(e.target.value)
        console.log(inp);
    }

    return(
        <div>
            <h1>I am inputt</h1>
            <input type="text" onChange={(inp)=>handleInput(inp)} value={inp}/>
        </div>
    )
}

export default Inputt