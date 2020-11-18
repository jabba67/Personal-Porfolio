import React from 'react';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import ScrollArrow from './Components/Utilities/ScrollingWrapper';
import './App.css';

export default class App extends React.Component{
  render()
  {
    return(
      <div className="App">
        <Welcome/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactForm/>
        <Footer/>
        <ScrollArrow/>
      </div>
    );
  }
}
