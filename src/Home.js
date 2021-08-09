import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  
  return (
    <main className="container-sm">
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.homestratosphere.com/wp-content/uploads/2018/08/gardening-tools-lead-image-081918-min.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tools</h3>
      <p>Gardening and horticulture tools</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.lalr.co/cms/2020/05/14153258/huerta-casera1.png?size=sm"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Horticulture</h3>
      <p>Everything you need for your Home garden</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://aws.admagazine.com/prod/designs/v1/assets/1379x690/68306.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Gardening</h3>
      <p>seeds and fertilizers for your garden</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <div className="bg-light p-5 rounded">
    <h1 fontStyle="vertical-align: inherit;">The Green List</h1>
    <p className="lead fontStyle-vertical-align-inherit">With this project, it is expected to 
    reach a medium range in the region, covering varied territories and with different locations, 
    for now with Spanish speaking, our target audience being individuals belonging to the horticultural 
    community and those gardening enthusiasts with an interest in sharing their 
    knowledge regarding articles used daily in this medium </p>
    <a className="btn btn-lg btn-primary" href="Docs" >See NavBar Docs »</a>
  </div>
  
</main>
  );
};

export default Home;