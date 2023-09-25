import "./ContactPageDesktop.css";
import { Link } from "react-router-dom";
function ContactPageDesktop() {
  return (
    <div className="contact-page-desktop4">
      <div className="footer4">
        <div className="footer-child4" />
        <div className="contents4">
          <div className="copyright-c-20234">
            Copyright (c) 2023 - Powered by Afrogon Studios
          </div>
          <div className="socials4">
            <img
              className="social-icontwitter4"
              alt=""
              src="/socialicontwitter.svg"
            />
            <img className="vector-icon4" alt="" src="/vector.svg" />
            <img
              className="social-iconinstagram4"
              alt=""
              src="/socialiconinstagram.svg"
            />
            <img
              className="social-iconyoutube4"
              alt=""
              src="/socialiconyoutube.svg"
            />
            <div className="follow-us-on4">Follow us on</div>
          </div>
          <div className="quick-links4">
            <div className="column-24">
              <div className="become-a-distributor4">Become a Distributor</div>
              <div className="privacy-policy4">Privacy Policy</div>
              <div className="terms-and-conditions44">Terms and Conditions</div>
            </div>
            <div className="column-14">
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
            <div className="quick-links14">Quick Links</div>
          </div>
          <div className="brand-info4">
            Ebony Foods and Beverages Limited is a food company invested in
            producing quality and healthy foods with high end innovations. We’re
            the “Makin’ it Better” Food Company.
          </div>
          <img className="logo-icon4" alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className="contacts4">
        <div className="content44">
          <div className="address4">
            <div className="text24">
              <span className="text2-txt4">
                <p className="parliamentary-village-calabar4">{`21 Parliamentary Village, Calabar, `}</p>
                <p className="parliamentary-village-calabar4">
                  <span>{`Cross River, `}</span>
                  <span className="nigeria4">Nigeria.</span>
                </p>
              </span>
            </div>
            <div className="text14">
              <p className="parliamentary-village-calabar4">{`25 Uwan Murphy Street, Ogoli - Ogoja, `}</p>
              <p className="parliamentary-village-calabar4">
                <span>{`Cross River, `}</span>
                <span className="nigeria4">Nigeria.</span>
              </p>
            </div>
            <div className="title4">Address</div>
          </div>
          <div className="form4">
            <div className="send-form4">
              <div className="button-primary-colour4">
                <div className="label4">Send message</div>
              </div>
            </div>
            <div className="message4">
              <div className="field4">
                <div className="label-parent4">
                  <input className="label-parent4" placeholder=" Message" />
                  <div className="expand4">
                    <div className="rectangle4" />
                    <div className="rectangle14" />
                  </div>
                </div>
              </div>
              <img className="asterisk-icon4" alt="" src="/asterisk.svg" />
            </div>
            <div className="phone4">
              <div className="field14">
                <div className="label-parent4">
                  <div className="label24">Phone</div>
                </div>
              </div>
              <img className="asterisk-icon14" alt="" src="/asterisk1.svg" />
            </div>
            <div className="email4">
              <div className="field4">
                <div className="label-parent4">
                  <input className="label-parent4" placeholder=" Email" />
                </div>
              </div>
              <img className="asterisk-icon24" alt="" src="/asterisk2.svg" />
            </div>
            <div className="name4">
              <div className="field4">
                <input className="label-parent4" placeholder=" Full Name" />
              </div>
              <img className="asterisk-icon34" alt="" src="/asterisk3.svg" />
            </div>
          </div>
          <div className="subtitle4">
            Got any questions? Fill out the form below and send us a message!
          </div>
        </div>
      </div>
      <div className="text44">
        <p className="parliamentary-village-calabar4">+234 802 935 6760</p>
        <p className="parliamentary-village-calabar4">+234 706 516 3614</p>
        <p className="parliamentary-village-calabar4">info@ebonyfb.com</p>
      </div>
      <div className="title14">Contact Us</div>
      <img className="image-icon4" alt="" src="/image@2x.png" />
      <div className="wed-really-like4">
        We’d really like to connect with you! Feel free to drop us a message
        here, give us a call, or shoot us an email. Don’t forget to follow us on
        our social media accounts to snag some awesome deals!
      </div>
      <div className="were-here-to4">We’re Here To Help</div>
      <div className="navigation4">
        <div className="links4">
          <Link className="product-link4" to="/homePage">
            <b>Home</b>
          </Link>
          <Link className="product-link4" to="/aboutPage">
            <b>About Us</b>
          </Link>
          <Link className="product-link4" to="/productPage">
            <b>Product</b>
          </Link>
          <b className="contact-usContact4">Contact Us</b>
        </div>
        <img className="ebony-logo-icon4" alt="" src="/ebony-logo@2x.png" />
      </div>
    </div>
  );
}

export default ContactPageDesktop;
