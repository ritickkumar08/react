import ChildComponent from "./ChildComponent"
import Profile from "./ProfileComponent"


function ParentComponent() {
    return(
        <>
            <h1>Parent Component</h1>
            <ChildComponent lunchBox="roti" drinks="juice"/>
        </>
    )
}

export default ParentComponent