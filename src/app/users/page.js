import React from 'react'

// interface User{
//     id:'Number'
//     name:'string'
// }

const UserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-cache' })
    const users = await res.json();

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleDateString()}</p>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {
                    users.map(user => <li key={user.id}>
                        {user.name}
                    </li>)
                }
            </ul>
        </>
    )
}

export default UserPage