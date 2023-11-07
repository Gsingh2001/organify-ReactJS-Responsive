import React from 'react'

function Advertisement() {
    return (
        <div className="abt-section mb-150">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="abt-bg">
              <a
                href="https://www.youtube.com/watch?v=DBLlFWYcIGQ"
                className="video-play-btn popup-youtube"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="abt-text">
              <p className="top-sub">Coming Soon</p>
              <h2>
                We are <span className="orange-text">Organifiers</span>
              </h2>
              <p>
                Stay tuned, because the best is yet to come. We can't wait to
                share our passion for organic vegetables with you, and we're
                excited to embark on this sustainable journey together. Thank
                you for being a part of our community and for choosing a better
                way to enjoy the bounty of nature.
              </p>
              <a href="about.html" className="boxed-btn mt-4">
                know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Advertisement
