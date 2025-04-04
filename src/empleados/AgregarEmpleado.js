import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
  let navegacion = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlBase = "http://localhost:8080/rh-app/empleados";
      await axios.post(urlBase, empleado);
      navegacion('/');
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" style={{background:"#E0FFFF"}} id="nombre" name="nombre" required value={nombre} onChange={onInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento</label>
          <input type="text" className="form-control" style={{background:"#E0FFFF"}} id="departamento" name="departamento" required value={departamento} onChange={onInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input type="number" className="form-control" style={{background:"#E0FFFF"}} id="sueldo" name="sueldo" required value={sueldo} onChange={onInputChange} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm me-3">Agregar</button>
          <Link to="/" className="btn btn-sm" style={{ background: 'green', color: 'white' }}>Regresar</Link>
        </div>
      </form>
    </div>
  );
}