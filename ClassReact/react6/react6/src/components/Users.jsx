import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}

function Users() {
    const [user, setUser] = useState([])

    useEffect(()=>{
       fakeFetch('https://example.com/api/users/status')
        .then((response) =>  setUser(response.data.users))
        .catch((error)=> console.log(error))
    },[])

    return(
        <div>
            {
            user.map((item)=>{
                return(
                    <div>
                        <h1 style={item.status == "Online" ? {color:"green"} : {color : "red"}}> {item.name} - {item.status}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Users