// src/Product.js

import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find(p => p.id == Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3> { product.Nombre } </h3>
        <p>{ product.Funcion }</p>
        <hr />
        <h4>{ product.Color }</h4>
      </div>
    );
  } else {
    productData = <h2> Sorry. member doesn't exist </h2>;
  }

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Product;