import "./products.scss";
import { useEffect, useState } from "react";
import axios from "../../api/index";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  }, []);
  let uniqueCategories = Array.from(
    new Set(data?.products.map((el) => el.category))
  );
  let categories = uniqueCategories.slice(0, 4).map((category, index) => (
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
        <h3>$ {product.price}</h3>
      </div>
    </div>
  ));
  return (
    <section className="products container">
      <div className="products__header">
        <h2>Popular Products</h2>
        <ul className="products__categories">
          <li style={{ cursor: "pointer" }}>All</li> {categories}
        </ul>
      </div>
      <div className="products__cards">{productCard}</div>
    </section>
  );
};

export default Products;
