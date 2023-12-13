import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavComponent() {
    return (<>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><Link to='/'>3D Print Paradise</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><Link to='/'></Link></Nav.Link>
                            <Nav.Link><Link to='/login'>Employee Login</Link></Nav.Link>
                            <NavDropdown title="Clients" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to='/submit'>Submit Request</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/portfolio'>Our Work</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/contact'>Contact</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  </>);
  }
  
  export default NavComponent;