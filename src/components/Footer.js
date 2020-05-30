import React from 'react';
import { Row, Col, Footer } from 'react-materialize';


function SiteFooter() {
  return (
    //  <Footer className='footer'/>

    <Footer
      className="page-footer"
      copyrights="© 2020 Matthew Grove (Web developer)"
      links={
        <div>
          <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/matthewgrove74" target="_BLANK"><i
            class="fab fa-linkedin social"></i></a>
          <a class="grey-text text-lighten-3" href="https://github.com/grovem74" target="_BLANK"><i
            class="fab fa-github social"></i></a>
          <a class="grey-text text-lighten-3" href="mailto:matthewg74@gmail.com" target="_BLANK"><i
            class="fas fa-envelope social"></i></a>
        </div>
      }
    >
      {/* <Row>
        <Col s={1}></Col>
        <Col s={10} className='red' className="center-align">
        <ul><li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/matthewgrove74" target="_BLANK"><i
            class="fab fa-linkedin social"></i></a></li>
         <li><a class="grey-text text-lighten-3" href="https://github.com/grovem74" target="_BLANK"><i
            class="fab fa-github social"></i></a></li>
         <li><a class="grey-text text-lighten-3" href="mailto:matthewg74@gmail.com" target="_BLANK"><i
            class="fas fa-envelope social"></i></a></li>
            </ul>
        </Col>
        <Col s={1}></Col>
      </Row> */}

    </Footer>
  );
}

export default SiteFooter;
