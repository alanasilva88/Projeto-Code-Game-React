// import "./Rodape.css";
// import iconGame from "../assets/icon-game.png"
import icon2 from "../assets/icon-a.png";


const Rodape = () => {
  return (
    <footer className="text-center text-light bg-dark py-1" >
      <p>© 2024 Game Code. Todos os direitos reservados.</p>
      <section className="footer-section">
        <img src={icon2} alt="Ícone contato" width={40} />
        <h3>Contato</h3>
        <p>Contato: contato@gamecode.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua dos Jogos, 123, São Paulo, SP</p>
      </section>
    </footer>
  );
};

export default Rodape;
