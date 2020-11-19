import React from 'react';
import FadeInSection from './Utilities/FadeInText';
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
// import { faNpm } from "@fortawesome/free-brands-svg-icons";
// import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';

export default function Skills() {
    return (
        <div>
            <section id = "Skills"><div><FadeInSection>
            <div className="skillsTitle">My Skills</div>
            <div class="grid-container-skills"> 
                <div style={{"borderBottom":"5px solid"}}>
                    <FontAwesomeIcon  color="white" size="5x" icon = {faReact}/>
                </div>
                <div style={{"borderBottom":"5px solid"}}>
                    <FontAwesomeIcon color="white" size="5x" icon = {faDatabase}/>
                </div>
                
                <div style={{"borderBottom":"5px solid"}}>
                    <FontAwesomeIcon color="white" size="5x" icon = {faJs}/>
                </div>
                <div className="skillDescription">React</div>
                <div className="skillDescription">SQL</div>
                <div className="skillDescription">Javascript</div>
                <div style={{"borderBottom":"5px solid"}}>
                    <div className="Texticon">.NET</div>
                </div>
                <div style={{"borderBottom":"5px solid"}}>
                    <div className="Texticon">C#</div>
                </div>
                <div style={{"borderBottom":"5px solid"}}>
                    <div className="Texticon">SQL</div>
                </div>
                <div className="skillDescription">.Net Core</div>
                <div className="skillDescription">C Sharp / Linq</div>
                <div className="skillDescription">SQL</div>
            </div>
            </FadeInSection></div></section>
        </div>
    )
}
