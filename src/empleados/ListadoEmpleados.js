import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

  const urlBase= "http://localhost:8080/rh-app/empleados";
  const[empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  },[]);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  }
  return (
    <div className='container' >
      <div className='container text-center' style={{margin: "30px"}}>
      </div>
    
      <table className="table table-striped table-hover align-middle" style={{border:"1px solid gray"}}>
      <thead className="table-primary" >
        <tr >
          <th scope="col" >Id</th>
          <th scope="col">Empleado</th>
          <th scope="col">Departamento</th>
          <th scope="col">Sueldo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
         //Iteramos el arreglo de empleados 
        empleados.map((empleado, indice)=> (
        <tr key={indice}>
          <th scope="row" style={{border:"1.8px solid gray"}}>{empleado.idEmpleado}</th>
          <td style={{border:"1.8px solid gray"}}>{empleado.nombre}</td>
          <td style={{border:"1.8px solid gray"}}>{empleado.departamento}</td>
          <td>
            <NumericFormat value={empleado.sueldo}
              displayType={'text'}
              thousandSeparator=','
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale/>
          </td>
          <td className='text-center'>
            <div>
              <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-sm me-3' style={{background: 'blue', color:'white'}}>Editar</Link>
            </div>
          </td>
        </tr>
        ))
      }
      </tbody>
    </table>
        </div>
      )
    }
