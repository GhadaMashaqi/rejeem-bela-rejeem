import React from 'react';
import './Home.css';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import CalculatorSection from '../../components/CalculatorSection/CalculatorSection';
// import Product from '../../components/Product/Product';
// import Categories from '../../components/Categories/Categories';
import HowToStart from '../../components/HowToStart/HowToStart';
import Testimonials from '../../components/Testimonials/Testimonials';
import Subscribe from '../../components/Subscribe/Subscribe';
const Home = (props) => {

    return(
        <div className="homepage">
            <HomeSlider/>
            <CalculatorSection/>
            <HowToStart/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}
export default Home;