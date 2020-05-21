import React from 'react';
import 'materialize-css';
import { Container, Row, Col, Button } from 'react-materialize';

function About() {
  return (
    <Container className='pages'>
      <Row>
        <div className='center-align'>
          <h2>FULL STACK DEVELOPER</h2>
          <p>Awaiting new challenges.</p>
        </div>
        <Col m={3}></Col>
        <Col s={12} m={6} >
          <div>
            <img id='profile-pic' className='responsive image' src='.././assets/images/profileBW.jpg' />
            <p> I have always had a strong interest in technology. Going back to the days of the early
            video game consoles, I found it fascinating that lines of computer code could translate into sophisticated,
          interactive experiences. The possibilities that technology provide are limited only by the imagination.</p>
          </div>
          <div className='center-align'>
            <Button>Learn More</Button>
          </div>

        </Col>
        <Col m={3}></Col>
      </Row>



    </Container>
  );
}

export default About;
