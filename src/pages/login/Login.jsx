import { memo, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./login.scss";
import eye from "../../assets/eye.svg";
import logo from "../../assets/logo.svg";
import eyeSlash from "../../assets/eye-slash.svg";

const Login = () => {
  let navigate = useNavigate();
  let [openEye, setOpenEye] = useState(false);
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);

  function handleOpenEye() {
    setOpenEye(true);
  }
  function handleCloseEye() {
    setOpenEye(false);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res.data);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login container">
      <form className="login__form" onSubmit={handleLogin} action="">
        <img src={logo} alt="" />
        <div className="input__username__login">
          <label htmlFor="">
            Email address <span>*</span>
          </label>
          <input
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name=""
          />
        </div>
        <div className="input__password__login">
          <label htmlFor="">
            Password <span>*</span>
          </label>
          <div className="password__login">
            <input
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type={!openEye ? "password" : "text"}
              name=""
            />
            {openEye ? (
              <img
                onClick={handleCloseEye}
                className="eye"
                width="25"
                src={eyeSlash}
                alt=""
              />
            ) : (
              <img
                onClick={handleOpenEye}
                className="eye"
                width="25"
                src={eye}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="checker">
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <NavLink>Forgot password ?</NavLink>
        </div>
        <div className="login__form__btns">
          <button
            className={loading ? "loginBtn disabled" : "loginBtn"}
            disabled={loading}
          >
            {loading ? "Loading..." : "Log in"}
          </button>
          <button type="button" className="signBtn">
            Sign Up?
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
