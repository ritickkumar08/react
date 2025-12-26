import { useEffect, useState } from "react"

function Timer() {
    const [timer, setTimer] = useState(0)
    const [isRunning, setRunning] = useState(false)

    useEffect(()=>{
        let intervalId;
        if(isRunning){
            intervalId = setInterval(()=>{
                setTimer(seconds => seconds+1)
            },1000)
        }

        return () => clearInterval(intervalId);
    },[isRunning])
    return(
        <div>
            <h1>{timer}</h1>
            <button onClick={()=>setRunning(true)}>onClick</button>
        </div>
    )
}

export default Timer