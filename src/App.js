import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./platilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route exact path='/' element={<ListadoEmpleados/>}></Route>
          <Route exact path='/agregar' element={<AgregarEmpleado/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
