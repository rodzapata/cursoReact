import { useState } from "react";
import styled from "styled-components";

export function Clientes() {
  const [formData, setFormData] = useState({
    nitced: "",
    nombre: "",
    direccion: "",
    ciudad: "",
    email: "",
    estado: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7272/api/Clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Cliente registrado correctamente");
        setFormData({ nitced: "", nombre: "", direccion: "", ciudad: "", email: "", estado: 0 }); // Limpiar formulario
      } else {
        alert("Error al registrar cliente");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión");
    }
  };

  return (
    <Container>
      <h1>Registro de Clientes</h1>
      <Form onSubmit={handleSubmit}>
        <Label>NitCed:</Label>
        <Input type="text" name="nitced" value={formData.nitced} onChange={handleChange} required />

        <Label>Nombre:</Label>
        <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <Label>Direccion:</Label>
        <Input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />

        <Label>Ciudad:</Label>
        <Input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />

        <Label>Email:</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label>Estado:</Label>
        <Input type="tel" name="estado" value={formData.estado} onChange={handleChange} required />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
