import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(
        {
            nombre: "rodney zapata",
            email: "rodneyzapatapalacio@gmail.com",
            roles: ["vendedor", "editor"]
        }
    )

    const isAuthenticated = !!usuario;

    //el valor que compartiremos a todos los componentes hijos
    const valorACompartir = {
        usuario,
        isAuthenticated,
    }

    return (
        <AuthContext.Provider value={valorACompartir}>
            {children}
        </AuthContext.Provider>
    )
}

