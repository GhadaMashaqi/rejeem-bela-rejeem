import React from 'react';
import './AboutUs.css';
import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';
import about3 from '../../assets/images/about3.png';
import about4 from '../../assets/images/about4.png';
const AboutUs = (props) => {

    return(
        <React.Fragment>
            <section id="about-us">
                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h1>Who Are <span className="pink-text">We ?</span></h1>
                                <p>Rejeem Bela Rejeem is weight control and diet-related company that helps overweight & obese people to lose and maintain their healthy weight through healthy products and well- managed diet to change their lives.You can use the products for a healthy lifestyle to keep you fit and robust.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src={about1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h1>Our <span className="pink-text">Vision</span></h1>
                                <p>Our Vision Is to Enhance the Jordanian Society to Be Free of Obesity & Its Related Diseases</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src={about2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h1>Our <span className="pink-text">Mission</span></h1>
                                <p>Changing our client’s lives from better to the best by getting them to an ideal and stable weight in record time by using the necessary programs and products along with nutritional counseling and follow-up at the highest standards and quality. We are keen to raise awareness of proper nutritional principles to our clients to aid them in maintaining a healthy lifestyle.</p>                        
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src={about3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h1>Our Core <span className="pink-text">Values</span></h1>
                                <ul>
                                    <li>Committed to our promises</li>
                                    <li>Quality</li>
                                    <li>Reliability</li>
                                    <li>Credibility</li>
                                    <li>Empathy</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src={about4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default AboutUs;