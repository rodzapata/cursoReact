import React from 'react'

export const LlamarArray = () => {
    const users = [
        { id: 1, name: "Rodney", role: "Admin" },
        { id: 2, name: "Ana", role: "User" },
        { id: 3, name: "Luis", role: "Guest" }
    ];

    return (
        <>
            <h1>Listado de usuarios</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )
}
