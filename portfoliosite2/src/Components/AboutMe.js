import React from 'react';
import FadeInSection from './Utilities/FadeInText';
import '../App.css';

import ProfilePic from '../Assets/ProfilePic.jpg'

export default function AboutMe() {
    return (
        <div>
            <section id = "AboutMe">
                <div class ="image-cropper">
                    <FadeInSection>
                        <div className="aboutMeTitle">About Me</div>
                        <div className="Bio"><p>Tyler is currently a freelance Full Stack Software Engineer, seeking a new opportunity as a Software Engineer at a great company.</p>

                        <p>Tyler's dream is to truly make a difference in the world with the code that he creates. He is experienced with C#, .Net Core, MySQL, and ReactJs and has a variety of skills that can be tailored to a team’s needs. He is a self-starter looking for fun and complex problems to solve with optimal and simple solutions. He also has competency to understand/apply modern concepts, technologies, languages & frameworks throughout a fluctuating environment.</p>

                        <p>Tyler is continually learning and expanding his education, where he is currently studying for the AWS Cloud Essentials Certification, as well as learning UI/UX designs for web applications.</p>

                        <p>When Tyler is not learning new skills chances are he is reading about the latest tech company developments, Riding Bike Trails, Snowboarding, or Working on his car.  </p>
                        </div>
                        <hr class="solid" style={{width:"600px"}}  />
                            <img 
                                alt="Profile" 
                                src = {ProfilePic} 
                                class ="profile-pic"
                                //style={{width: 280, height: 400, borderRadius: "50%", }} 
                            />
                    </FadeInSection>
                </div></section>
        </div>
    )
}
