import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../slice/authSlice";
const schema = yup
  .object({
    identifier: yup.string().required("L'identifiant est requis"),
    password: yup.string().required("Le mot de passe est requis"),
  })
  .required();
const LoginForm = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  // const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
    dispatch(login(credentials));
    // if (user) {
    //   dispatch(handleLogin(true));
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 1500);
    // } else {
    //   toast.error("Invalid credentials", {
    //     position: "top-right",
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <Textinput
        name="identifier"
        label="Adresse de connexion ou Code"
        defaultValue={credentials.identifier}
        type="text"
        register={register}
        error={errors.identifier}
        onChange={handleChange}
      />
      <Textinput
        name="password"
        label="Mot de passe"
        type="password"
        defaultValue={credentials.password}
        register={register}
        error={errors.password}
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Mot de passe oublié ?{" "}
        </Link>
      </div>

      <button className="btn btn-dark block w-full text-center">
        Connexion
      </button>
    </form>
  );
};

export default LoginForm;
