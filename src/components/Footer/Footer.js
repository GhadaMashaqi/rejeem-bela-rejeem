import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return(
        <React.Fragment>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4">
                                <p className="pink-text">Information</p>
                                <ul>
                                    <li><Link to="/">About Rejeem Bela Rejeem</Link></li>
                                    <li><Link to="/">Shipping Policy</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Disclaimer</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                                <p className="pink-text">Customer Service</p>
                                <ul>
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/">Returns</Link></li>
                                    <li><Link to="/">Site Map</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                                <p className="pink-text">My Account</p>
                                <ul>
                                    <li><Link to="/">My Account</Link></li>
                                    <li><Link to="/">Order History</Link></li>
                                    <li><Link to="/">Wishlist</Link></li>
                                    <li><Link to="/">Newsletter</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <ul className="d-flex flex-lg-row align-items-lg-center list-unstyled p-0">
                            <li><Link to="/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                            <li><Link to="/" target="_blank"><i className="fab fa-pinterest-p"></i></Link></li>
                        </ul>
                        <p className="text-center">© Rejeem Bela Rejeem All Rights Reserved 2021</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;