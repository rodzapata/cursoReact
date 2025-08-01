import { useState, useEffect } from 'react';
import './App.css';

const CAT_FACT_API_URL = 'https://catfact.ninja/fact';
const CAT_IMAGE_API_BASE_URL = 'https://cataas.com';

// Función para obtener un hecho aleatorio de gatos
const getRandomCatFact = async () => {
  const res = await fetch(CAT_FACT_API_URL);
  if (!res.ok) throw new Error('Error fetching cat fact');
  const data = await res.json();
  return data.fact;
};

// Función para construir la URL de la imagen a partir de un texto
const getCatImageUrlFromText = async (text) => {
  const phrase = text.split(' ', 3).join(' ');
  const res = await fetch(`${CAT_IMAGE_API_BASE_URL}/cat/says/${phrase}?size=50&color=red&json=true`);
  if (!res.ok) throw new Error('Error fetching cat image');
  const data = await res.json();
  return `${CAT_IMAGE_API_BASE_URL}/cat/${data._id}/says/${phrase}`;
};

export function App() {
  const [fact, setFact] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);

  // Obtiene un nuevo hecho y actualiza el estado
  const loadNewFact = async () => {
    try {
      const newFact = await getRandomCatFact();
      setFact(newFact);
    } catch (err) {
      console.error(err);
      setFact(null);
    }
  };

  // Efecto inicial: cargar primer hecho
  useEffect(() => {
    loadNewFact();
  }, []);

  // Efecto para actualizar imagen cuando cambia el hecho
  useEffect(() => {
    if (!fact) {
      setImageUrl(null);
      return;
    }

    const updateImage = async () => {
      setLoadingImage(true);
      try {
        const newImageUrl = await getCatImageUrlFromText(fact);
        setImageUrl(newImageUrl);
      } catch (err) {
        console.error(err);
        setImageUrl(null);
      } finally {
        setLoadingImage(false);
      }
    };

    updateImage();
  }, [fact]);

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={loadNewFact}>Obtener nuevo hecho</button>

      {fact && <p>{fact}</p>}

      {loadingImage && <p>Cargando imagen...</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Gato diciendo: ${fact.split(' ', 3).join(' ')}`}
        />
      )}
    </main>
  );
}
