// src/Products.js

import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";
// import Product from "./product";

const Products = ({ match }) => {
    const productData = [
        {
          id: 1,
          name: "Product 1",
          description:
            "Lorem Ipsum is simply dummy",
          status: "Sold out",
        },
        {
          id: 2,
          name: "Product 2",
          description:
            "Lorem Ipsum is simply dummy",
          status: "Sold out",
        },
        {
          id: 3,
          name: "Product 3",
          description:
            "Lorem Ipsum is simply dummy",
          status: "Sold out",
        },
        {
          id: 4,
          name: "Product 4",
          description:
            "Lorem Ipsum is simply dummy",
          status: "Sold out",
        },
        {
          id: 5,
          name: "Product 5",
          description:
            "Lorem Ipsum is simply dummy",
          status: "Sold out",
        },
      ];

  const { url } = useRouteMatch();    
  

  /* Create an array of `<li>` items for each member */
  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link class= "h5" to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div class= "container">
      <div class= "row">
        <div class= "col" >
          <h3>Products</h3>
          <ul>{linkList}</ul>
        </div>
        <div class= "col">
          <Route path={`${url}/:productId`}>
            <Product data={productData} />
          </Route>
          <Route exact path={url}>
            <p>To know more about our products Please select one.</p>
          </Route>
      </div>
      </div>
      

     
    </div>
  );
};
export default Products;