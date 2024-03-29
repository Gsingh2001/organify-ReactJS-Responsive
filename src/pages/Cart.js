import React from 'react'
import Header from '../component/Header'
import Footer1 from '../component/Footer1'
import BreadcrumbSection from '../component/BreadcrumbSection'

function Cart() {
  return (<>
    <Header />
    <BreadcrumbSection subtitle="Fresh and Organic" title="Cart" />



    <div className="cart-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-remove"></th>
                    <th className="product-image">Product Image</th>
                    <th className="product-name">Name</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-body-row">
                    <td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
                    <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt="" /></td>
                    <td className="product-name">Strawberry</td>
                    <td className="product-price">$85</td>
                    <td className="product-quantity"><input type="number" placeholder="0" /></td>
                    <td className="product-total">1</td>
                  </tr>
                  {/* Repeat similar rows for other products */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="total-section">
              <table className="total-table">
                <thead className="total-table-head">
                  <tr className="table-total-row">
                    <th>Total</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="total-data">
                    <td><strong>Subtotal: </strong></td>
                    <td>$500</td>
                  </tr>
                  <tr className="total-data">
                    <td><strong>Shipping: </strong></td>
                    <td>$45</td>
                  </tr>
                  <tr className="total-data">
                    <td><strong>Total: </strong></td>
                    <td>$545</td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-buttons">
                <a href="cart.html" className="boxed-btn">Update Cart</a>
                <a href="checkout.html" className="boxed-btn black">Check Out</a>
              </div>
            </div>

            <div className="coupon-section">
              <h3>Apply Coupon</h3>
              <div className="coupon-form-wrap">
                <form action="index.html">
                  <p><input type="text" placeholder="Coupon" /></p>
                  <p><input type="submit" value="Apply" /></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer1 />
  </>
  )
}

export default Cart