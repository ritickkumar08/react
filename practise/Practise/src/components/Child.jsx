function Child({increment, decrement, number}) {
    return(
        <div className="child">
            <button onClick={increment}>plus</button>
            <h2>{number}</h2>
            <button onClick={decrement}>minus</button>
        </div>
    )
}

export default Child