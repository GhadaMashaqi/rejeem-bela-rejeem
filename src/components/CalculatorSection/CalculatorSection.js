import React from 'react';
import {Link} from 'react-router-dom';
import './CalculatorSection.css';
import image from '../../assets/images/calculator.png';
const CalculatorSection = () => {
    return(
        <React.Fragment>
           <section id="home-section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={image} alt="calculator"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <h1>Calculator</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typ es etting industry. industry's standard dummy text ever since the industry's standard dummy text ever since the industry's standard dummy text ever since the </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typ es standard dummy text ever since the</p>
                            <Link to="/">Calculate Now <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CalculatorSection;