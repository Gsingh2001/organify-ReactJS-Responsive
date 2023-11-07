import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import FeatureList from '../component/FeatureList'
import Advertisement from '../component/Advertisement'
import ShopBanner from '../component/ShopBanner'
import LatestNews from '../component/LatestNews'
import Footer from '../component/Footer'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <FeatureList/>
            <Advertisement/>
            <ShopBanner/>
            <LatestNews/>
            <Footer/>
        </div>
    )
}

export default Home
