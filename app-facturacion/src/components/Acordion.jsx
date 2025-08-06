import React, { useState } from 'react'

const menu = [
    {
        id: 1,
        title: "clientes",
        content: "lista y crea los clientes"
    },
    {
        id: 2,
        title: "proveedores",
        content: "lista y crea los proveedores"
    },
    {
        id: 3,
        title: "Departamentos",
        content: "lista y crea los Departamentos"
    },
    {
        id: 4,
        title: "municipios",
        content: "lista y crea los municipios"
    },

]

export const Acordion = () => {
    const [isActive, setIsActive]=useState(false)
    return (
        <>
            <h2>menu acordion</h2>
            <div className='Acordion'>
                <div className="Acordion-item">
                    {
                        menu.map(({title, content, id}) => (
                            <>
                                <div className="Acordion-title" key={id} onClick={()=>setIsActive(!isActive)}>{title} </div>
                                <div>{isActive ? '-' : '+'}</div>
                                {isActive && <div className="Acordion-content">{content} </div>}
                            </>
                        ))

                    }
                </div>
            </div>

        </>
    )
}
