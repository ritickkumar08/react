import axios from "axios"
import { useEffect, useState } from "react"

function AxiosPromise() {

    const [todos, setTodos] = useState([])
    const API = "https://jsonplaceholder.typicode.com/todos"
    
    useEffect(()=>{
        async function ApiCall() {
            let response = await axios.get(API)
            setTodos(response.data)
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

export default AxiosPromise