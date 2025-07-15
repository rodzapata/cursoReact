import React, { useEffect, useState } from 'react'

export const DptoComponent = () => {
  const [dptos, setDptos] = useState([]);
  const [selectedDpto, setSelectedDpto] = useState('');

  const getDptos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dpto/");
      const data = await response.json();
      console.log(data);
      setDptos(data);


    } catch (error) {
      console.log('error al obtener el dpto', error);
    }
  };

  useEffect(() => {
    getDptos()
  }, []

  )

  return (
    <>
      <select name="departamento" id="departamento" onChange={(e) => setSelectedDpto(e.target.value)}>
        <option value="">Seleccione un departamento</option>
        {dptos.map((dpto) => (
          <option key={dpto.id} value={dpto.id}> {dpto.nombreDpto} </option>
        ))

        }

      </select>
    </>
  )
}
