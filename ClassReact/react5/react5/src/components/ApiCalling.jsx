import { useEffect, useState } from "react"

function ApiCalling() {

    const [todos, setTodos] = useState([])
    const API = "https://jsonplaceholder.typicode.com/todos"
    
    useEffect(()=>{
        fetch(API)
        .then((data)=>{ return data.json()})
        .then((response)=>{setTodos(response)})
        .catch((err)=>{console.log(err,"then")})
    },[])


    return(
        <div>
            <h1>APICalling</h1>
            {
                todos.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.title} - {item.id}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiCalling