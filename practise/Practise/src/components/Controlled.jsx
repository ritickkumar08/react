import { useState } from "react"

function Controlled() {

    const [text, setText] = useState("")
    function handleChange(event) {
        setText(event.target.value)
    }


    return (
        <div>
            <span><h1>I am from 2</h1>
                <input type="text"  onChange={handleChange} width="400px" value={text}/>
            </span>
            <p>{text}</p>
        </div>
    )
}

export default Controlled