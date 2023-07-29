// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://votre_api", // Remplacez par l'URL de votre API
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("mon_token"); // Remplacez "mon_token" par la clé utilisée pour stocker le token dans le localStorage

    if (token) {
      const tokenExpiration = decodeToken(token).exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (tokenExpiration < currentTime) {
        localStorage.removeItem("mon_token");
        window.location.replace("/login");
        return Promise.reject("Token expired"); // Rejette la requête si le token est expiré
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;



// index.js ou App.js (ou le fichier principal de votre application)

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import api from "./api"; // Importez l'instance Axios personnalisée

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")