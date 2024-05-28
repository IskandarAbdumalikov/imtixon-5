import { useEffect } from "react";
import "./notFound.scss";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not__found container">
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
