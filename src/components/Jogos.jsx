import { Button, Card } from "react-bootstrap";


const Jogos = (props) => {
  return (
    <main className="py-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2024/05/24/16/40/ai-generated-8785422_1280.jpg" />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.descricao}
          </Card.Text>
          <Card.Text>
            {props.preco}
          </Card.Text>
          <Button variant="outline-dark">Comprar</Button>
        </Card.Body>
      </Card>
    </main>

  );
};

export default Jogos;


