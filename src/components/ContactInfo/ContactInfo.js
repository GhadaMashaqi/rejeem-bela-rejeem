import React from 'react';
import './ContactInfo.css';
import phone from '../../assets/images/phone.svg';
import mobile from '../../assets/images/mobile.svg';
import email from '../../assets/images/email.svg';
import location from '../../assets/images/location.svg';
const ContactInfo = (props) => {

    return(
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-5">
                <div className="left">
                    <h3>Get Info</h3>
                    <p className="info">There are many variations of have suffered.</p>
                    <p className="pink-text">Phone</p>
                    <p><img src={phone} alt=""/> +962 6 345954</p>
                    <p><img src={mobile} alt=""/>+962 79 000 0011</p>
                    <hr/>
                    <p className="pink-text">Email</p>
                    <p><img src={email} alt=""/>info@Rejeembelarejeem.com</p>
                    <hr/>
                    <p><img src={location} alt=""/>JORDAN <span>Amman, Khalda, Wasfi Al Tal Street</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactInfo;