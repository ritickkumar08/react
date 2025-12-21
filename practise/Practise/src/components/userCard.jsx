function UserCard({name,age,city}){
    return (
        <div className="user-card">
            <h1>name: {name}</h1>
            <h1>umar: {age}</h1>
            <h1>gaon: {city}</h1>
        </div>
    )
}

export default UserCard