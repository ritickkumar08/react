import { items } from "../utils/mockData";
import { useState } from "react";
import Item from "./Item";

function PackingList() {

    const [index, setIndex] = useState(0)
    const [showMore,setShowMore] = useState(false)
    
    function handleClick(){
    //     if(index < items.length - 1) setIndex(index+1)
    //    else setIndex(0)
        index == items.length-1 ? setIndex(0) : setIndex(index+1)
    }
    function handleDescription() {
        setShowMore(!showMore)
        
    }
    const item = items[index]

    return(
        <>
            <h1>List of packing items</h1>

            <h2>{item.name}</h2>
            <img src={item.url} alt="clothes" width="200px" height="200px" border="2px solid"/>
            <p>{showMore && item.description}</p>

            <button onClick={handleClick}>Next</button>
            <button onClick={handleDescription}>{showMore ? "hide" : "show"}Description</button>
        </>   
    )
}

export default PackingList