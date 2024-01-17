import React from 'react'
import Header from '../component/Header'
import BreadcrumbSection from '../component/BreadcrumbSection'
import Footer1 from '../component/Footer1'
import UserProfile from '../component/UserProfile'

function Profile() {
  return (
    <div>
        <Header/>
        <BreadcrumbSection subtitle="Organify Pvt Ltd" title="Your Profile" />
        <UserProfile/>
        <Footer1/>
    </div>
  )
}

export default Profile