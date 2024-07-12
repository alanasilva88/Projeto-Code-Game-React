import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Login from './pages/Login';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
      <Rodape />   
    </BrowserRouter>
  );
};

export default App;