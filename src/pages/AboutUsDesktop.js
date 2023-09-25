import "./AboutUsDesktop.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AboutUsDesktop() {
  return (
    <div className="about-us-desktop22">
      <div className="footer22">
        <div className="footer-child22" />
        <div className="contents22">
          <div className="copyright-c-202322">
            Copyright (c) 2023 - Powered by Afrogon Studios
          </div>
          <div className="socials22">
            <img
              className="social-icontwitter22"
              alt=""
              src="/socialicontwitter.svg"
            />
            <img className="vector-icon22" alt="" src="/vector.svg" />
            <img
              className="social-iconinstagram22"
              alt=""
              src="/socialiconinstagram.svg"
            />
            <img
              className="social-iconyoutube22"
              alt=""
              src="/socialiconyoutube.svg"
            />
            <div className="follow-us-on22">Follow us on</div>
          </div>
          <div className="quick-links22">
            <div className="column-222">
              <div className="become-a-distributor22">Become a Distributor</div>
              <Link className="become-a-distributor22" to="/contactPage">
                <div>Become a Distributor</div>
              </Link>
              <div className="privacy-policy22">Privacy Policy</div>
              <div className="terms-and-conditions22">Terms and Conditions</div>
            </div>
            <div className="column-122">
              <Link className="become-a-distributor" to="/aboutPage">
                <div>About Us</div>
              </Link>

              <Link className="privacy-policy" to="/productPage">
                <div>Product</div>
              </Link>
              <Link className="terms-and-conditions" to="/contactPage">
                <div>Contact Us</div>
              </Link>
              {/* <div className="become-a-distributor22">About Us</div>
              <div className="privacy-policy22">Product</div>
              <div className="terms-and-conditions22">Contact Us</div> */}
            </div>
            <div className="quick-links122">Quick Links</div>
          </div>
          <div className="brand-info22">
            Ebony Foods and Beverages Limited is a food company invested in
            producing quality and healthy foods with high end innovations. We’re
            the “Makin’ it Better” Food Company.
          </div>
          <img className="logo-icon22" alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className="become-a-distributor122">
        <div className="content22">
          <div className="card22">
            <img
              className="mask-group-icon22"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="text22">
              We’re always searching for smarter ways to make it easier for our
              customers to get our products, and we’re on the lookout for
              individuals like you to help us make our products easier for
              everyone to get.
            </div>
            <div className="link22">
              <div className="group-3-copy-222">
                <div className="view-all-benefits22">Apply Now</div>
                <img className="group-icon22" alt="" src="/group.svg" />
              </div>
            </div>
            <div className="title22">Become a Distributor</div>
          </div>
          <b className="title122">
            Think you have what it takes to join us on our mission?
          </b>
        </div>
      </div>
      <div className="why-choose-us22">
        <div className="content122">
          <img className="land-1-icon22" alt="" src="/land-1@2x.png" />
          <div className="highlight-322">
            <div className="text122">
              We instil positivity in our customers’ day-to-day lives by helping
              them have control over their body.
            </div>
            <div className="subheading22">Trustworthy and Helpful</div>
            <img className="icon22" alt="" src="/icon.svg" />
          </div>
          <div className="highlight-222">
            <div className="text222">
              Exuding passion for our products, we push for proof of link to
              overall quality of foods and high-end innovative processes.
            </div>
            <div className="subheading122">Innovative Ideas</div>
            <img className="icon122" alt="" src="/icon.svg" />
          </div>
          <div className="highlight-122">
            <div className="text122">
              A statement brand that creates products with great taste sensation
              almost too good to be healthy.
            </div>
            <div className="subheading222">Memorable Experience</div>
            <img className="icon222" alt="" src="/icon.svg" />
          </div>
          <div className="title222">Why Choose Us</div>
        </div>
      </div>
      <div className="our-team22">
        <div className="content222">
          <div className="accountant22">
            <div className="position22">Accountant</div>
            <div className="name22">Precious Udom</div>
            <img
              className="mask-group-icon122"
              alt=""
              src="/mask-group1@2x.png"
            />
          </div>
          <div className="factory-manager22">
            <div className="position122">Factory Manager</div>
            <div className="name122">Ubi Kingsley</div>
            <img
              className="mask-group-icon122"
              alt=""
              src="/mask-group2@2x.png"
            />
          </div>
          <div className="director-comm22">
            <div className="position222">Dir. Corporate Communications</div>
            <div className="name222">Michael Samuel</div>
            <img
              className="mask-group-icon122"
              alt=""
              src="/mask-group3@2x.png"
            />
          </div>
          <div className="ceo22">
            <div className="position322">Chief Executive Officer</div>
            <div className="name322">Francisca Ayang</div>
            <img
              className="mask-group-icon122"
              alt=""
              src="/mask-group4@2x.png"
            />
          </div>
          <img className="left-icon22" alt="" src="/left.svg" />
          <img className="right-icon22" alt="" src="/right.svg" />
          <div className="title322">Our Team</div>
        </div>
      </div>
      <img className="web-banner-icon22" alt="" src="/web-banner@2x.png" />
      <div className="about-section22">
        <div className="content322">
          <div className="our-philosophy22">
            <div className="text422">
              We have built a consumer first culture around healthy products
              with great taste.
            </div>
            <div className="subheading322">Our Philosophy</div>
            <img className="icon-322" alt="" src="/icon-3.svg" />
            <img
              className="philosophy-icon22"
              alt=""
              src="/philosophy-icon.svg"
            />
          </div>
          <div className="our-mission22">
            <div className="text522">
              We want to redefine the culture of premium quality and healthy
              foods and beverages through high end innovations.
            </div>
            <div className="subheading422">Our Mission</div>
            <img className="icon-222" alt="" src="/icon-2.svg" />
          </div>
          <div className="our-vision22">
            <div className="text622">
              Is to become a leading brand by promoting our local image to the
              national and international markets through our products
            </div>
            <div className="subheading522">Our Vision</div>
            <img className="icon322" alt="" src="/icon1.svg" />
          </div>
          <div className="paragraph-text22">
            Ebony Foods and Beverages Limited is a food company invested in
            producing quality and healthy foods with high end innovations. We’re
            the “Makin’ it Better” Food Company.
          </div>
          <div className="quote22">
            “Helping you control whatever gets in your way of a healthier
            consumption with real life health benefits”
          </div>
        </div>
      </div>
      <img className="video-icon22" alt="" src="/video@2x.png" />
      <div className="when-tried-we22">
        When tried, we interrupt the regular routine and become your best
        alternative.
      </div>
      <div className="get-to-know22">Get To Know Us</div>
      <div className="navigation22">
        <div className="links22">
          <Link className="home22" to="/homePage">
            <b>Home</b>
          </Link>
          <b className="about-us1">About Us</b>
          <Link className="home22" to="/productPage">
            <b>Product</b>
          </Link>
          <Link className="home22" to="/contactPage">
            <b>Contact Us</b>
          </Link>
        </div>
        <img className="ebony-logo-icon22" alt="" src="/ebony-logo@2x.png" />
      </div>
    </div>
  );
}

export default AboutUsDesktop;
