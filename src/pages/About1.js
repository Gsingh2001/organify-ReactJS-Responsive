import React from 'react'
import Header from '../component/Header'
import FeaturedSection from '../component/FeaturedSection'
import ShopBanner from '../component/ShopBanner'
import Team from '../component/Team'
import Footer1 from '../component/Footer1'

function About1() {
    return (
        <div>
            <Header />
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>We will sell fresh vegetables</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedSection />
            <ShopBanner />
            <Team />
            <Footer1 />
        </div>
    )
}

export default About1
