import React from 'react'
import Header from '../component/Header'
import Footer1 from '../component/Footer1'
import BreadcrumbSection from '../component/BreadcrumbSection'
import LoginForm from '../component/LoginForm'
import '../css/Login.css';


function Login() {
    return (
        <div>
            <Header />
            <BreadcrumbSection subtitle="Oraganify Pvt Ltd Jalandhar" title="Login" />
            <div className='allignitem center'>
                <LoginForm />
            </div>

            <Footer1 />

        </div>
    )
}

export default Login