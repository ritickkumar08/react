function EmployeeCard({name, designation, experience}) {
    return (
        <>
            <h1>{name}</h1>
            <h1>{designation}</h1>
            <h1>{experience}</h1>
        </>
    )
}

// function EmployeeCard(props) {
//     return (
//         <>
//             <h1>{props.name}</h1>
//             <h1 style={{color:"blue"}}>{props.designation}</h1>
//             <h1 style={{color:"green"}}>{props.experience}</h1>
//         </>
//     )
// }

export default EmployeeCard