/* eslint-disable react/style-prop-object */
// src/ Category.js

import React from "react";

import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

const Home = () => {
  
  return (
    <main class="container">
  <div class="bg-light p-5 rounded">
    <h1 fontStyle="vertical-align: inherit;">The Green List</h1>
    <p class="lead fontStyle-vertical-align-inherit">Este texto debe ser largp pero no me funciona el lorem ipsum  </p>
    <a class="btn btn-lg btn-primary" href="Documentos" >Ver documentos de la barra de navegación »</a>
  </div>
</main>
  );
};

export default Home;