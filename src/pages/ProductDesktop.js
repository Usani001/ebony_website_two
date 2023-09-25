import "./ProductDesktop.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductDesktop = () => {
  return (
    <div className="product-desktop">
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
              <Link className="become-a-distributor" to="/aboutPage">
                <div>About Us</div>
              </Link>

              <Link className="privacy-policy" to="/productPage">
                <div>Product</div>
              </Link>
              <Link className="terms-and-conditions" to="/contactPage">
                <div>Contact Us</div>
              </Link>
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
      <div className="faqs">
        <div className="faqs1">
          <div className="title">
            <div className="button">
              <div className="button-primary-colour">
                <div className="label">Ask a question</div>
              </div>
            </div>
            <div className="frequently-asked-questions">
              <div className="shape-parent">
                <div className="shape" />
                <img className="arrow-icon" alt="" src="/arrow.svg" />
                <div className="q">What can I expect?</div>
              </div>
              <div className="shape-group">
                <div className="shape" />
                <img className="arrow-icon" alt="" src="/arrow.svg" />
                <div className="q">How frequent are the updates?</div>
              </div>
              <div className="shape-container">
                <div className="shape2" />
                <img className="arrow-icon2" alt="" src="/arrow.svg" />
                <div className="q2">
                  How can I use the kit to create high fidelity screens at a
                  faster rate?
                </div>
              </div>
              <div className="link">
                <div className="group-3-copy-2">
                  <div className="view-all-benefits">Ask a question</div>
                  <img className="group-icon" alt="" src="/arrow.svg" />
                </div>
              </div>
              <div className="copy">{`Don’t see an answer you’re looking for? `}</div>
              <div className="title1">
                Got any questions? Here are some common ones
              </div>
            </div>
          </div>
          <div className="questions">
            <img className="line-icon" alt="" src="/line.svg" />
            <img className="arrow-icon3" alt="" src="/arrow1.svg" />
            <div className="question">
              Maecenas neque leo, volutpat id ex bla?
            </div>
            <img className="line-icon1" alt="" src="/line1.svg" />
            <img className="arrow-icon4" alt="" src="/arrow2.svg" />
            <div className="are-the-delivery">
              Vivamus rhoncus lorem vitae libero volutpat amet ke?
            </div>
            <img className="line-icon2" alt="" src="/line2.svg" />
            <img className="arrow-icon5" alt="" src="/arrow3.svg" />
            <div className="is-delivery-free">Morbi id eleifend quam?</div>
            <img className="line-icon3" alt="" src="/line2.svg" />
            <img className="arrow-icon6" alt="" src="/arrow4.svg" />
            <div className="are-the-delivery1">
              Fusce eros augue, semper at facilisis ac, bibendum venenatis?
            </div>
            <img className="line-icon4" alt="" src="/line3.svg" />
            <img className="arrow-icon7" alt="" src="/arrow5.svg" />
            <div className="copy1">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia `}</div>
            <div className="question1">
              Vestibulum vehicula orci felis proident sunt?
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="review-3">
          <div className="card" />
          <div className="date">13.08.2023</div>
          <img className="review-icon" alt="" src="/review.svg" />
          <div className="copy2">
            Aliquam suscipit massa orci, ac tristique sapien tristique sed.
            Etiam mattis vel purus eget suscipit. Nullam quis scelerisqu.
          </div>
          <div className="name">Detiem Afolayan</div>
        </div>
        <div className="review-2">
          <div className="card" />
          <div className="date1">21.08.2023</div>
          <img className="review-icon" alt="" src="/review1.svg" />
          <div className="copy2">
            Pellentesque viverra sapien massa, sed vestibulum massa ullamcorper
            vel. Morbi vulputate sollicitudin nisl, sagittis cursus nis.
          </div>
          <div className="name1">Okokon Ifiok</div>
        </div>
        <div className="review-1">
          <div className="card" />
          <div className="date2">01.09.2023</div>
          <img className="review-icon" alt="" src="/review2.svg" />
          <div className="copy2">
            Morbi hendrerit quam non varius cursus. Integer metus velit,
            tristique non mollis a, fringilla ut mauris. Pellentesque tincidunt.
          </div>
          <div className="name2">Obeten Ufofop</div>
        </div>
        <div className="subtitle">{`Let’s talk about how we can help you achieve your nutritional goals. `}</div>
        <div className="title2">
          Don’t just take our word for it. Here’s what our customers say about
          us!
        </div>
      </div>
      <div className="stats">
        <div className="content">
          <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
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
      <div className="gallery">
        <div className="content1">
          <div className="placeholder4" />
          <img className="charis-1-icon" alt="" src="/charis-1@2x.png" />
          <div className="placeholder3" />
          <img
            className="patoria-honey-2-icon"
            alt=""
            src="/patoriahoney-2@2x.png"
          />
        </div>
        <div className="placeholder1" />
        <img className="breakfast-1-icon" alt="" src="/breakfast-1@2x.png" />
      </div>
      <div className="benefits-of-honey">
        <div className="benefits-of-honey1">
          <div className="contents1">
            <div className="line" />
            <div className="text1">Reduces blood pressure and blood fat</div>
            <div className="line1" />
            <div className="text2">Aids in digestion and weight loss</div>
            <div className="line2" />
            <div className="text3">Remedy for cough and cold</div>
            <div className="line3" />
            <div className="text4">Used for treating wounds</div>
            <div className="line4" />
            <div className="text5">Improves memory and learning</div>
            <div className="line5" />
            <div className="text6">Loaded with anti-oxidants</div>
            <div className="line6" />
            <div className="line7" />
            <div className="text7">Good for skincare and hair growth</div>
            <div className="text8">High in minerals and vitamins</div>
            <div className="heading">Benefits of Honey</div>
          </div>
        </div>
        <img className="video-icon" alt="" src="/video.svg" />
      </div>
      <div className="product-info">
        <div className="content2">
          <div className="application">
            <div className="content33">
              <div className="divider" />
              <div className="text">
                Due to its natural qualities Patoria Premium Honey can be used
                in diverse ways which includes: being preferred over sugars and
                other sweeteners, can be used in baking, beverages and foods
                industry. In medicine, it can be used as a sweetening agent for
                children’s drugs and the treatment of sore throat, cough and
                burns. It can also be used as a nutritional supplement for
                children, athletes and people suffering from Diabetes.
              </div>
              <div className="subheading">Application:</div>
              <img className="icon-2" alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className="description">
            <div className="content4">
              <div className="divider" />
              <div className="text">
                Patoria Premium Honey is produced and packaged with
                international best practices using pure and natural honey
                without additives. This product comes in a 15ml easy to use
                sachet for one-time usage and designed for your convenience in
                homes, offices, hotels, events/breakfast shows, corporate
                organizations, airlines and institutions with food catering
                services. This honey is produced to retain and meet nutritional
                needs across demographics.
              </div>
              <div className="subheading">Description</div>
              <img className="icon-2" alt="" src="/icon-1.svg" />
            </div>
          </div>
          <b className="title3">“Your daily dose for healthy living”</b>
        </div>
      </div>
      <div className="web-banner">
        <div className="image">
          <div className="placeholder33" />
          <img className="web-banner-1-icon" alt="" src="/webbanner-1@2x.png" />
        </div>
      </div>
      <div className="hygienically-prepared-quality">
        Hygienically prepared quality premium honey that is free of artificial
        additives meeting your nutritional needs and giving you your daily dose
        for healthy living.
      </div>
      <div className="patoria-premium-honey">Patoria Premium Honey</div>
      <div className="navigation">
        <div className="links">
          <Link className="home22" to="/homePage">
            <b>Home</b>
          </Link>

          <Link className="home22" to="/aboutPage">
            <b>About Us</b>
          </Link>
          <b className="product1">Product</b>
          <Link className="home22" to="/contactPage">
            <b>Contact Us</b>
          </Link>
        </div>
        <img className="ebony-logo-icon" alt="" src="/ebony-logo@2x.png" />
      </div>
    </div>
  );
};

export default ProductDesktop;
