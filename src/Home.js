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
    <p class="lead fontStyle-vertical-align-inherit">Lorem Ipsum is simply dummy text of the printing
     and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
       book. It has survived not only five centuries, but also the leap into electronic typesetting, 
       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum. </p>
    <a class="btn btn-lg btn-primary" href="Docs" >Ver documentos de la barra de navegación »</a>
  </div>
</main>
  );
};

export default Home;