import { useState } from "react";

function ControlledInput(){
    const [inputText, setInputText] = useState("");


    function handleChange(e){
        setInputText(e.target.value) 
    }

    return (
        <div>
            <h1>Enter your Text</h1>
            <input type="text" width="200px" value={inputText} onChange={handleChange}/>
            <h2>{inputText}</h2>
        </div>
    )
}

export default ControlledInput