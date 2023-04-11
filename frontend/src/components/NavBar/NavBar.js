import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">MegaMan NT Warrior TCG Fan Gallery</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}
