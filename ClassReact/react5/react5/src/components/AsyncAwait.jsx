import { useEffect, useState } from "react"

function AsyncAwait() {

    const [todos, setTodos] = useState([])
    const API = "https://jsonplaceholder.typicode.com/todos"
    
    useEffect(()=>{
        async function ApiCall() {
            let response = await fetch(API)
            let data = await response.json()
            setTodos(data)
        }
        ApiCall()
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

export default AsyncAwait