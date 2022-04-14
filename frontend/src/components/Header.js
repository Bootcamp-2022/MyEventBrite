import React from 'react'
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../actions/userActions'

const Header = () => {

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart;

 const dispatch = useDispatch()
const userLogin = useSelector((state)=> state.userLogin)
const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
    <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand className ='brand'>eventbrite</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to= "/tickets">
            <Nav.Link >{cartItems.reduce((acc, item) => acc + item.qty1, 0)}<i className="fa-solid fa-ticket"></i> Tickets</Nav.Link>
            </LinkContainer>

            {userInfo? (
        <NavDropdown title={userInfo.name} id='username'>
        <LinkContainer to='/profile'>
          <NavDropdown.Item>Profile</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Item onClick={logoutHandler}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
       ) : <LinkContainer to="/login">
       <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
       </LinkContainer>}  
       </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
       
    
  )
}

export default Header


