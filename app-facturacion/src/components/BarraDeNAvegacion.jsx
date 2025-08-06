import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const BarraDeNAvegacion = () => {

  const { usuario, isAuthenticated } = useContext(AuthContext);
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: '#333',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none'
  };


  return (
    <nav style={navStyle}>
      <div>
        {/* 2. Usamos Link para la navegación interna */}
        <Link to="/" style={linkStyle}>Dashboard</Link>
        <Link to="/facturas" style={linkStyle}>Facturas</Link>
        <Link to="/clientes" style={linkStyle}>Clientes</Link>
      </div>
      <div>
        {isAuthenticated && <span>Bienvenido, {usuario.nombre}</span>}
      </div>
    </nav> 
  )
}
