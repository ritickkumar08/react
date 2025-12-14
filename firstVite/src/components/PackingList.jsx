import Item from "./Item"

function PackingList() {
    return(
        <>
        <h1>List of packing items</h1>
        <Item name="Clothes" isPacked={true}></Item>
        <Item name="Hair dryer" isPacked={false}></Item>
        <Item name="Power Bank" isPacked={true}></Item>
        <Item name="Under" isPacked={true}></Item>
        </>   
    )
}

export default PackingList