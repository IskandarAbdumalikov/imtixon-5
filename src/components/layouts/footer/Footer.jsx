import "./footer.scss";
import logo from "../../../assets/logo.svg";
import location from "../../../assets/location.svg";
import call from "../../../assets/call.svg";
import email from "../../../assets/email.svg";
import hours from "../../../assets/hours.svg";
import apple from "../../../assets/apple.svg";
import payment from "../../../assets/payment.svg";
import instagram from "../../../assets/instagram.svg";
import telephone from "../../../assets/telephone.svg";
import playMarket from "../../../assets/playMarket.svg";

const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer__top">
        <ul>
          <img src={logo} alt="" />
          <li>
            <p>Awesome grocery store website template</p>
          </li>
          <li>
            <img src={location} alt="" />
            <p>
              Address: 5171 W Campbell Ave <br />
              undefined Kent, Utah 53127 United States
            </p>
          </li>
          <li>
            <img src={call} alt="" />
            <p>Call Us:(+91) - 540-025-124553</p>
          </li>
          <li>
            <img src={email} alt="" />
            <p>Email:sale@Nest.com</p>
          </li>
          <li>
            <img src={email} alt="" />
            <p>Email:sale@Nest.com</p>
          </li>
          <li>
            <img src={hours} alt="" />
            <p>Hours:10:00 - 18:00, Mon - Sat</p>
          </li>
        </ul>
        <ul>
          <li>
            <p style={{ color: "gray" }}>Company</p>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Delivery Information</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Support Center</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Account</h3>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">View Cart</a>
          </li>
          <li>
            <a href="#">My Wishlist</a>
          </li>
          <li>
            <a href="#">Track My Order</a>
          </li>
          <li>
            <a href="#">Help Ticket</a>
          </li>
          <li>
            <a href="#">Shipping Details</a>
          </li>
          <li>
            <a href="#">Compare products</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Corporate</h3>
          </li>
          <li>
            <a href="#">Become a Vendor</a>
          </li>
          <li>
            <a href="#">Affiliate Program</a>
          </li>
          <li>
            <a href="#">Farm Business</a>
          </li>
          <li>
            <a href="#">Farm Careers</a>
          </li>
          <li>
            <a href="#">Our Suppliers</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Promotions</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Popular</h3>
          </li>
          <li>
            <a href="#">Milk & Flavoured Milk</a>
          </li>
          <li>
            <a href="#">Butter and Margarine</a>
          </li>
          <li>
            <a href="#">Eggs Substitutes</a>
          </li>
          <li>
            <a href="#">Marmalades</a>
          </li>
          <li>
            <a href="#">Sour Cream and Dips</a>
          </li>
          <li>
            <a href="#">Tea & Kombucha</a>
          </li>
          <li>
            <a href="#">Cheese</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Install App</h3>
          </li>
          <li>
            <a href="#">From App Store or Google Play</a>
          </li>
          <li>
            <img src={apple} alt="" />
            <img src={playMarket} alt="" />
          </li>
          <li>
            <p>Secured Payment Gateways</p>
          </li>
          <li>
            <img src={payment} alt="" />
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>
          © 2022, Nest - HTML Ecommerce Template <br /> All rights reserved
        </p>
        <div className="footer__bottom__phones">
          <div className="footer__bottom__phones__left">
            <img src={telephone} alt="" />
            <div className="footer__bottom__phones__left__info">
              <h2>1900 - 6666</h2>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="footer__bottom__phones__right">
            <img src={telephone} alt="" />
            <div className="footer__bottom__phones__left__info">
              <h2>1900 - 8888</h2>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom__socials">
          <div className="footer__bottom__socials__top">
            <h3>Follow us</h3>
            <div className="footer__bottom__socials__top__images">
              <img src={instagram} alt="" />
              <img src={instagram} alt="" />
              <img src={instagram} alt="" />
              <img src={instagram} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
