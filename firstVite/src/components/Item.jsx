function Item(props) {
    // if (props.isPacked) {
    //      return(
    //     <>
    //         <li>{props.name} ✔</li>
    //     </>
    //     )
    // } else {
    //     // return <li>{props.name}</li>
    //     return null
    // }
    return (
    //    props.isPacked ? <li>{props.name} ✔</li> : null
       props.isPacked ? <li>{props.name} ✔</li> : <li>{props.name}</li>
    )
   
}

export default Item