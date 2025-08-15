import React from 'react';
// 1. Importa el archivo CSS Module. React se encarga de la magia.
import styles from './ClientForm.module.css';

function ClientForm() {
  return (
    // 2. Usa el objeto 'styles' para acceder a tus clases.
    // React convertirá 'styles.formContainer' en una clase única.
    <form className={styles.formContainer}>
      <h2>Formulario de Cliente</h2>

      <div className={styles.formGroup}>
        <label htmlFor="nombre">Nombre Completo</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" />
      </div>
      
      <button type="submit" className={styles.submitBtn}>
        Guardar Cliente
      </button>
    </form>
  );
}

export default ClientForm;