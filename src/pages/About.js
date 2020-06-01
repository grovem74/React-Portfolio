import React from 'react';
import 'materialize-css';
import { Container, Row, Col, Button } from 'react-materialize';

function About() {
  return (
    <Container className='pages' id="about">
      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <h2>FULL STACK DEVELOPER</h2>
          <br></br>
        </Col>
        <Col s={3}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span>Awaiting new challenges.</span>
          <br></br>
          <br></br>

        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col m={1}></Col>
        <Col s={12} m={10}>
          <div>
            <img id='profile-pic' className='responsive image' src={require('../assets/images/profileBW.jpg')} />
            <p> I have always had a strong interest in technology. Going back to the days of the early
            video game consoles, I found it fascinating that lines of computer code could translate into sophisticated,
          interactive experiences. The possibilities that technology provide are limited only by the imagination.</p>
          </div>
          <div className='center-align'>
            <a className='btn-flat learn' href={require("../assets/Resume.pdf")}>Download Resume</a>
          </div>
        </Col>
        <Col m={1}></Col>
      </Row>



    </Container>
  );
}

export default About;
