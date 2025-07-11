import React, { useState } from 'react'

export const FormUser = () => {
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    );


    const handleSubmit = (e) => {
        e.preventDefault(); // forma correcta
        console.log(user);
        console.log("formulario se ha enviado");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleUserNameInput = (e) => {
        setUser({ ...user, username: e.target.value });
        console.log(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setUser({ ...user, password: e.target.value });
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" id='username' onChange={handleChange} value={user.username} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" onChange={handleChange} value={user.password} />
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
