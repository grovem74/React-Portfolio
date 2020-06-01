import React from 'react';
import { Container, Row, Col } from 'react-materialize';

function Projects() {
  return (
    <Container className='pages' id='projects'>
      <Row>
        <Col s={1}></Col>
        <Col s={10} className='center-align'>
          <h4 >PROJECTS</h4>
          <br></br><br></br><br></br>
          <h6 className='center-align subtitle'>- Team Projects -</h6>
          <br></br><br></br><br></br>
        </Col>
        <Col s={1}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>entertainMe</span>
          <p id="em" className="middle reverse">entertainME allows you to search for the latest in trending Movies and TV Shows. Your one stop shop for all things entertainment. This application was built MongoDB, Express, React and Node JS. This team project was coordinated 100% online and required the use of scrum and kanban project management concepts.</p>

          <img src={require("../assets/images/entertainMe.PNG")} alt="entertainMe" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://github.com/Janviermbilizi/entertain-me" target="_BLANK">Site</a>
              <a className="btn-flat" href="https://github.com/Janviermbilizi/entertain-me" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>Your City Guide</span>
          <p id="ycg" className="middle reverse">Search for upcoming events in a city near you! This application was built
          using HTML, Materialize CSS and Javascript. The AJAX method was utilized to obtain data from 3rd-party APIs
          for events and restaurants in several major cities. This team project required the use of scrum and kanban
          project
          management concepts.</p>

          <img src="https://media.giphy.com/media/hT7Gew4qmRANxacNv6/giphy.gif" alt="Your City Guide" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://grovem74.github.io/Project1-Your-City-Guide/" target="_BLANK">Site</a>
              <a className="btn-flat" href="https://github.com/grovem74/Project1-Your-City-Guide" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title' >Be Green</span>
          <p id="bg" className="middle reverse">Get recycling tips, find recycling locations and connect on our message
          board. Change your habits, change the world. This application was built using HTML, Materialize CSS and
          Javascript for the front end and Node.js. The following NPM packages were used: express, express-handlebars,
          express-session, passport, mySQL, sequelize and bcrypt. This team project required the use of scrum and kanban
          project management concepts.</p>

          <img src={require("../assets/images/beGreen.png")} alt="Be" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://dubootcampbegreen.herokuapp.com/signup" target="_BLANK">Site</a>
              <a className="btn-flat" href="https://github.com/grovem74/Project2-Be-Green" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={1}></Col>
        <Col s={10} className='center-align'>
          <h6 className='center-align subtitle'>- Solo Projects -</h6>
          <br></br><br></br><br></br>
        </Col>
        <Col s={1}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>Eat-Da-Burger Green</span>
          <p id="edb" className="middle reverse">Customize a burger, then devour it! This application was built
          using HTML, Materialize CSS and Javascript for the front end and node.js. The following NPM packages were
          required: express, express-handlebars and mysql. An SQL server was used to store the burger data.</p>

          <img src={require("../assets/images/eatDaBurger.PNG")} alt="Eat-Da-Burger" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://du-eat-da-burger.herokuapp.com/" target="_BLANK">Site</a>
              <a className="btn-flat" href="https://github.com/grovem74/burger" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>README Generator</span>
          <p id="rg" className="middle reverse">Easily a create a README file for your next project. This application was
          built using Node.js. The following NPM packages were required: axios and enquirer.</p>

          <img src={require("../assets/images/README.gif")} alt="README Generator" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://github.com/grovem74/README-Generator" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>Team Tracker</span>
          <p id="tt" className="middle reverse">Track and update information about your team including roles, departments and
          salaries. This application was built using Node.js. The following NPM packages were required: colors,
          console.table, enquirer and mysql. An SQL server was used to store the employee information.</p>

          <img src={require("../assets/images/TeamTracker.gif")} alt="Team Tracker" className="project-pics" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://github.com/grovem74/Employee-Tracker" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

      <Row>
        <Col s={2}></Col>
        <Col s={8} className='center-align'>
          <span className='title'>Weather Dashboard</span>
          <p id="wd" className="middle reverse">Check current and future weather conditions for cities around the world. This
          application was built using HTML, Bootstrap CSS and Javascript. The AJAX method was utilized to obtain data
          from a 3rd-party APIs for current weather conditions and extended forcasts.</p>

          <img src="https://media.giphy.com/media/fX1acoV0V1NtJiytfQ/giphy.gif" alt="Weather Dashboard"
            className="project-pics" alt="Weather Dashboard" />
          <div>
            <div className="center-align project-buttons">
              <a className="btn-flat" href="https://grovem74.github.io/weatherDashboard/" target="_BLANK">Site</a>
              <a className="btn-flat" href="https://github.com/grovem74/weatherDashboard" target="_BLANK">Repo</a>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </Col>
        <Col s={2}></Col>
      </Row>

    </Container>
  )
}
export default Projects;
