import React from 'react';
import styles from './AppLayout.module.css';
import Sidebar from '../Sidebar/Sidebar'; // Aún no lo hemos creado, ¡pero lo haremos!
import ClientForm from '../ClientForm/ClientForm'; // ¡Importamos el formulario que ya hicimos!

function AppLayout() {
  return (
    // Aplicamos la clase que define nuestro Grid
    <div className={styles.appLayoutContainer}>
      
      {/* Columna 1: El Menú Lateral */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      
      {/* Columna 2: El Contenido Principal */}
      <main className={styles.mainContent}>
        {/* Por ahora, para probar, colocamos nuestro formulario de cliente aquí */}
        <ClientForm />
      </main>

    </div>
  );
}

export default AppLayout;