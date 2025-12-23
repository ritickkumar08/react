import axios from "axios"
import { useEffect, useState } from "react"

function AxiosApi() {

    const [todos, setTodos] = useState([])
    const API = "https://jsonplaceholder.typicode.com/todos"
    
    useEffect(()=>{
       axios
       .get(API)
        .then((response)=>{setTodos(response.data)})
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

export default AxiosApi