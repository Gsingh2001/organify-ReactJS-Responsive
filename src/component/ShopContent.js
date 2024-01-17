import React from 'react'

function ShopContent() {
    return (

        <div className="product-section mt-150 mb-150">
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <div className="product-filters">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".strawberry">Strawberry</li>
                                <li data-filter=".berry">Berry</li>
                                <li data-filter=".lemon">Lemon</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row product-lists">
                    {/* Render product items using a map function */}
                    {products.map((product, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 text-center ${product.category}`}>
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src={product.imageSrc} alt="" /></a>
                                </div>
                                <h3>{product.name}</h3>
                                <p className="product-price"><span>Per Kg</span> {product.price}$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="pagination-wrap">
                            <ul>
                                <li><a href="#">Prev</a></li>
                                <li><a href="#">1</a></li>
                                <li><a className="active" href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContent