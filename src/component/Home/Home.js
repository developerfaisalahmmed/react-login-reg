import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col, Container, Button } from 'react-bootstrap';



function Home (){
    return(

<Container className='pt-5'>
    <Row>
        <Col md={6} className='mx-auto'>
                <h2> This is Home Page </h2>
        </Col>
    </Row>
</Container>

    );
}

export default Home;