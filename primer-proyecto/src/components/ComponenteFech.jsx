import React, { useEffect, useState } from 'react'

export const ComponenteFech = () => {
  const [dptos, setDptos]=useState([]);

  const getDptos = async ()=>{
    const response = await fetch('http://localhost:3000/api/dpto/');
    const data = await  response.json();
    setDptos(data);
  }

  useEffect( ()=>{
    getDptos();
  },[]

  )

  const htmlDptos= dptos.map((dpto)=>{
    return (
        <div key={dpto.id}>
            <h3>{dpto.nombreDpto}</h3>
        </div>
    )

  })
  
  return (
    <div>
      <h1>Consultamos la API</h1>
      <section>{htmlDptos}</section>

    </div>
  )
}
