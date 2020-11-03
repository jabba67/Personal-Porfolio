import React from 'react';
import Footer from './Footer';
import './App.css';

class App extends React.Component{


  render()
  {
    return(
      <div className="App">
      <div id = "WelcomeSection">
        <center>
          <h1>Tyler Rubin</h1>
          <h5>Designer • Developer</h5>

          <div class="grid-container">
            <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>
            <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>
            <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>
            <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>    
            <div class="grid-item"><img class="clip-animation" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/building-to-be-clipped.jpg"></img></div>
            <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>  
            
          </div>
        </center>
      </div>
        <section id = "AboutMe">
          <p>About Me</p>
          <p>About Me</p>
          <p>About Me</p>
          <p>About Me</p>
        </section>
        <section id = "Skills">
         <p>Skills</p>
         <p>Skills</p>
         <p>Skills</p>
         <p>Skills</p>
         <p>Skills</p>
        </section>
        <img height={425} alt="Placeholder" width={350} src ="https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
