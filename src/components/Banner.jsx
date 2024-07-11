import "./Banner.css";
import banner from "../assets/img-game.png";
import banner2 from "../assets/img2-game.png";
import banner3 from "../assets/img3-game.png";


const Banner = () => {
  return (
    <section className="banner">
      <section className="animacao">
        <section className="bem-vindo">
        <h1>Bem-vindo ao Game Code!</h1>
        <p>Encontre os melhores jogos para PlayStation aqui!</p>
        <hr />
        <h3>Sobre o PlayStation</h3>
        <p>
          O PlayStation é uma linha de consoles de videogame criada e desenvolvida pela Sony Interactive Entertainment. A marca foi lançada pela primeira vez em 3 de dezembro de 1994 no Japão com o lançamento do console PlayStation original.

          Desde então, a linha PlayStation evoluiu para incluir o PlayStation 2, PlayStation 3, PlayStation 4 e, mais recentemente, o PlayStation 5. Cada nova geração trouxe avanços tecnológicos significativos e uma vasta biblioteca de jogos incríveis.
        </p>
        </section>
        <figure>
          <img src={banner} alt="Imagem Jogo" />
        </figure>
        <figure>
        <img src={banner2} alt="Imagem Jogo 2" />
        </figure>
        <figure>
          <img src={banner3} alt="Imagem Jogo 3" />
        </figure>
      </section>
    </section>
  );
};

export default Banner;
