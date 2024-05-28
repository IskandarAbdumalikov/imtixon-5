import { useNavigate } from "react-router-dom";
import "./admin.scss";
import locationWhite from "../../assets/locationWhite.svg";
import StayHome from "../../components/stayHome/StayHome";
import { useEffect } from "react";

const Admin = () => {
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  let handleToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container admin">
      <div className="admin__top">
        <ul>
          <h1>Admin panel</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </ul>
        <ul>
          <h3>01. Visit Feedback</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <h3 style={{ color: "#3bb77e" }}>03. Billing Inquiries</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </ul>
        <ul>
          <h3>02. Employer Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h3>04.General Inquiries</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </ul>
      </div>
      <iframe
        className="map__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043861!2d69.20123767653914!3d41.28551820230703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1716916261951!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className="admin__bottom"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <ul>
          <h2>Office</h2>
          <a href="#">205 North Michigan Avenue, Suite 810</a>
          <a href="#">Chicago, 60601, USA</a>
          <a href="tel:(123) 456-7890">Phone: (123) 456-7890</a>
          <a href="email:contact@Evara.com">Email: contact@Evara.com</a>
          <button>
            <img src={locationWhite} alt="" />
            View map
          </button>
        </ul>
        <ul>
          <h2>Studio</h2>
          <a href="#">205 North Michigan Avenue, Suite 810</a>
          <a href="#">Chicago, 60601, USA</a>
          <a href="tel:(123) 456-7890">Phone: (123) 456-7890</a>
          <a href="email:contact@Evara.com">Email: contact@Evara.com</a>
          <button>
            <img src={locationWhite} alt="" />
            View map
          </button>
        </ul>
        <ul>
          <h2>Shop</h2>
          <a href="#">205 North Michigan Avenue, Suite 810</a>
          <a href="#">Chicago, 60601, USA</a>
          <a href="tel:(123) 456-7890">Phone: (123) 456-7890</a>
          <a href="email:contact@Evara.com">Email: contact@Evara.com</a>
          <button>
            <img src={locationWhite} alt="" />
            View map
          </button>
        </ul>
      </div>
      <div
        className="admin__contact"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div className="admin__contact__left">
          <h3>Contact form</h3>
          <h1>Drop Us a Line</h1>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form action="">
            <input placeholder="First Name" type="text" name="" id="" />
            <input placeholder="Your Email" type="text" name="" id="" />
            <input placeholder="Your Phone" type="text" name="" id="" />
            <input placeholder="Subject" type="text" name="" id="" />
            <textarea name="" id=""></textarea>
            <button>Send message</button>
          </form>
        </div>
        <div className="admin__contact__right">
          <img
            src="https://s3-alpha-sig.figma.com/img/4027/36d2/6308ccf0f42597b84434ecec3cb4995f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oinLaY9vINpL9gjkvJ3H6J3ys7sTy~~WaV0da-KjAr5x18ByPtkjTwpVw42AMIDomQkOU0ll3zSZ4uiMJi2onVLrMtYFnqyMvUuueTJRcwB1H171DjhtH6MScON1w64ei7vZ0c7AiDxWafiXJFjb0oXHCsi5DZ9ubMnv8DqNI6DV4GCcLwaTJGBg5Goo5Fp2M0Ga3xY4GFWdXhxXcTwCG3mF2dEWtcUlVZS-0FMMSLlzgsgsXl7A9ri6zPIPamc8ZmwU~rN327d2F82bKRWOE0uV6V~oCFav73vtuDMJWoO~xh1CcrKeVMNJfld-uy-~PDlNi0OcfA5DN6JWLKFf~Q__"
            alt=""
          />
        </div>
      </div>
      <div className="admin__btns">
        <button onClick={handleToHome}>Home</button>
        <button onClick={handleLogOut}>Log out</button>
      </div>
      <StayHome />
    </div>
  );
};

export default Admin;
