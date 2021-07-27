// src/Products.js

import React, { useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Product from "./Product";
// import Product from "./product";

import axios from "axios";

const Products = () => {

  const[productData, setProductData] = useState({
    products: [],
    responseBool: false
  });
  console.log(useParams());
  
  axios.post('/products/filter-products',
      useParams()
    ).then(res => {
      if(!productData.responseBool){
        console.log(res.data)
        setProductData({
          products: res.data,
          responseBool: true
        });
      }
        
    }).catch(error => {
      console.log(error);
    });

  const { url } = useRouteMatch();    
  

  /* Create an array of `<li>` items for each member */
  const linkList = productData.products.map((product) => {
    console.log(product)
    return (
      <li key={product.id}>
        <Link className= "h5" to={`${url}/${product.id}`}>{product.Nombre}</Link>
      </li>
    );
  });

    return (
    <div className= "container">
      <div className= "row">
        <div className= "col" >
          <h3>Products</h3>
          <ul>{linkList}</ul>
        </div>
        <div className= "col">
          <Route path={`${url}/:productId`}>
            <Product data={productData.products} />
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