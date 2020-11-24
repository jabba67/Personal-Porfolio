import React from 'react'
import '../App.css';

export default function Navbar() {

    const scrollAbout = () =>{
        window.scrollTo({top: 970, behavior: 'smooth'});
      };
      const scrollSkills = () =>{
        window.scrollTo({top: 1670, behavior: 'smooth'});
      };
      const scrollProjects = () =>{
        window.scrollTo({top: 2270, behavior: 'smooth'});
      };
      const scrollContact = () =>{
        window.scrollTo({top: 2870, behavior: 'smooth'});
      };

    return (
        <div>
            <div className="navbar row-sm-3">
                <div class="containerNav">
                        <ul>
                            <li class="one"><a className="navLink" href="/About" onClick={scrollAbout}>About</a></li>
                            <li class="two"><a className="navLink" href="/Skills" onClick={scrollSkills}>Skills</a></li>
                            <li class="three"><a className="navLink" href="/Projects" onClick={scrollProjects}>Projects</a></li>
                            <li class="four"><a className="navLink" href="/Contacts" onClick={scrollContact}>Contact</a></li>
                            <hr className="hrNav" />
                        </ul>
                    </div>    
            </div>      
        </div>
    )
}
