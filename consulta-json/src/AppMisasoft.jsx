import React, { useState, useEffect } from "react";

const AppMidasoft = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const recordsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkpDQUxWTyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJCZ0QrTmw0cHlXL25zd0xMQmZacHRURVVUbE04SWVXTEg3S1J1NG50M0xQZGpJZnVnUDBrQ2oveVJkNUJ0V2JuZjNMdlI4ek5IRFdrUndjNnR1eTZUbnF4SUdlYjVxRlhtNlBnaU5Xb1BOYytiNS80eE16MGlXcVNTWmYyczlPQmx3K2dTRkVicGlMS0JHZ2ZuamRGOGxpSmtUaWl1R2d5Lzl2TUJPemNGaXBMSUdPZmZVaVZTTWh3Z0pabGtvcVE1dW84QXZuN0JjTGVTd0FhdVVKSUJCbzA3bjVqTDBITDQwaVpGWFltQTd6eFJ1TmpjZm9zRTA4UHBqbmt1bjUyVnZzTkx5c2J0dExvU2luTGNxemNlRDRrcFloSkFYOTFwMTVoSUs3QTI0d0VVMUFqamtweHhoTStGOXZOVk5Ka3pVM3ZJblFXaXNTNDBWWlhndUJxeGU3OGJxRHNPSmcyZ0dGa0xzUEdqMU55NVoxUWJLaVdoTWF3b3kxVVJOM05VQTNVeDNVRW1BN1N1b0VTeGhkQlM5bzdzR01CdU8yTktSNVU1d2YzSmE5ZjdEMVovMW9FeEFyaW1pMW9TNTZYeWdyR2t5ZkVZZnNkcEVzY3JFWWsvQT09IiwibmJmIjoxNzYxOTM3NDAyLCJleHAiOjE3NjE5NDgyMDIsImlhdCI6MTc2MTkzNzQwMn0.fSECNM3fGXdeSG9ik20gTq66gbLPOrHo9TY11fy1WsA"
      const body = {
        // Ejemplo de body. Modifica según tu API
        Ano: "2025",
        Mes: "10",
        Division: "SP",
        Periodo_N: "19",
        Comprobante: "09"
      };

      const response = await fetch("https://serviparamo.midasoft.co/APIS/integracion/api/v1/IntegracionNominaServiparamo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Error al consultar la API");

      const result = await response.json();
      setData(result.data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calcular paginación
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Consulta de Datos</h2>

      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <>
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th>CnsMcn</th>
                <th>Compania</th>
                <th>Comprobante</th>
                <th>Documento</th>
                <th>Descripcion</th>
                <th>Valor</th>
                <th>Empleado</th>
                <th>Nrocontrato</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length > 0 ? (
                currentRecords.map((item, index) => (
                  <tr key={index}>
                    <td>{item.CnsMcn}</td>
                    <td>{item.Compania}</td>
                    <td>{item.Comprobante}</td>
                    <td>{item.Documento}</td>
                    <td>{item.Descripcion}</td>
                    <td>{item.Valor}</td>
                    <td>{item.Empleado}</td>
                    <td>{item.Nrocontrato}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No hay registros
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Controles de paginación */}
          {data.length > 10 && (
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                ⬅️ Anterior
              </button>
              <span style={{ margin: "0 10px" }}>
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Siguiente ➡️
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AppMidasoft;
