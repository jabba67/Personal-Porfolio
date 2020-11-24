import React from 'react'
import Navbar from './Navbar';
//import pixelsVid from '../Assets/aerialBeach_video.mp4';
import '../App.css';

//"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"

export default function Welcome() {

    return (
        <div>  
            <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src={"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"} type="video/mp4"/>
            </video>
            <div class="container">
            <div id="test"><div class="text-center align-items-center"><Navbar/>
                    <div class="WelcomeTitle">Tyler Rubin</div>
                    <div className = "WelcomeTitleUnderTitle">"Be Relentless in Pursuit of Success"</div>
                    <div className="WelcomeSubTitle">Designer • Developer</div>
                    <hr class="solid" color="white" style={{width:"500px"}}  />
                    <div className ="buttonHover"><button style={{"font-size":"20px", "border-radius": "8px"}} className="learnMoreButton">Learn More</button></div>
                </div></div>
            </div>
            </header>
        </div>
    )
}
