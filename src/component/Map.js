import React from 'react'

function Map() {
    return (
        <div className="embed-responsive embed-responsive-21by9">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4818.671486861542!2d75.65780076313905!3d31.350277791772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIxJzA4LjUiTiA3NcKwMzknMzcuMCJF!5e0!3m2!1sen!2sin!4v1699073183874!5m2!1sen!2sin"
                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map
