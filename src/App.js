import React from 'react';
import Nav from './components/Nav'
import About from '../src/pages/About'
import Skills from '../src/pages/Skills'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
