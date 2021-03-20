import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';
import product1 from '../../assets/images/product1.png';
// import product2 from '../../assets/images/product2.png';
// import product3 from '../../assets/images/product3.png';
const Product = () => {
    return(
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="product">
                    <Link to="/">
                        <div className="product-image">
                            <img src={product1} alt=""/>
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

        </React.Fragment>
    )
}
export default Product;