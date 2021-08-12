// src/Product.js

import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find(p => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div >
        <div className='row'>

          <div className='col text center'>
            <img className='img-fluid rounded mt-3 mb-4 ' width="500" height="304"  src={ product.imageUrl }  />
          </div>
          <div className='col text-center'>
            <h3 className="font-italic text-capitalize"> { product.nombre } </h3>
            <p className="">{ product.funcion }</p>
            <hr />
            <h5 className="quoted-text text-capitalize">{ product.color }</h5>
          </div>
        </div>  
      </div>
    );
  } else {
    productData = <h2> Sorry. member doesn't exist </h2>;
  }

  return (
    <div className="containe-fluid ">
      <div className="container">{productData}</div>
    </div>
  );
};

export default Product;