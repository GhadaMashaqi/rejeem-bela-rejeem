import React from 'react';
import {Link} from 'react-router-dom';
import './HomeSlider.css';
const HomeSlider = () => {
    return(
        <React.Fragment>
            <section id="home-section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <h1>Awaken Your Confidence <br/>For <span className="pink-text">A Better Life</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typ es etting industry. industry's standard dummy text ever since the 1500ss</p>
                            <Link to="/">Read More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default HomeSlider;