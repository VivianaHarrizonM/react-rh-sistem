import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpleado() {
  
  const urlBase = "http://localhost:8080/rh-app/empleados";

  let navegacion = useNavigate();
  const {id} = useParams();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const { nombre, departamento, sueldo } = empleado;

  useEffect(() => {
    cargarEmpleado();
  },[]);

  const cargarEmpleado = async () => {
    const resultado = await axios.get(`${urlBase}/${id}`);
    setEmpleado(resultado.data);
  }

  const onInputChange = (e) => {
    //spread operator ... (Expandir los atributos)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${urlBase}/${id}`, empleado);
      navegacion('/');
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
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
          <button type="submit" className="btn btn-sm me-3" style={{background:'blue', color:'white'}}>Guardar</button>
          <Link to="/" className="btn btn-sm" style={{ background: 'green', color: 'white' }}>Regresar</Link>
        </div>
      </form>
    </div>
  );
}