import { memo } from "react";
import { NavLink } from "react-router-dom";

const NavSearchModule = ({ data }) => {
  // console.log(data.length);
  let searchItems = data?.map((el) => (
    <NavLink to={`/singlePage/${el.id}`} key={el.id}>
      <div className="nav__search__card">
        <img src={el.images[0]} width={40} alt="" />
        <div className="search__result__right">
          <span>{el.title}</span>
          <p>{el.category}</p>
        </div>
      </div>
    </NavLink>
  ));
  return (
    <div className="nav__search-results">
      {data && data?.length === 0 ? (
        <h3>Malumot topilmadi</h3>
      ) : (
        <>{searchItems}</>
      )}
    </div>
  );
};

export default memo(NavSearchModule);
