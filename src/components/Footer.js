import React from "react";
import  './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto ">
            <div className="row">
              <div className="col-6 col-lg-3">
                <h4>ABOUT CRYPTO</h4>

                <br />

                <a href="" className="mt-5">
                  About Us
                </a>

                <br />
                <br />
                <a href="">Careers</a>
                <br />
                <br />

                <a href="">Partner With Us</a>
                <br />
              </div>
              <div className="col-6 col-lg-3">
                <h4>EXPLORE</h4>

                <br />
                <a href="">Classes</a>
                <br />
                <br />

                <a href="">Articles</a>
                <br />
              </div>
              <div className="col-6 col-lg-3">
                <h4>HEADQUARTERS</h4>
                <br />

                <h5> 5/12 West Patel Nagar 110008 </h5>
              </div>
              <div className="col-6 col-lg-3">
                <h4>CONTACT US</h4>
                <br />

                <h5>Toll-Free:- 9958007011</h5>

                <h5>Local:-8802705006</h5>

                <h5>droidsize@crypto.com</h5>
              </div>
            </div>
            <hr />
            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copyright @ 2021 basic of crypto. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
