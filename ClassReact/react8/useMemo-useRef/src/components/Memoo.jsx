import { memo, useState } from "react";

function Memoo(user) {
    const [person, setPerson] = useState(user)

    function handleNaam() {
        setPerson(Math.floor(Math.random() * 10))
    }

    return(
        <div>
            <Chotu naam={person}/>
            <button onClick={handleNaam}>change name</button>
            <Chotu naam="ritick"/>
            <Chotu naam="rit"/>
            <Chotu naam="ick"/>
        </div>
    )
}
export default Memoo

let Chotu = memo(function({naam}){
    return(
        <div>
            <h1>Name: {naam}</h1>
        </div>
    )
})