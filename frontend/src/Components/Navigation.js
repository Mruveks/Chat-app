import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../Assets/chatlogo.jpg';
import { useLogoutUserMutation } from '../Services/appApi';

const Navigation = () => {

    const [logoutUser] = useLogoutUserMutation();
    const user = useSelector((state) => state.user);

    async function handleLogout(e){
        e.preventDefault();
        await logoutUser();
        window.location.replace("/")
    }

    
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} style={{ width: 40, height: 40}}/>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                {!user && ( 
                    <LinkContainer to="/login">
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                )}
                <LinkContainer to="/chat">
                    <Nav.Link >Chat</Nav.Link>
                </LinkContainer>
                {user && (
                <NavDropdown title={

                    <>
                    <img src={user.picture} style={{width: 30, marginRight: 10, objectFit: "cover", borderRadius:"50px"}} />
                    {user.name}
                    </>

                } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Item>
                        <Button variant="danger" onClick={handleLogout}>
                            Logout
                        </Button>
                    </NavDropdown.Item>
              </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigation
