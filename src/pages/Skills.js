import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Skills() {
  return (
    <Container className='pages'>
    <Row>
      <h5 className='center-align'>SKILLS</h5>

      <Col s={2}></Col>
      <Col s={2} >
        <div className='center-align'>
          <h6>LANGUAGES</h6>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>JSX</li>
          </ul>
        </div>
      </Col>
      <Col s={2}>
        <div className='center-align'>
          <h6>FRAMEWORKS/LIBRARIES</h6>
          <ul>
            <li>BOOTSTRAP</li>
            <li>MATERIALIZE</li>
            <li>JQUERY</li>
            <li>REACT</li>
          </ul>
        </div>
      </Col>
      <Col s={2}>
        <div className='center-align'>
          <h6>TOOLS</h6>
          <ul>
            <li>GITHUB</li>
            <li>GIT BASH</li>
            <li>VISUAL STUDIO CODE</li>
            <li>NODE JS</li>
          </ul>
        </div>
      </Col>
      <Col s={2}>
        <div className='center-align'>
          <h6>OTHER</h6>
          <ul>
            <li>SCRUM</li>
            <li>KANBAN</li>
            <li>AGILE DEV</li>
          </ul>
        </div>
      </Col>
      <Col s={2}></Col>
    </Row>
    </Container>
  );
}

export default Skills;
