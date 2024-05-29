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
import milks from "../../assets/milks.svg";
import clothing from "../../assets/clothing.svg";
import petFoods from "../../assets/petFoods.svg";
import fresh from "../../assets/fresh.svg";
import baking from "../../assets/baking.svg";
import slider from "../../assets/slider.svg";
import star from "../../assets/star.svg";

const SinglePage = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [count, setCount] = useState(0);
  let [imageOrder, setImageOrder] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`products/${id}`)
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderImages = () => {
    if (!data || !data?.images || data?.images.length === 0) {
      return null;
    }
    return data.images.map((image, index) => (
      <div className="single__img" key={index}>
        <img
          className={`${imageOrder === index ? "active__img" : ""}`}
          onClick={() => setImageOrder(index)}
          src={image}
          alt=""
        />
      </div>
    ));
  };

  const singleImages = data && data.images ? renderImages() : null;

  let singleItem = (
    <section className="single__section">
      <div className="single__section__top">
        <div className="single__section__top__left">
          <div className="single__card">
            <div className="single__card__left">
              {data.images && data.images[imageOrder] && (
                <img
                  className="single__card__left__main__image"
                  src={data.images[imageOrder]}
                  alt=""
                />
              )}
              <div className="single__bottom">{singleImages}</div>
            </div>
            <div className="single__card__right">
              <h2>{data.title}</h2>
              <div className="single__card__right__rating">
                <img src={star} alt="" />
                <p>({data.minimumOrderQuantity} reviews)</p>
              </div>
              <div className="single__card__right__price">
                <h1>${data.price}</h1>
                <div className="single__card__right__price__right">
                  <p>{data.discountPercentage}% Off</p>

                  <h2>${data.price + 2}</h2>
                </div>
              </div>
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
          <div className="single__descriptions">
            <p>
              Spluttered narrowly yikes left moth in yikes bowed this that
              grizzly much hello on spoon-fed that alas rethought much decently
              richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.
            </p>
            <hr />
            <p>
              Laconic overheard dear woodchuck wow this outrageously taut beaver
              hey hello far meadowlark imitatively egregiously hugged that yikes
              minimally unanimous pouted flirtatiously as beaver beheld above
              forward energetic across this jeepers beneficently cockily less a
              the raucously that magic upheld far so the this where crud then
              below after jeez enchanting drunkenly more much wow callously
              irrespective limpet.
            </p>
            <h3>Packaging & Delivery</h3>
            <p>
              Less lion goodness that euphemistically robin expeditiously
              bluebird smugly scratched far while thus cackled sheepishly rigid
              after due one assenting regarding censorious while occasional or
              this more crane went more as this less much amid overhung
              anathematic because much held one exuberantly sheep goodness so
              where rat wry well concomitantly.
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
        </div>
        <div className="single__section__top__right">
          <div className="single__category__card">
            <h2>Category</h2>
            <div className="single__category__card__item">
              <img src={milks} alt="" />
              <h3>Milks & Dairies</h3>
              <div className="count">
                <h1>5</h1>
              </div>
            </div>
            <div className="single__category__card__item">
              <img src={clothing} alt="" />
              <h3>Clothing</h3>
              <div className="count">
                <h1>6</h1>
              </div>
            </div>
            <div className="single__category__card__item">
              <img src={petFoods} alt="" />
              <h3>Pet Foods</h3>
              <div className="count">
                <h1>7</h1>
              </div>
            </div>
            <div className="single__category__card__item">
              <img src={baking} alt="" />
              <h3>Baking material</h3>
              <div className="count">
                <h1>12</h1>
              </div>
            </div>
            <div className="single__category__card__item">
              <img src={fresh} alt="" />
              <h3>Fresh Fruit</h3>
              <div className="count">
                <h1>16</h1>
              </div>
            </div>
          </div>
          <div className="single__price__card">
            <h2>Fill by price</h2>
            <img src={slider} alt="" />
            <div className="slider__price">
              <h3>
                From: <span>$500</span>
              </h3>
              <h3>
                To: <span>$1000</span>
              </h3>
            </div>
            <form action="" className="single__price__card__color">
              <h3>Color</h3>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>Red (56)</p>
              </div>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>Green (78)</p>
              </div>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>Blue (54)</p>
              </div>
            </form>
            <form action="" className="single__price__card__color">
              <h3>Item Condition</h3>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>New (1506)</p>
              </div>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>Refurbished (27)</p>
              </div>
              <div className="color__checkbox">
                <input name="checkbox" type="checkbox" />
                <p>Used (45)</p>
              </div>
            </form>
            <button>Filter</button>
            <img
              className="cabbage__img"
              width={150}
              src="https://s3-alpha-sig.figma.com/img/6e0d/6412/94e266643054029bbc193e40ae6eb1d3?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oyM-ija1R2Vrv4Y2kne0s4w5uk2KhfrtE~RyrFvdDyCOnw6aVl8ktha4SEjXnqU4iFt82O~p4arH3KsH63NkZr9w0L8vSMnLnR4oxdrrKdea5Bx9LwooskkxxNIJHywl~s~MQATVhWkA8eFQJmTf6eDxAxpwt6j6Y9jGe4Vxw-smHKP5eO18TV6FWXbRv9pSpTkMuCjFKhx2uohocCJrjSj0gn5dg3YMfdHKkgUIHWJLT-EjwJhOqFO7dPuJcOFMiXhuCS~ZEnZjnxFwLpOqa9JSWTrsWIFVLr39~6eymTOuMq2p-IKNSr1iRgEoesE~oYHJ9fbvWMi7fIQuxMGcHA__"
              alt=""
            />
          </div>
          <div className="single__products__card">
            <h2>New products</h2>
            <div className="products__item">
              <img
                src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kp4yaefwosIh9g-pjGnVjBzs4Fj~0kayeYEjK2TWQzs6n1477mftY5nehYlITCmFtIEfy4ZbU57dEwmTW6OrGE8kCb86NA69zHuMzDqQfLFOHybjBVb1eMz85RDXyoD-4FX~JStUrsXnxoWNIj4rU5vYiOTeLREOEgwEmq-ljn0h9FQG~vtNaaz0IRre3VN5TYnrUSFqbihUU0a1FiU0ySLl2pDw~dVajsA5ICqZefmUuEmRsN98-wxOAJwhEJQ6RvQ4PoCTH6sE-RRm0Z6~A8heIGYqwprYj87Oo8Ti7SU5Qr5p4ygOTiUUFnNN0NB5uIR7JYxEHXOoG4oiP7yTmw__"
                alt=""
              />
              <div className="products__item__right">
                <h3>Chen Cardigan</h3>
                <p>$99.50</p>
                <img height={12} src={star} alt="" />
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgvzE23UAfZsgyjl~rbn4Wuzak2fRzQkre~R2J8BHk5divuM85FDOYUEo6lQGuCi9xEmhm8LrRpqfzfv7tkUXvAzZ570ZVPrEB~FCw9HEtiP-9iRvLoRK-LzirGZPNVOPrMxWP6reCkNOR8lH2DOS2kUg0hSR6tNlCI58XNROn3fuy1WtZ3AoaxRQyWGi~iCQJVC2QUieMpghG6Y-vSAwZOFseCLjEKUez0CaPqVi5-VltadeCauWb~ZnQLxW8DBMTZJrDfCyTuKtjffCqOEZModPmTv~Rq5JB9ouo0myUfFxb~wHjO3ugHt7TzEwz0WlZvi085YFpFgXo6~nQVdpQ__"
                alt=""
              />
              <div className="products__item__right">
                <h3>Chen Sweater</h3>
                <p>$89.50</p>
                <img height={12} src={star} alt="" />
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syf2WJnSncfy9~dalgVZWwf9T8WtcjCgBA6c0KuatHA6JhpjDNPMrVqLo9msnKLdde-Fjc8b95ggYpe99KqrM4I1-q5o7mAIhOKW3n3nfxyhfw6nh6f2GkX-azbgenIs6HerlMyRKhIot~l1ol7mFz30520ut~mnMqU0JJU~S3zMOvNvtXx~IG6rbMwTDkEECKaamhNRzBr0-hYHS3Ja5Cfk4Woc2KVtP28aatwxa7HeyVDxEosU0Kx8tRmuAuNqZCv2GexgAZDv5eZtSPJugdMSG11mVLgxIeaO4iofzBvgRnUJ0vM4bAxhNxcWou7zH-5MMoRw358pKQT~X3046A__"
                alt=""
              />
              <div className="products__item__right">
                <h3>Colorful Jacket</h3>
                <p>$25</p>
                <img width={12} height={12} src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single__section__bottom">
        <StayHome />
      </div>
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
