import "./Cabecalho.css";
import logo from "../assets/logo.gif";

const Cabecalho = () => {
  const handleClick = () => {
    alert('Olá! Bem-vindo ao Game Code!');
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#jogos">Jogos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button className="botao" onClick={handleClick}>Entrar</button>
    </header>
  );
};

export default Cabecalho;
