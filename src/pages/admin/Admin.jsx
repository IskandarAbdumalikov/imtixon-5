import { Link, useNavigate } from "react-router-dom";
import "./admin.scss";

const Admin = () => {
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
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
      <div className="admin__btns">
        <button onClick={handleLogOut}>Log out</button>
        <button>
          <Link to={"/"}>Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Admin;
