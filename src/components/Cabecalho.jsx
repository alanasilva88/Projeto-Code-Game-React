import "./Cabecalho.css";
import logo from "../assets/logo.gif";
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";


const Cabecalho = () => {
  
  return (
    <header>
     <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <img src={logo} alt="Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Jogos</Nav.Link>
            <NavDropdown title="Portal do Usuário" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/cadastro">
                Cadastro
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contato">
                Contato
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Digite seu jogo aqui"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
    </header>
  );
};

export default Cabecalho;
