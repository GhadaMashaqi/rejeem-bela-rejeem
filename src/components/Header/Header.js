import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
const Header = () => {
    return(
        <React.Fragment>
            <header id="sticky-header">
            <nav id="topbar" className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <ul  className="register-menu d-flex flex-lg-row align-items-lg-center list-unstyled">
                        <li className="nav-item"><Link to="/">Login</Link></li>
                        <li className="nav-item"><Link to="/">Sign Up</Link></li>
                    </ul>
                    <ul className="lang d-flex flex-column flex-lg-row align-items-lg-center list-unstyled">
                        <li className="nav-item"><Link to="/">عربي</Link></li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light" id="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100 m-0 header-container">
                        <Link className="d-block header-logo" to="/"> 
                            <Logo className="logo"/>
                        </Link>
                        <nav className="d-none d-lg-flex main-nav">
                            <ul className="main-menu d-flex flex-column flex-lg-row align-items-lg-center list-unstyled p-0 m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">All Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Calculator</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Rejeem Community</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                            <ul className="main-menu d-flex flex-lg-row align-items-lg-center list-unstyled p-0 m-auto icons">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><i className="fas fa-search"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link favorite-list" to="/"><i className="far fa-heart"></i> <span>3</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link cart" to="/"><i className="fas fa-shopping-cart"></i> <span>0</span></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="side-menu-close d-flex d-lg-none flex-wrap flex-column align-items-center justify-content-center ml-auto">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="side-menu-wrap">
            <div className="mobile-menu-header">
            </div>
            <nav className="side-menu-nav">
            </nav>
        </div>

        </React.Fragment>
    )
}
export default Header;