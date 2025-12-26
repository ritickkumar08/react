// Q2: Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data 
// (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height 
// for image as props to the component.

import { useEffect, useState } from "react"

const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'Saroj kanti',
            image:
              'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
            likes: 500,
            comments: 10,
          },
        })
      } else {
        reject({
          status: 404,
          message: 'user data not found.',
        })
      }
    }, 2000)
  })
}

function HomeWork2() {

    const [user, setUser] = useState([])

    useEffect(()=>{
        fakeFetch2('https://example.com/api/user')
        .then((response) => setUser(response.data))
        .catch((error)=> console.log(error))
    },[])

    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.image} alt="user's image" />
            <p>{user.likes} likes ----- {user.comments} comments</p>
        </div> 
    )
}

export default HomeWork2