import React from 'react'
import Navbar from './Navbar';
import pixelsVid from '../Assets/twoToneSmoke_video.mp4';
import '../App.css';

//"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"

export default function Welcome() {
    return (
        <div>  
            <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src={pixelsVid} type="video/mp4"/>
            </video>
            <div class="container">
                <div class="text-center align-items-center"><Navbar/>
                    <div class="WelcomeTitle">Tyler Rubin
                    <h3>"Be Relentless in Pursuit of Success"</h3></div>
                    <div className="WelcomeSubTitle">Designer • Developer</div>
                    
                </div>
                <div class="d-flex h-100 text-center align-items-center">
                    <div class="text-white">
                        <div className = "headerText">
                            Find Out How I Leverage Technology to Improve Life
                        </div>
                        <button style={{"font-size":"20px", "border-radius": "8px"}} className="learnMoreButton">Learn More</button>
                        <hr class="solid" color="white" style={{width:"500px"}}  />
                    </div>
                </div>
                
            </div>
            </header>
        </div>
    )
}
