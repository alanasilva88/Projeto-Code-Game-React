import "./Rodape.css";
import iconGame from "../assets/icon-game.png"
import icon2 from "../assets/icon-@.png";


const Rodape = () => {
  return (
    <footer>
      <section className="footer-section">
        <img src={iconGame} alt="Ícone Game" />
        <h3>Principais Jogos</h3>
        <ul className="footer-link" >
          <li><a href="#">God of War</a></li>
          <li><a href="#">Uncharted 4: A Thief's End</a></li>
          <li><a href="#">Horizon Zero Dawn</a></li>
        </ul>
      </section>
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
