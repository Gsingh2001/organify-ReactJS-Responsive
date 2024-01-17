import React from 'react'
import Header from '../component/Header'
import Location from '../component/Location'
import Map from '../component/Map'
import Footer1 from '../component/Footer1'
import FormContact from '../component/FormContact'
import BreadcrumbSection from '../component/BreadcrumbSection'


function Contact1() {
    return (
        <div>
        <Header />
    <BreadcrumbSection subtitle="Get 24/7 Support" title="Contact us" />
        <FormContact/>
        <Location/>
        <Map/>
        <Footer1/>
    </div>
    )
}

export default Contact1
