function Events() {
    function handlePush() {
        console.log("bhalle1 !");
    }
    function handleClick2() {
        console.log("bhalle1 !");
    }

    return (
        <>
            <button onClick={()=>handlePush()}>push1 !</button>
            {/* we can have arguments in these */}
            <h1 onClick={handleClick2}>push2 !</h1>
            {/* we can't have arguments in this type of functions */}
        </>
    )
}




// function Events() {
//     function handleClick() {
//         console.log("click1");
//     }
//     function handleClick2() {
//         console.log("click2");
//     }
//     return (
//         <>
//             <button onClick={handleClick}>click me</button>
//             <h1 onClick={handleClick2}>click me2</h1>
//         </>
//     )
// }

export default Events