import React, { useEffect, useState } from 'react'

const Temas = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "ligth";
    })

    //cada vez que cambie el tema debe guardarse en localStorage
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]
    )

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h1>Tema actual: {theme}</h1>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Cambiar tema
            </button>
        </div>)
}

export default Temas