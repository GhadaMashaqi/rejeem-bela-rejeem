import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {

    return(
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-7">
                <div className="right">
                    <h2>Get A Quote</h2>
                    <form action="">
                        <label htmlFor="">Your name *</label>
                        <input type="text" required/>
                        <label htmlFor="">Email address*</label>
                        <input type="email" required/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactForm;