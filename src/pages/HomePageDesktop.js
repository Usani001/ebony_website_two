import "./HomePageDesktop.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const HomePageDesktop = () => {
  return (
    <div className="home-page-desktop">
      <div className="footer">
        <div className="footer-child" />
        <div className="contents">
          <div className="copyright-c-2023">
            Copyright (c) 2023 - Powered by Afrogon Studios
          </div>
          <div className="socials">
            <img
              className="social-icontwitter"
              alt=""
              src="/socialicontwitter.svg"
            />
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img
              className="social-iconinstagram"
              alt=""
              src="/socialiconinstagram.svg"
            />
            <img
              className="social-iconyoutube"
              alt=""
              src="/socialiconyoutube.svg"
            />
            <div className="follow-us-on">Follow us on</div>
          </div>
          <div className="quick-links">
            <div className="column-2">
              <div className="become-a-distributor">Become a Distributor</div>
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-and-conditions">Terms and Conditions</div>
            </div>
            <div className="column-1">
              <div className="become-a-distributor">{`About Us `}</div>
              <div className="privacy-policy">Product</div>
              <div className="terms-and-conditions">Contact Us</div>
            </div>
            <div className="quick-links1">Quick Links</div>
          </div>
          <div className="brand-info">
            Ebony Foods and Beverages Limited is a food company invested in
            producing quality and healthy foods with high end innovations. We’re
            the “Makin’ it Better” Food Company.
          </div>
          <img className="logo-icon" alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className="contact-us1">
        <div className="content">
          <div className="contact-us2">
            <div className="text">
              <p className="p">+234 802 935 6760</p>
              <p className="p">+234 706 516 3614</p>
              <p className="p">info@ebonyfb.com</p>
            </div>
            <div className="title">Contact Us</div>
          </div>
          <div className="address">
            <div className="text2">
              <span className="text2-txt">
                <p className="p">{`21 Parliamentary Village, Calabar, `}</p>
                <p className="p">
                  <span>{`Cross River, `}</span>
                  <span className="nigeria">Nigeria.</span>
                </p>
              </span>
            </div>
            <div className="text1">
              <p className="p">{`25 Uwan Murphy Street, Ogoli - Ogoja, `}</p>
              <p className="p">
                <span>{`Cross River, `}</span>
                <span className="nigeria">Nigeria.</span>
              </p>
            </div>
            <div className="title1">Address</div>
          </div>
          <div className="form">
            <div className="send-form">
              <div className="button-primary-colour">
                <div className="label">Send message</div>
              </div>
            </div>
            <div className="message">
              <div className="field">
                <div className="label-parent">
                  <div className="label1">Message</div>
                  <div className="expand">
                    <div className="rectangle" />
                    <div className="rectangle1" />
                  </div>
                </div>
              </div>
              <img className="asterisk-icon" alt="" src="/asterisk.svg" />
            </div>
            <div className="phone">
              <div className="field">
                <div className="label-parent">
                  <div className="label2">Phone</div>
                </div>
              </div>
              <img className="asterisk-icon1" alt="" src="/asterisk1.svg" />
            </div>
            <div className="email">
              <div className="field">
                <div className="label-parent">
                  <div className="label2">Email</div>
                </div>
              </div>
              <img className="asterisk-icon1" alt="" src="/asterisk2.svg" />
            </div>
            <div className="name">
              <div className="field">
                <div className="label-parent">
                  <div className="label2">Full Name</div>
                </div>
              </div>
              <img className="asterisk-icon3" alt="" src="/asterisk3.svg" />
            </div>
          </div>
          <div className="subtitle">
            Got any questions? Fill out the form below and send us a message!
          </div>
        </div>
      </div>
      <div className="become-a-distributor1">
        <div className="field">
          <div className="card">
            <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
            <div className="text3">
              We’re always searching for smarter ways to make it easier for our
              customers to get our products, and we’re on the lookout for
              individuals like you to help us make our products easier for
              everyone to get.
            </div>
            <div className="link">
              <div className="group-3-copy-2">
                <div className="view-all-benefits">Apply Now</div>
                <img className="group-icon" alt="" src="/group.svg" />
              </div>
            </div>
            <div className="title2">Become a Distributor</div>
          </div>
          <b className="title3">
            Think you have what it takes to join us on our mission?
          </b>
        </div>
      </div>
      <div className="testimonial">
        <div className="review-3">
          <div className="card1" />
          <div className="date">13.08.2023</div>
          <img className="review-icon" alt="" src="/review.svg" />
          <div className="copy">
            Aliquam suscipit massa orci, ac tristique sapien tristique sed.
            Etiam mattis vel purus eget suscipit. Nullam quis scelerisqu.
          </div>
          <div className="name1">Detiem Afolayan</div>
        </div>
        <div className="review-2">
          <div className="card1" />
          <div className="date1">21.08.2023</div>
          <img className="review-icon" alt="" src="/review1.svg" />
          <div className="copy">
            Pellentesque viverra sapien massa, sed vestibulum massa ullamcorper
            vel. Morbi vulputate sollicitudin nisl, sagittis cursus nis.
          </div>
          <div className="name2">Okokon Ifiok</div>
        </div>
        <div className="review-1">
          <div className="card1" />
          <div className="date2">01.09.2023</div>
          <img className="review-icon" alt="" src="/review2.svg" />
          <div className="copy">
            Morbi hendrerit quam non varius cursus. Integer metus velit,
            tristique non mollis a, fringilla ut mauris. Pellentesque tincidunt.
          </div>
          <div className="name3">Obeten Ekarika</div>
        </div>
        <div className="lets-talk-about">{`Let’s talk about how we can help you achieve your nutritional goals. `}</div>
        <div className="title4">
          Don’t just take our word for it. Here’s what our customers say about
          us!
        </div>
        <div className="button">
          <div className="button-primary-colour1">
            <div className="label5">Try Our Product</div>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="content2">
          <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
          <div className="happy-customers">
            <b className="stat">1K+</b>
            <div className="subtitle1">Happy Customers</div>
          </div>
          <div className="distributors">
            <b className="stat1">12</b>
            <div className="subtitle1">Distributors</div>
          </div>
          <div className="outlets">
            <b className="stat2">26</b>
            <div className="subtitle3">Outlets</div>
          </div>
          <div className="packets-sold">
            <b className="stat2">5000+</b>
            <div className="year-founded">Packets sold</div>
          </div>
          <div className="content-child" />
          <div className="content-item" />
          <div className="content-inner" />
        </div>
      </div>
      <div className="product-section">
        <div className="content3">
          <img
            className="patoria-packet-icon"
            alt=""
            src="/patoria-packet@2x.png"
          />
          <img className="mg-0132d-1-icon" alt="" src="/-mg-0132d-1@2x.png" />
          <img className="icon" alt="" src="/1-1@2x.png" />
          <img
            className="patoria-honey-2-icon"
            alt=""
            src="/patoriahoney-2@2x.png"
          />
          <div className="text4">Patoria Premium Honey...</div>
          <b className="text5">Your Daily Dose for Healthy Living.</b>
        </div>
      </div>
      <img className="web-banner-icon" alt="" src="/web-banner@2x.png" />
      <div className="why-choose-us">
        <div className="content4">
          <img className="land-1-icon" alt="" src="/land-1@2x.png" />
          <div className="highlight-3">
            <div className="text6">
              We instil positivity in our customers’ day-to-day lives by helping
              them have control over their body.
            </div>
            <div className="subheading">Trustworthy and Helpful</div>
            <img className="icon1" alt="" src="/icon.svg" />
          </div>
          <div className="highlight-2">
            <div className="text7">
              Exuding passion for our products, we push for proof of link to
              overall quality of foods and high-end innovative processes.
            </div>
            <div className="subheading1">Innovative Ideas</div>
            <img className="icon2" alt="" src="/icon1.svg" />
          </div>
          <div className="highlight-1">
            <div className="text6">
              A statement brand that creates products with great taste sensation
              almost too good to be healthy.
            </div>
            <div className="subheading2">Memorable Experience</div>
            <img className="icon3" alt="" src="/icon2.svg" />
          </div>
          <div className="title5">Why Choose Us</div>
        </div>
      </div>
      <div className="video-section">
        <img className="video-icon" alt="" src="/video@2x.png" />
        <div className="title6">Get To Know Us</div>
        <div className="subtitle4">
          When tried, we interrupt the regular routine and become your best
          alternative.
        </div>
      </div>
      <div className="hero-background">
        <img className="background-icon" alt="" src="/background.svg" />
        <b className="title7">
          <p className="p">Refined Premium</p>
          <p className="p">Quality Honey!</p>
        </b>
        <div className="subtitle5">
          Our products are engineered through high-end innovations and are made
          for your healthy consumption.
        </div>
        <div className="subtitle6">{`HEALTHY & INNOVATIVE`}</div>
        <div className="buy-now">
          <div className="button-primary-colour">
            <div className="label">Buy now</div>
          </div>
        </div>
        <div className="highlights">
          <div className="highlight-11">
            <img className="icon4" alt="" src="/icon3.svg" />
            <div className="copy3">
              Highest standard packaging to give self-assurance of a healthier
              consumption.
            </div>
            <div className="subtitle7">High-End Innovation</div>
          </div>
          <div className="highlight-21">
            <div className="copy4">
              Pure and naturally sourced healthy ingredients meeting your
              nutritional needs.
            </div>
            <div className="subtitle8">Natural Food</div>
            <img className="icon5" alt="" src="/icon4.svg" />
          </div>
          <div className="highlight-31">
            <div className="copy5">
              Free of artificial additives, colouring or preservatives, thereby
              retaining distinctive taste.
            </div>
            <div className="subtitle9">Great Taste</div>
            <img className="icon6" alt="" src="/icon5.svg" />
          </div>
        </div>
        <img className="icon7" alt="" src="/6-1@2x.png" />
      </div>
      <div className="navigation">
        <div className="links">
          <b className="home">Home</b>
          <Link className="home22" to="/aboutPage">
            <b>About Us</b>
          </Link>

          <Link className="home22" to="/productPage">
            <b>Product</b>
          </Link>
          <Link className="home22" to="/contactPage">
            <b>Contact Us</b>
          </Link>
        </div>
        <img className="ebony-logo2-1" alt="" src="/ebony-logo2-1@2x.png" />
      </div>
      <div className="about-section">
        <div className="content5">
          <div className="our-philosophy">
            <div className="text9">
              We have built a consumer first culture around healthy products
              with great taste.
            </div>
            <div className="subheading3">Our Philosophy</div>
            <img className="icon-3" alt="" src="/icon-3.svg" />
            <img
              className="philosophy-icon"
              alt=""
              src="/philosophy-icon.svg"
            />
          </div>
          <div className="our-mission">
            <div className="text10">
              We want to redefine the culture of premium quality and healthy
              foods and beverages through high end innovations.
            </div>
            <div className="subheading4">Our Mission</div>
            <img className="icon-2" alt="" src="/icon-2.svg" />
          </div>
          <div className="our-vision">
            <div className="text11">
              Is to become a leading brand by promoting our local image to the
              national and international markets through our products
            </div>
            <div className="subheading5">Our Vision</div>
            <img className="icon8" alt="" src="/icon6.svg" />
          </div>
          <div className="paragraph-text">
            Ebony Foods and Beverages Limited is a food company invested in
            producing quality and healthy foods with high end innovations. We’re
            the “Makin’ it Better” Food Company.
          </div>
          <div className="quote">
            “Helping you control whatever gets in your way of a healthier
            consumption with real life health benefits”
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDesktop;
