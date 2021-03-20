import React from 'react';
import './ContactUs.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactMap from '../../components/ContactMap/ContactMap';
const ContactUs = (props) => {

    return(
        <React.Fragment>
            <section id="contact-us">
                <div className="container">
                    <div className="row">
                        <ContactInfo/>
                        <ContactForm/>
                    </div>
                </div>
            </section>
            <ContactMap/>
        </React.Fragment>
    )
}
export default ContactUs;