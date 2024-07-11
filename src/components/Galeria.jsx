import "./Galeria.css";
import Card from './Card';

const jogos = [
  { cod: 1, titulo: 'The Last of Us', descricao: 'Ação/Aventura', preco: 'R$199,99'},
  { cod: 2, titulo: 'God of War', descricao: 'Ação/Aventura', preco: 'R$149,99' },
  { cod: 3, titulo: 'Spider-Man', descricao: 'Ação/Aventura', preco: 'R$99,99' },
  { cod: 4, titulo: 'Resident Evil', descricao: 'Ficção/Ação', preco: 'R$299,90'},
  { cod: 5, titulo: 'Mario Bros', descricao: 'Ação/Aventura', preco: 'R$199,99' },
  { cod: 6, titulo: 'Mario Kart', descricao: 'Aventura', preco: 'R$159,90'},
];

const Galeria = () => {
  return (
    <section className="galeria">
      {jogos.map(jogo => (
        <Card key={jogo.cod} titulo={jogo.titulo} descricao={jogo.descricao} preco={jogo.preco} />
      ))}
    </section>
  );
};

export default Galeria;
