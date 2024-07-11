import Cabecalho from './components/Cabecalho';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Rodape from './components/Rodape';

const App = () => {
  return (
    <section className="App">
      <Cabecalho />
      <Banner />
      <Galeria />
      <Rodape />
    </section>
  );
};

export default App;