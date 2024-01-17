import React from 'react'
import Header from '../component/Header'
import Footer1 from '../component/Footer1'
import BreadcrumbSection from '../component/BreadcrumbSection'
import SignupForm from '../component/SignupForm'

function SignUp() {
    return (
        <div>
            <Header />
            <BreadcrumbSection subtitle="Oraganify Pvt Ltd Jalandhar" title="Signup" />
            <div className='allignitem center'>
                <SignupForm />
            </div>
            <Footer1 />
        </div>
    )
}

export default SignUp