import React from 'react'
import '../App.css';

import ProfilePic from '../Assets/ProfilePic.jpg'

export default function AboutMe() {
    return (
        <div>
            <section id = "AboutMe">
            <div class ="image-cropper">
                <img 
                    alt="Profile" 
                    src = {ProfilePic} 
                    class ="profile-pic"
                    //style={{width: 280, height: 400, borderRadius: "50%", }} 
                />
            </div>
            <br></br>
            <br></br>
          <p>About Me</p>
          <p>About Me</p>
          <p>About Me</p>
          <p>About Me</p>
        </section>
        </div>
    )
}
