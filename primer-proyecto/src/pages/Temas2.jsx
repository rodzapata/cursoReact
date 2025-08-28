import { useEffect, useState } from "react";

const Temas2 = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]

    )

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#333" : "#fff" }}>
            <h1>Tema actual {theme}</h1>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Cambiar temas

            </button>

        </div>
    )
}

export default Temas2;