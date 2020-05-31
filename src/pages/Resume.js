import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Resume() {
  return (
    <Container className='pages' id='skills'>
      <Row id="resume-details">
        <Col m={4}></Col>
        <Col m={4}>
          <div id="header"></div>
          <p className="head">Interests</p>
          <ul className="list">
            <li>Sports</li>
            <li>Cooking</li>
            <li>Blockchain</li>
            <li>Digital entertainment</li>
          </ul>
        </Col>
        <Col m={4}></Col>
      </Row>

      <Row>
        <Col m={4}></Col>
        <Col m={4}>
          <p className="head">Education</p>
          <ul className="list">
            <li className="resume-bold">University Of Phoenix</li>
            <li className="indent">B.S. Information Technology-Visual Communications</li>
            <li className="resume-bold">University Of Denver</li>
            <li className="indent">Full Stack Web Development Bootcamp</li>
          </ul>
        </Col>
        <Col m={4}></Col>
      </Row>

      <Row>
        <Col m={4}></Col>
        <Col m={4}>
          <p className="head">Experience</p>
          <ul className="list">
            <li id="experience" className="resume-bold">Hands-on with the following:</li>
            <div className="indent">
              <li>Nortel DMS switches</li>
              <li>Sonus VOIP and TDM soft switches</li>
              <li>Geoprobe, IRIS, Agilent and Wireshark protocol analyzers</li>
              <li>Sylantro and Broadsoft VOIP platforms</li>
              <li>Cisco, Juniper and Alcatel edge routers</li>
            </div>

          </ul>
        </Col>
        <Col m={4}></Col>
      </Row>

      <Row className="row center-align" id="download-div">
        <a href="./Resume.pdf" id="download" download><i className="material-icons">save_alt</i>&nbsp;download
                resume</a>
      </Row>
    </Container >
  );
}

export default Resume;
