// src/Product.js

import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find(p => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div className='container'>
        <div className='row'>
                          
          <div className='col'>
            <img class='img-fluid rounded'  src='https://cdn-3.expansion.mx/dims4/default/01ad839/2147483647/strip/true/crop/1254x836+0+0/resize/800x533!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F47%2Faf%2F43c746b44cde8c548e725350a7bd%2F190214-flores-rosas-dolar-is.jpg'  />
          </div>
          <div className='col'>
            <h3> { product.nombre } </h3>
            <p>{ product.funcion }</p>
            <hr />
            <h4>{ product.color }</h4>
          </div>
        </div>    
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