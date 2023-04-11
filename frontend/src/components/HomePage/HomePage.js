import React from 'react';
import { NavBar } from '../NavBar';
import './HomePage.css';
// import { Footer } from '../Footer';
import { Header } from '../Header';
import Container from 'react-bootstrap/Container';

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            {/* <Header /> */}
            <Container>
                <div className="main pt-5" style={{clear: 'both'}}>
                    <p>Page main contents</p>
                </div>
            {/* <Footer /> */}
            </Container>
        </div>
    )
}