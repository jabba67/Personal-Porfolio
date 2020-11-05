import React from 'react';
import '../App.css';

function Footer(){
    return(
    <div className="Footer">
        <section id="footer">
            <footer className = "mt-16 flex flex-col justify-center items-center">
                        This site was made by Tyler Rubin
                        <center><a style={{color: "lightgreen"}} href="https://www.linkedin.com/in/tyler-rubin/">LinkedIn</a></center>
                        <center><a style={{color: "lightgreen"}} href="https://github.com/jabba67">Github</a></center>
            </footer>
        </section>
    </div>
    );
}
export default Footer;
