
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function Navigation() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ margin:"5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse style={{ margin:"0px 0 0 75%" }} id="basic-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link href="#Login">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{'  '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation 