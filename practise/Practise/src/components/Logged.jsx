import { useState } from "react"

function Logged() {

    const [loged, setLogged] = useState(false)
    function handleButton() {
        setLogged(prev => !prev)
       
    }

    return(
        <div>
            <button onClick={handleButton}>logged {loged ? "in" : "out"}</button>
        </div>
    )
}

export default Logged