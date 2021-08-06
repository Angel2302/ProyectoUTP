// src/Product.js

import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find(p => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3> { product.nombre } </h3>
        <p>{ product.funcion }</p>
        <hr />
        <h4>{ product.color }</h4>
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