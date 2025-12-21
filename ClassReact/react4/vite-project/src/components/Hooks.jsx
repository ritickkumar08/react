import { useState } from "react"

function Hooks({naam}) {
    const [username, setUserName] = useState(naam)
    function handleClick() {
        setUserName("anonymous")
    }

    return (
        <div>
            <h1>{username}</h1>
            <button onClick={handleClick}>logout button</button>
        </div>
    )
}



// wrong approach
// function Hooks(){
//     let name1 = "samarth"
//     function handleClick(){
//         name1 = "anonymous"
//     }

//     return(
//         <div>
//             <h1>{name1}</h1>
//             <button onClick={handleClick}>logout button</button>
//         </div>
//     )
// }

export default Hooks