import { useState, useEffect } from 'react';
import './App.css';

const CAT_FACT_API_URL = 'https://catfact.ninja/fact';
const CAT_IMAGE_API_BASE_URL = 'https://cataas.com';

export function App () {
  // Estados para el hecho y la URL de la imagen
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Función auxiliar para obtener un hecho aleatorio
  const fetchRandomFact = () => {
     fetch(CAT_FACT_API_URL)
       .then(res => {
          // Manejo básico de errores
          if (!res.ok) throw new Error('Error fetching fact');
          return res.json();
       })
       .then(data => {
         setFact(data.fact); // Actualiza el estado del hecho
       })
       .catch(err => {
          console.error('Error fetching cat fact:', err);
          // Podríamos setFact(null) o mostrar un mensaje de error en UI
       });
  };

  // --- EFECTO 1: Obtener hecho inicial ---
  // Este efecto se ejecuta solo una vez: al montar el componente
  useEffect(() => {
    fetchRandomFact();
  }, []); // Array de dependencias vacío: se ejecuta solo al montar y desmontar

  // --- EFECTO 2: Obtener imagen cuando el hecho cambia ---
  // Este efecto se ejecuta cada vez que el valor de 'fact' cambia
  useEffect(() => {
    // No hacemos nada si fact es nulo o indefinido (estado inicial o error)
    if (!fact) {
        setImageUrl(null); // Opcional: limpia la imagen si no hay hecho
        return;
    }

    // Extraer las primeras 3 palabras del hecho
    const threeFirstWords = fact.split(' ', 3).join(' ');
    // console.log('Obteniendo imagen para:', threeFirstWords); // Útil para depurar en entrevista

    // Llamada a la API de imágenes de gatos
    fetch(`${CAT_IMAGE_API_BASE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => {
         // Manejo básico de errores
         if (!res.ok) throw new Error('Error fetching cat image');
         return res.json()
       })
      .then(response => {
        const { _id } = response; // La API devuelve un ID para la imagen
        // Construir la URL completa de la imagen
        const url = `${CAT_IMAGE_API_BASE_URL}/cat/${_id}/says/${threeFirstWords}`;
        setImageUrl(url); // Actualizar el estado de la URL de la imagen
      })
      .catch(err => {
         console.error('Error fetching cat image:', err);
         setImageUrl(null); // Opcional: limpia la imagen o muestra error
      });

  }, [fact]); // Array de dependencias: se re-ejecuta cuando 'fact' cambia

  // Manejador del evento click del botón
  const handleClick = () => {
    fetchRandomFact(); // Al hacer click, solo necesitamos obtener un nuevo hecho
    // El Efecto 2 (con dependencia [fact]) se encargará automáticamente de
    // obtener la imagen correspondiente al nuevo hecho.
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {/* Renderizado condicional: mostrar fact y imagen solo si existen */}
      {fact && <p>{fact}</p>}
      {/* La URL de la imagen ya está completa en el estado imageUrl */}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}{!imageUrl && fact && <p>Cargando imagen...</p>} {/* Opcional: indicador de carga para la imagen */}
    </main>
  );
}