import { Outlet, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';

// Ancho de nuestra barra lateral
const drawerWidth = 280;

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* 1. LA BARRA LATERAL (DRAWER) */}
      <Drawer
        variant="permanent" // La dejamos fija
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e293b', // Un color oscuro para el fondo
            color: 'white',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', padding: '16px' }}>
            <Typography variant="h5" sx={{textAlign: 'center', marginBottom: '20px'}}>
                FacturaApp
            </Typography>
          <List>
            {/* ENLACE DIRECTO AL DASHBOARD */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon sx={{ color: 'white' }}><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            
            {/* 2. EL MENÚ ACORDEÓN */}
            <Accordion sx={{ backgroundColor: '#1e293b', color: 'white', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography>Gestión</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {/* Enlace a Facturas */}
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/facturas">
                      <ListItemIcon sx={{ color: 'white' }}><ReceiptIcon /></ListItemIcon>
                      <ListItemText primary="Facturas" />
                    </ListItemButton>
                  </ListItem>
                  {/* Enlace a Clientes */}
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/clientes">
                      <ListItemIcon sx={{ color: 'white' }}><PeopleIcon /></ListItemIcon>
                      <ListItemText primary="Clientes" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </List>
        </Box>
      </Drawer>

      {/* 3. EL CONTENIDO PRINCIPAL DE LA PÁGINA */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f0f2f5', p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* Outlet es el marcador de posición donde React Router renderizará la página actual */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;