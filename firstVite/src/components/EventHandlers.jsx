function EventHandlers(props) {
    function alertss() {
        alert(`Hey! I am, ${props.message} `)
    }
    return (
        <>
        <button onClick={()=>alertss()}>I am a button</button>
        </>
    )
}

export default EventHandlers;