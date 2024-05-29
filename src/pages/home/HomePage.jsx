import { Fragment, useState } from "react";
import "./homePage.scss";
import { NavLink } from "react-router-dom";
import { CATEGORIES_CARDS } from "../../static/index.js";
import Products from "../../components/products/Products.jsx";
import StayHome from "../../components/stayHome/StayHome.jsx";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import about3 from "../../assets/about3.svg";
import about4 from "../../assets/about4.svg";
import about5 from "../../assets/about5.svg";
import { BsSend } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  const [categoryCards] = useState(CATEGORIES_CARDS);
  let swiper = (
    <SwiperSlide>
      <section className="hero ">
        <div className="hero__left">
          <h1>Fresh Vegetables Big discount</h1>
          <h2>Save up to 50% off on your first order</h2>
          <form action="">
            <button className="send__btn">
              <BsSend />
            </button>
            <input type="text" />
            <button className="subscribe__btn">Subscribe</button>
          </form>
        </div>
        <div className="hero__right"></div>
      </section>
    </SwiperSlide>
  );

  return (
    <Fragment>
      <main className=" container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiper}
          {swiper}
          {swiper}
          {swiper}
        </Swiper>

        <section className="featured__categories ">
          <div className="featured__categories__header">
            <h2>Featured Categories</h2>
            <ul>
              <li>
                <NavLink>Cake & Milk</NavLink>
              </li>
              <li>
                <NavLink>Coffes & Teas</NavLink>
              </li>
              <li>
                <NavLink>Pet Foods</NavLink>
              </li>
              <li>
                <NavLink>Vegetables</NavLink>
              </li>
            </ul>
          </div>
          <div className="featured__categories__cards">
            {categoryCards.map((el, index) => (
              <div style={{background:`${el.color}`}} key={index} className="featured__categories__cards__card">
                <img src={el?.img} alt="" />
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
              </div>
            ))}
          </div>
          <div className="featured__categories__items">
            <div className="featured__categories__items__item">
              <h2>
                Everyday Fresh & <br /> Clean with Our Products
              </h2>
              <button>Shop Now</button>
            </div>
            <div className="featured__categories__items__item">
              <h2>
                Everyday Fresh & <br /> Clean with Our Products
              </h2>
              <button>Shop Now</button>
            </div>
            <div className="featured__categories__items__item">
              <h2>
                Everyday Fresh & <br /> Clean with Our Products
              </h2>
              <button>Shop Now</button>
            </div>
          </div>
        </section>
        <Products />
        <StayHome />
        <section className="about__cards ">
          <div className="about__card">
            <img src={about1} alt="" />
            <div className="about__card__info">
              <h3>Best prices & offers</h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className="about__card">
            <img src={about2} alt="" />
            <div className="about__card__info">
              <h3>Free delivery</h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
          <div className="about__card">
            <img src={about3} alt="" />
            <div className="about__card__info">
              <h3>Great daily deal</h3>
              <p>When you sign up</p>
            </div>
          </div>
          <div className="about__card">
            <img src={about4} alt="" />
            <div className="about__card__info">
              <h3>Wide assortment</h3>
              <p>Mega Discounts</p>
            </div>
          </div>
          <div className="about__card">
            <img src={about5} alt="" />
            <div className="about__card__info">
              <h3>Easy returns</h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default HomePage;
