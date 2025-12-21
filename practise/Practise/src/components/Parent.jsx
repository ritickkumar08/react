import { useState } from "react"
import Child from "./Child";

function Parent() {
    const [number,setNumber] = useState(0);


    function increment(){
        setNumber(number + Math.random()*10)
    }
    function decrement(){
        setNumber(number + Math.random()*10)
    }

    return(
        <div>
           <Child increment={increment} decrement={decrement} number={number}/>
        </div>
    )
}
export default Parent