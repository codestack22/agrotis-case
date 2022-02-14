import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import CadastrarEmpresa from "./Components/CadastrarEmpresa";
import AlterarEmpresa from "./Components/AlterarEmpresa";
import ListarEmpresas from "./Components/ListarEmpresas";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/CadastrarEmpresa' element={<CadastrarEmpresa />} />
          <Route path='/AlterarEmpresa' element={<AlterarEmpresa />} />
          <Route path='/ListarEmpresas' element={<ListarEmpresas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;