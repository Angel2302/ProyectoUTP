/* eslint-disable react/style-prop-object */
// src/ Category.js

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";

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
    <main class="container-sm">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Detailaufnahme_Weihnachtsstern_-_gro%C3%9F.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Tricyrtis_hirta_-_blossom_side_%28aka%29.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Myosotis_sylvatica%2C_Bosvergeet-mij-nietje.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <div class="bg-light p-5 rounded">
    <h1 fontStyle="vertical-align: inherit;">The Green List</h1>
    <p class="lead fontStyle-vertical-align-inherit">With this project, it is expected to 
    reach a medium range in the region, covering varied territories and with different locations, 
    for now with Spanish speaking, our target audience being individuals belonging to the horticultural 
    community and those gardening enthusiasts with an interest in sharing their 
    knowledge regarding articles used daily in this medium </p>
    <a class="btn btn-lg btn-primary" href="Docs" >See NavBar Docs »</a>
  </div>
  
</main>
  );
};

export default Home;