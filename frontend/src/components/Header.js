import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
  return (
     <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">EventBrite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className="fa-solid fa-ticket"></i> Tickets</Nav.Link>
              <Nav.Link href="/login"><i className='fa-regular fa-user'></i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header


