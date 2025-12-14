function Try() {
    let x = "Ritick"
    let y = 500
    let z = true
    let w = false
    let u = null
    let v = undefined

    return(
        <>
        <h1>X: {JSON.stringify(x)}</h1>
        <h1>Y: {JSON.stringify(y)}</h1>
        <h1>Z: {JSON.stringify(z)}</h1>
        <h1>W: {JSON.stringify(w)}</h1>
        <h1>U: {JSON.stringify(u)}</h1>
        <h1>V: {v}</h1>
        </>
    )
}

export default Try