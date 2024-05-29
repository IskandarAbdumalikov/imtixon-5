import "./products.scss";
import { useEffect, useRef, useState } from "react";
import axios from "../../api/index";
import { NavLink } from "react-router-dom";
import Loading from "../loading/Loading";

const Products = () => {
  const [data, setData] = useState(null);
  const [categoriesList, setCategoriesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);
  const [offset, setOffset] = useState(1);
  const pageCount = 4;
  console.log(category);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products${category ? `/category/${category}` : ""}`, {
        params: {
          limit: offset * pageCount + 4,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  }, [offset, category]);

  useEffect(() => {
    axios("/products/categories")
      .then((res) => setCategoriesList(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [offset]);
  let categories = categoriesList?.map((el) => (
    <li
      className={`${el === category ? "active__category" : ""}`}
      onClick={() => setCategory(el.slug)}
      style={{ cursor: "pointer" }}
      key={el.slug}
    >
      {el.name}
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
          <li style={{ cursor: "pointer" }} onClick={() => setCategory("")}>
            All
          </li>{" "}
          {categories}
        </ul>
      </div>
      {loading ? <Loading /> : <></>}
      <div className="products__cards">{productCard}</div>
      {loading ? <Loading /> : <></>}
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
