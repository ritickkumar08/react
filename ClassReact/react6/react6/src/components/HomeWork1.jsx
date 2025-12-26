//Create a React component that fetches products data from an API 
// endpoint using useEffect hook and display products 
// (name, price, quantity) as a list on the screen using the 
// useState hook.
//a. Add a button, on click of which it displays only the items
// with more than 20 as quantity.

import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}

function Homework1() {
    const [product, setProduct] = useState([]);
    const [showOnlyHigherQuantity, setShowOnlyHigherQuantity] = useState(false)

    useEffect(()=>{
        fakeFetch('https://example.com/api/products')
        .then((res)=>setProduct(res.data.products))
        .catch((err) => console.log(err))
},[])

    const display = showOnlyHigherQuantity ? product.filter((item) => item.quantity > 20) : product

    return(
        <div>
            <table border="1" cellPadding="3">
                <thead>
                    <tr>
                        <td>product</td>
                        <td>price</td>
                        <td>quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    display.map((item,index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                    </tr>))
                    }
                </tbody>
            </table>
            <button style={{marginTop:"10px"}} onClick={()=> setShowOnlyHigherQuantity((previous) => !previous)}>{showOnlyHigherQuantity ? "show all products" : "quantity > 20"}</button>
        </div>
    )
}

export default Homework1