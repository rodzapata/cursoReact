import React, { useEffect, useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent';

export const FormulasJavascrip = () => {
  const [dobleNumero, setDobleNumero] = useState([]);


  const getFormula = () => {
    const numero = [2, 4, 5];
    const resultado = numero.map((n) => n * 2);
    console.log(numero);
    console.log(resultado);
    setDobleNumero(resultado);

  }

  useEffect(() => {
    getFormula()
  }, [])


  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h2>FormulasJavascrip</h2>
      <h3>usando Map() un arreglo de numeros [2, 4,5] es devuelto duplicado</h3>
      <ul>
        {dobleNumero.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

    </>
  )
}
