import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Contact() {
  return (
    <Container className='pages' id='contact'>
      <Row>
        <Col m={3}></Col>
        <Col s={12} m={6} >
          <div className='center-align'>
            <i className="material-icons" id="chat">chat_bubble</i><br></br><br></br>
            <h5 id="talk-title">Let's Talk.</h5>
            <p id="talk" className="middle">Every great relationship starts with a conversation.<br></br> I would love to chat with
          you about your next project.</p><br></br>
            <a className="btn-flat" href="mailto:matthewg74@gmail.com" >Contact Me</a>
          </div>

        </Col>
        <Col m={3}></Col>
      </Row>



    </Container>
  );
}

export default Contact;
