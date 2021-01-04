//This component is to render the header navigation of this application


import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Navbar expand="md" className="flex navbar-dark">
                        <Navbar.Brand className="brand-name" href="/">
                            Shade
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/top_rated" activeClassName="active">All-time favorites</Nav.Link>
                                <Nav.Link href="/popular" activeClassName="active">Popular Now</Nav.Link>
                            </Nav>
                            <SearchBox />
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        )
    }
}

export default Header;