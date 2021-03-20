import React from 'react';
import './HowToStart.css';
import img1 from '../../assets/images/how-to-start1.png';
import img2 from '../../assets/images/how-to-start2.png';
import img3 from '../../assets/images/how-to-start3.png';
const HowToStart = () => {
    return(
        <React.Fragment>
            <section id="how-to-start">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h1 className="text-center mb-4">How To <span className="pink-text">Start</span></h1>
                            <p className="text-center description">Lorem Ipsum is simply dummy text of the printing and typ es estandard dummy text ever since the </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-center">
                            <div className="img">
                                <img src={img1} alt=""/>
                            </div>
                            <p className="pink-text">Page One</p>
                            <p>This content should be added to describe how the application works </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-center">
                            <div className="img">
                                <img src={img2} alt=""/>
                            </div>
                            <p className="pink-text">Page Two</p>
                            <p>This content should be added to describe how the application works </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-center">
                            <div className="img">
                                <img src={img3} alt=""/>
                            </div>
                            <p className="pink-text">Page Three</p>
                            <p>This content should be added to describe how the application works </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default HowToStart;