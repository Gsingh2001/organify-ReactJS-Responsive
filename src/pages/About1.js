import React from 'react'
import Header from '../component/Header'
import FeaturedSection from '../component/FeaturedSection'
import ShopBanner from '../component/ShopBanner'
import Team from '../component/Team'
import Footer1 from '../component/Footer1'
import BreadcrumbSection from '../component/BreadcrumbSection'

function About1() {
    return (
        <div>
            <Header />
            <BreadcrumbSection subtitle="WE WILL SELL FRESH VEGETABLES" title="About Us" />
            <FeaturedSection />
            <ShopBanner />
            <Team />
            <Footer1 />
        </div>
    )
}

export default About1
