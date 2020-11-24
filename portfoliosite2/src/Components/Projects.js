import React from 'react'
import FadeInSection from './Utilities/FadeInText';
import '../App.css';

export default function Projects() {
    return (
        <div>
            <section id = "Projects"><FadeInSection>
            <div className="projectsTitle">Some of My Projects</div>
            <div class="grid-container-projects"> 
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                {/* ===== Row 2 ===== */}
                {/*<div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>
                <div className="card">
                    <h3>Title Here</h3>
                    Test Here Test Here Test Here
                </div>*/}
            </div>
            </FadeInSection></section>
        </div>
    )
}
