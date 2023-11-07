import React from 'react'

function Banner() {
    return (
        <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="assets/banner.png" className="img-fluid" alt="Banner Image" />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li>
              <img src="assets/banner-info.png" className="img-fluid" alt="Banner Info Image" />
            </li>
            <li>
              <p>
                Introducing a fresh and exciting venture that will transform the way you experience organic vegetables! Get ready to embark on a journey that celebrates the goodness of nature, as we unveil our forthcoming organic vegetable site. With a commitment to sustainability, health, and flavor, our site will be your ultimate destination for a wide variety of organic, locally sourced, and freshly harvested vegetables. Join us as we delve into the vibrant world of organic farming, discover the beauty of nutrient-rich produce, and embrace a lifestyle that nourishes both you and the planet. Stay tuned for an authentic, garden-fresh experience that's just around the corner – your one-stop-shop for all things organic and delicious. Get ready to savor the taste of nature like never before!
              </p>
            </li>
            <button type="button" className="btn btn-success">Coming Soon</button>
          </ul>
        </div>
      </div>
    </div>
  );
    
}

export default Banner
