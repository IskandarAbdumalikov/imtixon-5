import { useParams } from "react-router-dom";
import "./singlePage.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../api/index";
import toUp from "../../assets/toUp.svg";
import basket from "../../assets/basket.svg";
import heart from "../../assets/heart.svg";
import change from "../../assets/change.svg";
import toDown from "../../assets/toDown.svg";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [count, setCount] = useState(0);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  const renderImages = () => {
    if (!data || !data.images || data.images.length === 0) {
      return null;
    }

    return data.images.map((image, index) => (
      <div className="single__img" key={index}>
        <img src={image} alt="" />
      </div>
    ));
  };

  const singleImages = data ? renderImages() : null;

  let singleItem = (
    <section className="singlePage">
      <div className="single__card">
        <div className="single__card__left">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="single__card__right">
          <h2>{data.title}</h2>
          <h1>${data.price}</h1>
          <p>{data.description}</p>
          <div className="single__card__right__btns">
            <div className="counter">
              <div className="counter__left">
                <h3>{count}</h3>
              </div>
              <div className="counter__right">
                <button onClick={() => setCount((p) => p + 1)}>
                  <img src={toUp} alt="" />
                </button>

                <button
                  disabled={count <= 0}
                  onClick={() => setCount((p) => p - 1)}
                >
                  <img src={toDown} alt="" />
                </button>
              </div>
            </div>
            <button className="add__cart-btn">
              <img src={basket} alt="" /> Add to cart
            </button>
            <button className="heart__btn">
              <img src={heart} alt="" />
            </button>
            <button className="heart__btn">
              <img src={change} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="single__bottom">{singleImages}</div>
    </section>
  );
  return (
    <div>
      <section className="single__item container">
        {loading ? (
          <div className="single__loading">
            <div className="single__loading__img bg__animation"></div>
            <div className="single__loading__info">
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
              <div className="single__loading__item bg__animation"></div>
            </div>
          </div>
        ) : (
          <>{singleItem}</>
        )}
      </section>
    </div>
  );
};

export default SinglePage;
