import "./products.scss";
import { useEffect, useState } from "react";
import axios from "../../api/index";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(100);
  const pageCount = 4;
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products", {
        params: {
          limit: offset * pageCount + 4,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  }, [offset]);
  let uniqueCategories = Array.from(
    new Set(data?.products.map((el) => el.category))
  );
  let categories = uniqueCategories.map((category, index) => (
    <li style={{ cursor: "pointer" }} key={index}>
      {category}
    </li>
  ));
  let productCard = data?.products.map((product) => (
    <div className="product__card" key={product.id}>
      <NavLink to={`/singlePage/${product.id}`}>
        <img src={product.thumbnail} alt="" />
      </NavLink>
      <div className="product__card__info">
        <p>{product.category}</p>
        <h3 title={`${product.description}`}>{product.description}</h3>
        <p>{product.rating} stars</p>
        <p>
          by <span>{product.brand ? product.brand : "Businessman"}</span>
        </p>
        <div className="product__card__bottom">
          <h3>$ {product.price}</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="products">
      <div className="products__header">
        <h2>Popular Products</h2>
        <ul className="products__categories">
          <li style={{ cursor: "pointer" }}>All</li> {categories}
        </ul>
      </div>
      <div className="products__cards">{productCard}</div>
      <button
        disabled={loading}
        className={`see__more__btn ${loading ? " disabled" : ""}`}
        onClick={() => setOffset((p) => p + 1)}
      >
        {loading ? "Loading..." : "See more"}
      </button>
    </section>
  );
};

export default Products;
