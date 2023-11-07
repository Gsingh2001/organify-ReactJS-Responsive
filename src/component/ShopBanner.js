import React from 'react'

function ShopBanner() {
    return (
        <section className="shop-banner">
        <div className="container">
          <h3>
            Launching Soon <br /> In Your <span className="orange-text">Cities.....</span>
          </h3>
          <div className="sale-percent">
            <span>
              <br /> {/* You can replace this with the actual sale percentage */}
            </span>
            <span></span>
          </div>
          <a href="shop.html" className="cart-btn btn-lg">
            Coming Soon
          </a>
        </div>
      </section>
    )
}

export default ShopBanner
