import { useState } from "react"

export const Contador = () => {
    const [conteo, setConteo] = useState(0)

    const incrementar = () => {
        setConteo(conteo + 1);
    }
    return (
        <>
            <h1>Prueba de componente contador</h1>
            <h2>El contador es {conteo}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </>
    )
}