import React from 'react'
import { db } from '../FirebaseConfig.js';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';





const Footer = () => {

  const [email, setEmail] = useState();

  const userCollectionRef = collection(db, "emaildata")

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      email: email
    })
    
}

return (
  <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-box about-widget">
            <h2 className="widget-title">About us</h2>
            <p>Stay tuned, because the best is yet to come. We can't wait to share our passion for organic vegetables with you, and we're excited to embark on this sustainable journey together. Thank you for being a part of our community and for choosing a better way to enjoy the bounty of nature.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box get-in-touch">
            <h2 className="widget-title">Get in Touch</h2>
            <ul>
              <li>V.P.O. Jaitewali Jalandhar</li>
              <li>gsingh07@outlook.in</li>
              <li>+91 9877371074</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box subscribe">
            <h2 className="widget-title">Subscribe</h2>
            <p>Subscribe to our mailing list to get the latest updates.</p>
            <form id="email-contact">
              <label for="emailid">Email Address:</label>
              <input type="email" id="emailid" placeholder="Enter your email" required
                onChange={(event) => {
                  setEmail(event.target.value)
                }} />
              <button onClick={handleSubmit} type="submit-id" id="submit-id" >Submit</button>
            </form>
            <div className="alert" id="alert-id" style={{ display: 'none' }}>Thank you for submitting your email!</div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer;
