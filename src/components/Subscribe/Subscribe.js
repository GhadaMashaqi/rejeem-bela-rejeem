import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return(
        <React.Fragment>
            <section id="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h1>Subscribe <span className="pink-text">Now</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typ es estandard dummy text ever since the </p>
                            <form action="">
                                <input type="email" placeholder="Email Address"/>
                                <button type="submit">Subscribe <i className="fas fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Subscribe;