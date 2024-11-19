import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function TabsExample() {
  return (
    
    <Container>
      <Nav
        className="d-flex align-items-center"
        variant="tabs"
        defaultActiveKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">All News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Html</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            JavaScript
          </Nav.Link>
        </Nav.Item>

        <Navbar className="ms-auto"  expand="lg">
        
          <Navbar.Toggle aria-controls="navbar-search" className="ms-auto" />
          <Navbar.Collapse id="navbar-search" className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
          </Navbar.Collapse>
        
        </Navbar>
      </Nav>
      
    </Container>
    
  );
}

export default TabsExample;
