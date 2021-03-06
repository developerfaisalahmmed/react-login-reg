import React, {Component} from 'react';
import { Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
class NavberNav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link > <Link to="/"> Home </Link> </Nav.Link>
                                <Nav.Link > <Link to="/login"> Login </Link> </Nav.Link>
                                <Nav.Link > <Link to="/register"> Register </Link> </Nav.Link>

                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavberNav;