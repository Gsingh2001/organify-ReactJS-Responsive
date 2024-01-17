import React from 'react';
import BreadcrumbSection from '../component/BreadcrumbSection';
import Header from '../component/Header';
import Footer1 from '../component/Footer1';


const NotFoundPage = () => {
    return (
        <>
            <Header />
            <BreadcrumbSection subtitle="Fresh and Organic" title="404 - Not Found" />
            {/* Other content for the NotFoundPage */}
            <div className="full-height-section error-section">
                <div className="full-height-tablecell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="error-text">
                                    <i className="far fa-sad-cry"></i>
                                    <h1>Oops! Not Found.</h1>
                                    <p>The page you requested for is not found.</p>
                                    <a href="/" className="boxed-btn">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
};

export default NotFoundPage;
