import React from 'react';
import emailjs from 'emailjs-com';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import apikeys from './apikeys'

function ContactForm(){

    const onSubmit=(e)=>{
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('service_x8jefg2', 'template_f14q5rs', e.target, 'user_N7zbqh9EM8xnepB7Ne1IS')
        .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error has occurred, Please try again',error.text)
        })
        }

    return(
    <div>
        <title>Contact Us</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        
        <div class="container">
            <div class="row justify-content-center">
                {/*Left Column*/}
                <div class="col-lg-6 left-column">
                    <div class="tittle-container text-center">
                        <h2 class="tittle">Get in Touch</h2>
                        <h4 class="subtitle">I would love to hear from you</h4>
                    </div>
                    {/*Form*/}
                           {/*Name*/}
                           <form className="form" onSubmit={onSubmit}>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Your Name</label>
                                <div class="col-lg-8">
                                    <input type="text" name="name" placeholder="Name" style={{width: "320px"}} class="form-control form-control-sm" className="form_input"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Your Phone Number</label>
                                <div class="col-lg-8">
                                    <input type="tel" placeholder="Phone" name="Phone" style={{width: "320px"}} class="form-control form-control-sm" className="form_input"/>
                                </div>
                            </div>
                           {/*Email*/}
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Email Address</label>
                                <div class="col-lg-8">
                                    <input type="email" placeholder="Email" name="email" style={{width: "320px"}} class="form-control form-control-sm" className="form_input"/>
                                </div>
                            </div>
                           {/*Message*/}
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Message</label>
                                <div class="col-lg-8">
                                    <textarea class="form-control form-control-sm"  name="message" rows="5" required></textarea>
                                </div>
                                    
                            </div>
                           {/*Submit Button*/}
                            <div class="text-right">
                                <input class="btn btn-submit" type="submit" value="Submit"/>
                            </div>
                            </form>
                </div>
                {/*End Left Column*/}

                {/*Right Column*/}
                <div class="col-lg-4 right-column">
                     {/*Company Info*/}
                    <div class="contact-info">
                    <h3>Contact Info</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> San Diego</p>
                        <p><FontAwesomeIcon icon={faMobile}/> +1 (858)-342-0865</p>
                        <p><FontAwesomeIcon icon={faInbox}/> tyler.rubin67@yahoo.com</p>
                        <p><FontAwesomeIcon icon={faLinkedinIn}/><a style={{color: "lightgreen"}} href="https://www.linkedin.com/in/tyler-rubin/"> https://www.linkedin.com/in/tyler-rubin/</a></p>
                        
                    </div>
                  {/*Social Icons*/}
                    <div class="social">
                        <div class="text-center center-block">
                            {/*<a href="#"><i class="icon fab fa-twitter"></i></a>
                            <a href="#"><i class="icon fab fa-linkedin-in"></i></a>*/}
                        </div>
                    </div>
                </div>
               {/* End Right Column*/}
            </div>
        </div>
        </div>
    );
}

export default ContactForm;