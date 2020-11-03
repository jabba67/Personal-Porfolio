import React from 'react';
import Footer from './Footer';
import './App.css';

class App extends React.Component{


  render()
  {
    return(
      <div className="App">
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


        <i class="sprite sprite-ConvertThisToCss"></i>
        <i class="sprite sprite-github"></i>
        <i class="sprite sprite-gmail"></i>
        <i class="sprite sprite-linkedin"></i>
        <i class="sprite sprite-stackoverflow"></i>
        <i class="sprite sprite-tumblr"></i>
        <i class="sprite sprite-twitter"></i>

        <Footer/>
      </div>
    );
  }
}

export default App;
