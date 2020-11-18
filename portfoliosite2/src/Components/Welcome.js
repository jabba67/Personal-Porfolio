import React from 'react'
import Navbar from './Navbar';
import '../App.css';

export default function Welcome() {
    return (
        <div>  
            <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
            </video>
            <div class="container">
                <div class="text-center align-items-center"><Navbar/>
                    <div class="WelcomeTitle">Tyler Rubin
                    <h3>"Be Relentless in Pursuit of Success"</h3></div>
                    <div className="WelcomeSubTitle">Designer • Developer</div>
                    
                </div>
                <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                        <div className = "headerText">
                            Solving Unique Problems with Unique Solutions
                            {/*<button>Contact</button>*/}
                        </div>
                        <button style={{"font-size":"20px"}} className="learnMoreButton">Learn More</button>
                    </div>
                </div>
                
            </div>
            </header>
        </div>
    )
}
