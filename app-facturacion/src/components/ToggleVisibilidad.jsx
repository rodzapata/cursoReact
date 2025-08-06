import React, { useState } from 'react'

export const ToggleVisibilidad = () => {
    const [esVisible, setEsVisible] = useState(true);

    const interrupto = () => {
        setEsVisible(!esVisible);
    }

    return (
        <>ToggleVisibilidad
            {
                esVisible ? <h2>es visible</h2> : <h2>No es visible</h2>
            }
            <button onClick={interrupto}>Interruptor</button>
        </>

    )
}
