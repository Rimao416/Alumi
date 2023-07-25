import React, { useState } from "react";
import Alumi from "../assets/img/diploma.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { logIn } from "../redux/actions/AuthAction";
import MainButton from "../components/MainButton";
function Login() {
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const {loading,errorType} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(logIn(user, navigate));
  };
  const isButtonDisabled = user.identifier.length==0 || user.password.length==0;
  console.log(isButtonDisabled)
  return (
    <div className="auth">
      <div className="auth__wrapper u-center-text">
        <img src={Alumi} alt="" className="auth__logo" />

        <div className="auth__header u-margin-top-big">
          <span className="auth__header--title">Connexion</span>
          <span className="auth__header--sub-title">
            Utiliser votre adresse de connexion ou votre adresse mail
          </span>
        </div>
        <form className="auth__form u-margin-top-extra" onSubmit={handleSubmit}>
          <label htmlFor="" className="auth__form--label label">
            Adresse mail
          </label>
          <input
            type="text"
            className={`auth__form--input input--form u-margin-top-small ${errorType ==="ErrorIdentifier" && 'error' }`}
            name="identifier"
            onChange={handleChange}
          />
          <label
            htmlFor=""
            className="auth__form--label u-margin-top-medium label"
          >
            Mot de passe
          </label>
          <div className="auth__password input--form u-block u-margin-top-small">
            <input
              type={type}
              name="password"
              className="auth__password--input"
              onChange={handleChange}
            />
            <span
              className="auth__password--eye"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? <PiEyeSlash /> : <PiEye />}
            </span>
          </div>
          <Link to="/#" className="auth__register-link u-block">
          Mot de passe Oublié
        </Link>
        <MainButton text="Connexion" isDisabled={isButtonDisabled}/>
        </form>
      
      </div>
    </div>
  );
}

export default Login;
