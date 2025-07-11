import { useEffect, useState } from "react"

export const CicloVida = () => {
    const [contador, setContador]=useState(0)
    useEffect(()=>{
        return()=>{
            console.log("componente se ha desmontado")
        }
        },[]
    )

  return (
    <div className="bordeCuadrado">
    CicloVida
    <h3>{contador}</h3>
    <button onClick={()=> setContador(contador+1)}>Incrementar</button>
    </div>
  )
}
