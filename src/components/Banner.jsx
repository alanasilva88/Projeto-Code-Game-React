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
          <h3>Encontre os melhores jogos para PlayStation aqui! </h3>
          <p>
            Lançado em 1994 no Japão o primeiro console PlayStation original. Desde então, a linha PlayStation evoluiu para incluir o PlayStation 2, PlayStation 3, PlayStation 4 e, mais recentemente, o PlayStation 5.
          </p>
          <hr />
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
