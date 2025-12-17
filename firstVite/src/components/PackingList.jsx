import Item from "./Item"

const items = [
    {
        id:1,
        name:"clothes",
        packed:true
    },
    {
        id:2,
        name:"hair-dryer",
        packed:false
    },
    {
        id:3,
        name:"power-bank",
        packed:true
    },
    {
        id:4,
        name:"shampoo",
        packed:true
    }
]


function PackingList() {
    return(
        <>
        <h1>List of packing items</h1>
        {items.map((item)=>{
         return<Item key={item.id} data={item}></Item>})}
        </>   
    )
}

// function PackingList() {
//     return(
//         <>
//         <h1>List of packing items</h1>
//         <Item name="Clothes" isPacked={true}></Item>
//         <Item name="Hair dryer" isPacked={false}></Item>
//         <Item name="Power Bank" isPacked={true}></Item>
//         <Item name="Under" isPacked={true}></Item>
//         </>   
//     )
// }

export default PackingList