// src/pages/NuevoClientePage.jsx

import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios'; // 1. Importamos Axios
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario

function NuevoClientePage() {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate(); // Hook para la navegación

  // 2. Convertimos la función onSubmit en una función asíncrona
  const onSubmit = async (data) => {
    try {
      // 3. Hacemos la petición POST a nuestro backend con Axios
      const response = await axios.post('http://localhost:3000/clientes', data);
      
      console.log("Respuesta del servidor:", response.data);
      alert('¡Cliente creado exitosamente!');
      
      // Redirigimos al usuario a la lista de clientes después de crear uno nuevo
      navigate('/clientes');

    } catch (error) {
      // 4. Manejamos cualquier error que ocurra durante la petición
      console.error("Hubo un error al crear el cliente:", error);
      alert('Error al crear el cliente. Revisa la consola para más detalles.');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Registrar Nuevo Cliente</Typography>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        {/* ... El resto de los campos del formulario (TextFields) se mantienen exactamente igual ... */}
        <TextField
          margin="normal"
          fullWidth
          label="Nombre Completo"
          autoFocus
          {...register("nombre", { required: "El nombre es obligatorio" })}
          error={!!errors.nombre}
          helperText={errors.nombre?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Correo Electrónico"
          type="email"
          {...register("email", { 
            required: "El correo es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El formato del correo no es válido"
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Teléfono"
          {...register("telefono")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Guardar Cliente
        </Button>
      </Box>
    </Box>
  );
}

export default NuevoClientePage;