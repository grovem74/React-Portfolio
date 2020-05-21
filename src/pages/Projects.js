import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Projects() {
  return (
    <Container className='pages'>
      <Row>
        <Col s={1}></Col>
        <Col s={10} className='center-align'>
          <h5 >PROJECTS</h5>
          <h6 id='team' className='center-align'>Team Projects</h6>
        </Col>
        <Col s={1}></Col>
      </Row>


      <Row>
        <Col s={2} className='red'></Col>
        <Col s={8} className='center-align'>
          <h6>Your City Guide</h6>
          <p id="ycg" class="middle reverse">Search for upcoming events in a city near you! This application was built
          using HTML, Materialize CSS and Javascript. The AJAX method was utilized to obtain data from 3rd-party APIs
          for events and restaurants in several major cities. This team project required the use of scrum and kanban
          project
          management concepts.</p>

          <img src="https://media.giphy.com/media/hT7Gew4qmRANxacNv6/giphy.gif" alt="Your City Guide" class="project-pics" />
          <div>
            <div class="center-align project-buttons">
              <a class="btn-flat" href="https://grovem74.github.io/MY-Project-1/" target="_BLANK">Site</a>
              <a class="btn-flat" href="https://github.com/grovem74/MY-Project-1" target="_BLANK">Repo</a>
            </div>
          </div>
        </Col>
        <Col  s={2} className='red'></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <h6>Be Green</h6>
          <p id="bg" class="middle reverse">Get recycling tips, find recycling locations and connect on our message
          board. Change your habits, change the world. This application was built using HTML, Materialize CSS and
          Javascript for the front end and Node.js. The following NPM packages were used: express, express-handlebars,
          express-session, passport, mySQL, sequelize and bcrypt. This team project required the use of scrum and kanban
          project management concepts.</p>
     
          <img src="/assets/images/beGreen.png" alt="Be" class="project-pics" />
          <div>
            <div class="center-align project-buttons">
              <a class="btn-flat" href="https://dubootcampbegreen.herokuapp.com/signup" target="_BLANK">Site</a>
              <a class="btn-flat" href="https://github.com/grovem74/Project2-Be-Green" target="_BLANK">Repo</a>
            </div>
          </div>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={1}></Col>
        <Col s={10} className='center-align'>
          <h6 id='team'>Solo Projects</h6>
        </Col>
        <Col s={1}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <h6>Eat-Da-Burger Green</h6>
          <p id="bg" class="middle reverse">Customize a burger, then devour it! This application was built
          using HTML, Materialize CSS and Javascript for the front end and node.js. The following NPM packages were
          required: express, express-handlebars and mysql. An SQL server was used to store the burger data.</p>
     
          <img src="/assets/images/eatDaBurger.png" alt="BEat-Da-Burger" class="project-pics" />
          <div>
            <div class="center-align project-buttons">
              <a class="btn-flat" href="https://du-eat-da-burger.herokuapp.com/" target="_BLANK">Site</a>
              <a class="btn-flat" href="https://github.com/grovem74/burger" target="_BLANK">Repo</a>
            </div>
          </div>
        </Col>
        <Col s={2}></Col>
      </Row>

    </Container>
  )
}
export default Projects;
