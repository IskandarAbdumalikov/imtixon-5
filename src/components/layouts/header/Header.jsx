import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../../assets/logo.svg";
import heart from "../../../assets/heart.svg";
import cart from "../../../assets/cart.svg";
import deals from "../../../assets/deals.svg";
import person from "../../../assets/person.svg";
import headphone from "../../../assets/headphone.svg";
import compare from "../../../assets/compare.svg";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavSearchModule from "./NavSearchModule";
import mainUrl from "../../../api/index";

const Header = () => {
  let [showList, setShowList] = useState(false);
  let [shrink, setShrink] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  let isLogin = localStorage.getItem("x-auth-token");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!value.trim()) return;
    mainUrl
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);
  return (
    <header className="header">
      <div className="header__top container ">
        <div className="header__top__left">
          <ul>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>My account</NavLink>
            </li>
            <li>
              <NavLink>Wishlist</NavLink>
            </li>
            <li>
              <NavLink>Order Tracking</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__top__right">
          <ul>
            <li>
              <a href="#">
                Need help? Call Us: <span>+ 1800 900</span>
              </a>
            </li>
            <select name="" id="">
              <option value="eng">English</option>
              <option value="uzb">Uzbek</option>
              <option value="rus">Russian</option>
            </select>
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="euro">EURO</option>
            </select>
          </ul>
        </div>
      </div>
      <hr />
      <nav className={`header__middle container ${shrink ? "shrink" : ""}`}>
        <NavLink to={"/"} className="header__logo">
          <img src={logo} alt="" />
        </NavLink>
        <form action="" className="header__search__form">
          <select name="" id="">
            <option value="all">All categories</option>
          </select>
          <div className="search__input">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search for items..."
              type="text"
              name=""
              id=""
              style={{ width: "100%", flex: 1 }}
            />
            {value.trim() ? <NavSearchModule data={data} /> : <></>}
          </div>
          <button style={{ width: "5%" }} className="search__icon">
            <FaSearch />
          </button>
        </form>
        <select className="header__middle__select" name="" id="">
          <option value="">
            <CiLocationOn /> Your location
          </option>
        </select>
        <ul className="header__middle__list">
          <li>
            <NavLink>
              <img src={compare} alt="" />
              Compare
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={heart} alt="" />
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={cart} alt="" />
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink to={!isLogin ? "/register" : "admin"}>
              <img src={person} alt="" />
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="header__bottom container">
        <select name="" id="" className="header__bottom__select">
          <option value="all">Browse All Categories</option>
        </select>
        {showList ? (
          <div onClick={() => setShowList(false)} className="overlay"></div>
        ) : (
          <></>
        )}

        <ul
          className={`header__bottom__list ${
            !showList ? "" : "header__bottom__showList"
          }`}
        >
          <li>
            <NavLink to={"/deals"} className="header__bottom__list__item">
              <img src={deals} alt="" />
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/vendors"}>Vendors</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Mega menu</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/pages"}>Pages</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <button
            onClick={() => setShowList(false)}
            className="header__bottom__list__closer"
          >
            X
          </button>
        </ul>
        <button onClick={() => setShowList(true)} className="hamburger">
          <GiHamburgerMenu />
        </button>
        <div className="header__bottom__contact">
          <img src={headphone} alt="" />
          <div className="header__bottom__contact__right">
            <h2>1900 - 888</h2>
            <p>24/7 Support Center</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
