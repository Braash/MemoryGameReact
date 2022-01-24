import React from 'react'; // Import the React module from React.
import Navbar from 'react-bootstrap/Navbar'; // Import the React bootstrap package for the 'Navbar' elements.
import Nav from 'react-bootstrap/Nav'; // Imported from React bootstrap.
import Container from 'react-bootstrap/Container'; // Imported from React bootstrap.
import NavDropdown from 'react-bootstrap/NavDropdown'; // Imported from React bootstrap.
import '../App.css'; // Import App stylesheet.
// import Calculator from './Calculator'; // Import Calculator.
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo.png'; // Import logo.

// Display creates the Navbar with a dropdown that allows the user to choose between the Currency converter and the Win! game.
// Navbar imported from react-bootstrap.
function Display(){
  return(
<div>
  <div>
  <header>
    <img className="image"  src={logo}/> {/* Displays logo in header. */}
  </header>
  </div>
  <Navbar id="bar" variant="dark" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="BRAASH"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/MemGame">Memory Game</NavDropdown.Item> {/* Link to MemGame component. */}
            <NavDropdown.Item href="/Howtoplay">How to play</NavDropdown.Item> {/* Link to Howtoplay component. */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
)};


export default Display; // Export Display component.