import React  from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css'
import img from '../../assets/images/testimonials.jpg';
import quote from '../../assets/images/quote.png';
const Testimonials = () =>  {
    return(
        <React.Fragment>
            <section id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h1 className="text-center">What Our Clients <span className="pink-text">Say</span></h1>
                        </div>
                        <OwlCarousel 
                        className="testimonials owl-theme owl-carousel"
                        items={1}
                        margin={20}
                        autoPlay={true}
                        loop
                        > 
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 d-flex testimonials-content">
                                        <div className="img">
                                            <img src={quote} alt=""/>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p className="pink-text">Salma Adas</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <img src={img} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 d-flex testimonials-content">
                                        <div className="img">
                                            <img src={quote} alt=""/>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p className="pink-text">Salma Adas</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <img src={img} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 d-flex testimonials-content">
                                        <div className="img">
                                            <img src={quote} alt=""/>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p className="pink-text">Salma Adas</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <img src={img} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 d-flex testimonials-content">
                                        <div className="img">
                                            <img src={quote} alt=""/>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p className="pink-text">Salma Adas</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <img src={img} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                        <div id="counter"></div> 
                    </div>
                </div>
            </section>
            

            
        </React.Fragment>
    )
}
export default Testimonials;