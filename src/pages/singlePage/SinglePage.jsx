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
import StayHome from "../../components/stayHome/StayHome";

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
      <div className="single__descriptions">
        <p>
          Spluttered narrowly yikes left moth in yikes bowed this that grizzly
          much hello on spoon-fed that alas rethought much decently richly and
          wow against the frequent fluidly at formidable acceptably flapped
          besides and much circa far over the bucolically hey precarious
          goldfinch mastodon goodness gnashed a jellyfish and one however
          because.
        </p>
        <hr />
        <p>
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <h3>Packaging & Delivery</h3>
        <p>
          Less lion goodness that euphemistically robin expeditiously bluebird
          smugly scratched far while thus cackled sheepishly rigid after due one
          assenting regarding censorious while occasional or this more crane
          went more as this less much amid overhung anathematic because much
          held one exuberantly sheep goodness so where rat wry well
          concomitantly.
        </p>
        <h3>Suggested Use</h3>
        <p>Refrigeration not necessary.</p>
        <p>Stir before serving</p>
        <h3>Other Ingredients</h3>
        <p>Organic raw pecans, organic raw cashews.</p>
        <p>
          This butter was produced using a LTG (Low Temperature Grinding)
          process
        </p>
        <p>
          Made in machinery that processes tree nuts but does not process
          peanuts, gluten, dairy or soy
        </p>
        <h3>Warnings</h3>
        <p>Oil separation occurs naturally. May contain pieces of shell.</p>
      </div>
      <StayHome />
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
