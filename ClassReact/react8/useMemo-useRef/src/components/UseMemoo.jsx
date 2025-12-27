import { useMemo,useState } from "react";

function UseMemoo() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count+1)
    }

    const [inp, setInp] = useState(0)
    function handleChange(e) {
        console.log("i");
        setInp( e.target.value)
    }

    let memeSum = useMemo(()=>{
        let ans = 0;
        for (let i = 1; i <= inp ;i++) {
            console.log("me");
            ans += i;
        }
        return ans
    },[inp])

    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>inc</button>
            <br />
            <br />
            <input type="number" onChange={handleChange} value={inp}/>
            <h1>SUM: {memeSum}</h1>
        </div>
    )
}

export default UseMemoo;