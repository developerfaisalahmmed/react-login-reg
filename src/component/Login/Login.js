import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col, Container, Button } from 'react-bootstrap';



function Login (){
    return(

<Container className='pt-5'>
    <Row>
        <Col md={6} className='mx-auto'>
        <Form>
        <Form.Group className="mb-3" controlId="email">
    <Form.Label for="email">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label for="password">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Col>
    </Row>
</Container>

    );
}

export default Login;