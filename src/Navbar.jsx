import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextLinkExample() {
  return (
    <Navbar className="bg-dark-subtle">
      <Container>
        <Navbar.Brand href="#home">Tech News</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        

          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
