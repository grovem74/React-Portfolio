import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav'
import About from '../src/pages/About'
import Skills from '../src/pages/Skills'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'
import Resume from '../src/pages/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Switch>
          <Route exact path="/resume" >
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
