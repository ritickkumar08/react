function ChildComponent(props) {
    console.log(props);   
    return(
        <>
            <h1>Child Component</h1>
            <h2>{props.lunchBox}</h2>
            <h2>{props.drinks}</h2>
        </>
    )
}

export default ChildComponent