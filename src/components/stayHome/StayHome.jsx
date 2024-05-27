import stayHome from "../../assets/stayHome.svg";
import { BsSend } from "react-icons/bs";

const StayHome = () => {
  return (
    <section className="stay__home">
      <div className="stay__home__left">
        <h2>Stay home & get your daily needs from our shop</h2>
        <p>Start Your Daily Shopping with Nest Mart</p>
        <form action="">
          <button className="send__btn">
            <BsSend />
          </button>
          <input type="text" />
          <button className="subscribe__btn">Subscribe</button>
        </form>
      </div>
      <div className="stay__home__right">
        <img src={stayHome} alt="" />
      </div>
    </section>
  );
};

export default StayHome;
