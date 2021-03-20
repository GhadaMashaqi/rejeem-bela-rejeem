import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import BackToTop from "react-back-to-top-button";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
      </Switch>
      <Footer/>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={500}
        easing="easeInOutQuint"
      >
        <span><i className="fas fa-chevron-up"></i></span>
      </BackToTop>
    </div>
  );
}

export default App;
