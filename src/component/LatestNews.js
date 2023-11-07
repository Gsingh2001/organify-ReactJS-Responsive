import React from 'react'

function LatestNews() {
    return (
        <div className="latest-news pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Reasons</span> To Choose Organic
                </h3>
                <p>
                  Choosing organic products can have several benefits for your
                  health, the environment, and local communities. Organic farming
                  practices prioritize sustainability, avoid synthetic pesticides
                  and fertilizers, and promote the well-being of both consumers and
                  the planet. In this short intro, we'll explore some of the
                  compelling reasons to choose organic products.
                </p>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="https://news.harvard.edu/gazette/story/2023/09/is-organic-better/">
                  <div className="latest-news-bg news-bg-1"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="https://news.harvard.edu/gazette/story/2023/09/is-organic-better/">
                      Is organic better?
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> The Harvard Gazette
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i> September 22, 2023
                    </span>
                  </p>
                  <p className="excerpt">
                    Wondering is a series of random questions answered by experts.
                    Robert Paarlberg is an associate in the Sustainability Science
                    Program at the Kennedy School and the author of several books on
                    agriculture and food, including “Resetting the Table.” We asked
                    him whether eating organic is better for us.
                  </p>
                  <a
                    href="https://news.harvard.edu/gazette/story/2023/09/is-organic-better/"
                    className="read-more-btn"
                  >
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="https://jaivikbharat.fssai.gov.in/">
                  <div className="latest-news-bg news-bg-2"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="https://jaivikbharat.fssai.gov.in/">
                      Discover. Search. Validate Organic Food from India
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> Jaivik Bharat
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i>
                    </span>
                  </p>
                  <p className="excerpt">
                    The portal on Organic Food from India is a regulatory portal. At
                    the heart of the portal is an Indian Organic integrity database
                    jointly developed by FSSAI, APEDA and (PGS-India) on Organic food
                    standards, certification processes, information relating to FBOs,
                    their products and geographical areas in which they are available.
                  </p>
                  <a
                    href="https://jaivikbharat.fssai.gov.in/"
                    className="read-more-btn"
                  >
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-latest-news">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5658984/">
                  <div className="latest-news-bg news-bg-3"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5658984/">
                      Human health implications of organic food and organic agriculture: a comprehensive review
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> National Library of Medicine USA
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i> 27 October 2017
                    </span>
                  </p>
                  <p className="excerpt">
                    This review summarises existing evidence on the impact of organic
                    food on human health. It compares organic vs. conventional food
                    production with respect to parameters important to human health
                    and discusses the potential impact of organic management practices
                    with an emphasis on EU conditions.
                  </p>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5658984/"
                    className="read-more-btn"
                  >
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="news.html" className="boxed-btn">
                More News
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LatestNews
