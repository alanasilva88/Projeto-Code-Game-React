import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <img src="https://media.istockphoto.com/id/1432498457/pt/foto/question-mark-in-magnifying-glass.jpg?s=612x612&w=0&k=20&c=-thK3gvgZXjvEoHqBrS6NyBD35yawoMf0no9wsvFCt8=" alt="Logo" width={200}/>
                    <h1>Ops!</h1>
                    <p className="lead">404. Página não encontrada.</p>
                    <Link to="/" className='text-decoration-none'>
                        <Button variant="outline-dark">Voltar para Home</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
