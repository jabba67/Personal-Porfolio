import React from 'react';

function ContactForm(){
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
                        <h4 class="subtitle">We'd love hear from you</h4>
                    </div>
                    {/*Form*/}
                           {/*Name*/}
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Your Name</label>
                                <div class="col-lg-8">
                                    <input type="text" name="name" class="form-control form-control-sm"/>
                                </div>
                            </div>
                           {/*Email*/}
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Email Adress</label>
                                <div class="col-lg-8">
                                    <input type="email" name="email" class="form-control form-control-sm"/>
                                </div>
                            </div>
                           {/*Message*/}
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Message</label>
                                <div class="col-lg-8">
                                    <textarea class="form-control form-control-sm" name="message" rows="5" required></textarea>
                                </div>
                                    
                            </div>
                           {/*Submit Button*/}
                            <div class="text-right">
                                <input class="btn btn-submit" type="submit" value="Submit"/>
                            </div>
                </div>
                {/*End Left Coloumn*/}

                {/*Right Column*/}
                <div class="col-lg-4 right-column">
                     {/*Company Info*/}
                    <div class="contact-info">
                    <h3>Contact Info</h3>
                        <p><i class="fas fa-map-marker-alt"></i>&nbsp; 80 Guild Street, London, N7 8EP</p>
                        <p><i class="fas fa-phone-alt"></i>&nbsp; +44 7700 900041</p>
                        <p><i class="fas fa-envelope"></i>&nbsp; support@example.com</p>
                    </div>
                  {/*Social Icons*/}
                    <div class="social">
                        <div class="text-center center-block">
                            <a href="#"><i class="icon fab fa-facebook-f"></i></a>
                            <a href="#"><i class="icon fab fa-twitter"></i></a>
                            <a href="#"><i class="icon fab fa-linkedin-in"></i></a>
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