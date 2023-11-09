import React from 'react'
import Header from '../component/Header'
import Location from '../component/Location'
import Map from '../component/Map'
import Footer1 from '../component/Footer1'
import FormContact from '../component/FormContact'


function Contact1() {
    return (
        <div>
        <Header />
        <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                            <p>Get 24/7 Support</p>
                            <h1>Contact us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FormContact/>
        <Location/>
        <Map/>
        <Footer1/>
    </div>
    )
}

export default Contact1
