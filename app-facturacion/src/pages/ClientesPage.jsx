// src/pages/ClientesPage.jsx
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ClientesPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">👥 Gestión de Clientes</Typography>
        <Button component={Link} to="/clientes/nuevo" variant="contained">
          Añadir Cliente
        </Button>
      </Box>
      {/* Aquí irá la lista de clientes en el futuro */}
      <Typography sx={{mt: 2}}>Próximamente: listado de clientes...</Typography>
    </Box>
  );
}

export default ClientesPage;