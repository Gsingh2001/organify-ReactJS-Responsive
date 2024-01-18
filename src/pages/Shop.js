import React from 'react'
import Header from '../component/Header'
import Footer1 from '../component/Footer1'
import BreadcrumbSection from '../component/BreadcrumbSection'
import RadioForm from '../component/RadioForm'
import { Outlet } from 'react-router-dom'


function Shop() {
    return (
        <div>
            <Header />
            <BreadcrumbSection subtitle="Fresh and Organic" title="Shop" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <RadioForm />
            </div>
            <div className="container">
      
      <Outlet />
    </div>
            <Footer1 />
        </div>

    )
}

export default Shop
