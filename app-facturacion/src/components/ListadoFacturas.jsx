import React, { useEffect, useState } from 'react'

export const ListadoFacturas = () => {
    const [facturas, setFactura] = useState([]);
    const [cargando, setCargando] = useState(true)

    const facturasFalsas = [
        { id: 1, nombre: "rodney", total: 1400 },
        { id: 2, nombre: "cecilia", total: 2000 },
        { id: 3, nombre: "juan miguel", total: 1850 }
    ]

    const consultarFactura = () => {
        setFactura(facturasFalsas);
        setCargando(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setFactura(facturasFalsas);
            setCargando(false);

        }, 2000)
    }
        , [])

        if (cargando){
            return <>Cargando datos ....</>
        }

    return (
        <>
            <h1>Listado de facturas</h1>

            <ul>
                {
                    facturas.map(factura => (
                        <li key={factura.id}>
                            factura = {factura.id} nombre= {factura.nombre}, valor ${factura.total}
                        </li>
                    ))
                }
            </ul>

        </>
    )
}
