function Prueba() {
    const user = ["spring boot", "c#", "javascript"]
    return (
        <ul>
            {
                user.map((u, index) => (<li key={index}>{u} </li>))
                //< li ></li>
            }
        </ul >
    )
}

export default Prueba;


