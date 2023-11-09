import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import FeatureList from '../component/FeatureList'
import Advertisement from '../component/Advertisement'
import ShopBanner from '../component/ShopBanner'
import LatestNews from '../component/LatestNews'
import Footer1 from '../component/Footer1'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <FeatureList/>
            <Advertisement/>
            <ShopBanner/>
            <LatestNews/>
            <Footer1/>
        </div>
    )
}

export default Home
