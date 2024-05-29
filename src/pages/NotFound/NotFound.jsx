import { useEffect } from "react";
import "./notFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not__found container">
      <img
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt=""
      />
      <Link to={"/"}>
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
