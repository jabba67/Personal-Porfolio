import React from 'react'
import '../App.css';

export default function Welcome() {
    return (
        <div>
            <div id = "WelcomeSection">
                <center>
                <h1>Tyler Rubin</h1>
                <div className="WelcomeSubTitle">Designer • Developer</div>
                <div class="grid-container">
                    <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>
                    <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>
                    <div class="grid-item"><div className="skillIcon"><img src="https://www.flaticon.com/svg/static/icons/svg/984/984196.svg"/></div></div>  
                    {/* Test Animation<div class="grid-item"><img height={300} width={500} class="clip-animation" src="https://www.carscoops.com/wp-content/uploads/2019/12/nissan-gt-r-liberty-walk-tuning-0.jpg"></img></div>*/} 
                    
                </div>
                </center>
            </div>
        </div>
    )
}
