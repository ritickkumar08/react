export function Lucky() {

    // eslint-disable-next-line react-hooks/purity
    let Rn = Math.floor(Math.random()*10)
    let element = null
    if (Rn == 7) {
        element = "winner";
    }else{
        element = "looser";
    }
    return (
        <>
            <h1>Lucky 7 : {Rn}</h1>
            <h1>{element}</h1>
        </>
    )
}

export function Lucky1() {
    // eslint-disable-next-line react-hooks/purity
    let Rn = Math.floor(Math.random()*10)
    return (
        <>
            <h1>Lucky 7 : {Rn}</h1>
            <h1>{Rn == 7 ? <h2>winner</h2> : <h2>looser</h2>}</h1>
        </>
    )
}

// export default Lucky