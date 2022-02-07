import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col, Container, Button } from 'react-bootstrap';
function Regiester (){
    return(

<Container className='pt-5'>
    <Row>
        <Col md={6} className='mx-auto'>
        <Form>

        <Form.Group className="mb-3" controlId="name">
    <Form.Label for="name">Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>



  <Form.Group className="mb-3" controlId="email">
    <Form.Label for="email">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label for="password">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="confirm_password">
    <Form.Label for="confirm_password">Confirm Password</Form.Label>
    <Form.Control type="password"  />
  </Form.Group>



  <Form.Group className="mb-3" controlId="checkbox">
    <Form.Check for="checkbox" type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
  Registration
  </Button>
</Form>
        </Col>
    </Row>
</Container>

    );
}

export default Regiester;