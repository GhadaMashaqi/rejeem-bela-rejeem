import React from 'react';
import {Link} from 'react-router-dom';
import './Categories.css';
const Categories = () => {
    return(
        <React.Fragment>
            <section id="home-section-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <h1 className="text-center mb-4">Categories</h1>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="Soup-tab" data-bs-toggle="tab" data-bs-target="#Soup" type="button" role="tab" aria-controls="Soup" aria-selected="true">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat1.png" alt="categories"/>
                                                <p>Soup</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Shake-tab" data-bs-toggle="tab" data-bs-target="#Shake" type="button" role="tab" aria-controls="Shake" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat2.png" alt="categories"/>
                                                <p>Shake</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Chocolate-tab" data-bs-toggle="tab" data-bs-target="#Chocolate" type="button" role="tab" aria-controls="Chocolate" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat3.png" alt="categories"/>
                                                <p>Chocolate Bar</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="SavouryMeals-tab" data-bs-toggle="tab" data-bs-target="#SavouryMeals" type="button" role="tab" aria-controls="SavouryMeals" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat4.png" alt="categories"/>
                                                <p>Savoury Meals</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="WaterFlavour-tab" data-bs-toggle="tab" data-bs-target="#WaterFlavour" type="button" role="tab" aria-controls="WaterFlavour" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat5.png" alt="categories"/>
                                                <p>Water Flavour</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Porridge-tab" data-bs-toggle="tab" data-bs-target="#Porridge" type="button" role="tab" aria-controls="Porridge" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat6.png" alt="categories"/>
                                                <p>Porridge</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="CambridgeFiber-tab" data-bs-toggle="tab" data-bs-target="#CambridgeFiber" type="button" role="tab" aria-controls="CambridgeFiber" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat7.png" alt="categories"/>
                                                <p>Cambridge Fiber</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Smoothies-tab" data-bs-toggle="tab" data-bs-target="#Smoothies" type="button" role="tab" aria-controls="Smoothies" aria-selected="false">
                                        <div className="category text-center">
                                            <Link to="/">
                                                <img src="images/cat8.png" alt="categories"/>
                                                <p>Smoothies</p>
                                            </Link>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="Soup" role="tabpanel" aria-labelledby="Soup-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <div className="product-image">
                                                            <img src="images/product1.png" alt=""/>
                                                        </div>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><Link to="/"><i className="fas fa-shopping-basket"></i></Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Shake" role="tabpanel" aria-labelledby="Shake-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <div className="product-image">
                                                            <img src="images/product1.png" alt=""/>
                                                        </div>
                                                        <h3>Lemon water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Chocolate" role="tabpanel" aria-labelledby="Chocolate-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Watermelon water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="WaterFlavour" role="tabpanel" aria-labelledby="WaterFlavour-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="SavouryMeals" role="tabpanel" aria-labelledby="SavouryMeals-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Porridge" role="tabpanel" aria-labelledby="Porridge-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="CambridgeFiber" role="tabpanel" aria-labelledby="CambridgeFiber-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Smoothies" role="tabpanel" aria-labelledby="Smoothies-tab">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4">
                                                <div className="product">
                                                    <Link to="/">
                                                        <img src="images/product1.png" alt=""/>
                                                        <h3>Berry water flavour</h3>
                                                    </Link>
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="pink-text">$55.00</p>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6">
                                                            <p className="cart"><i className="fas fa-shopping-basket"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
export default Categories;