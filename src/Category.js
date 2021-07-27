// src/ Category.js

import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

// const Item = () => {
//   const { name } = useParams();

//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// };

const Category = () => {
  const { url, path } = useRouteMatch();

  return (
    
    <div>
      <div class="container">
        <h2>Services and products you may find at Greenlist</h2>
        <div class="list-group list-group-mine ">
          <li href="#" class="list-group-item  list-group-mine bg-secondary">
            <Link to="/products/tools" ><h4 class="list-group-item-heading text-black-50">Tools</h4></Link>
            <p class="list-group-item-text">List Group Item Text</p>
          </li>
          <li href="#" class="list-group-item  list-group-mine bg-success">
            <Link to="/products/seeds"><h4 class="list-group-item-heading text-black-50">Seeds</h4></Link>
            <p class="list-group-item-text">List Group Item Text</p>
          </li>
          <li href="#" class="bg-light-green list-group-item  bg-info  ">
            <Link to="/products/fertilizers"><h4 class="list-group-item-heading text-black-50">Fertilizers</h4></Link>
            <p class="list-group-item-text">List Group Item Text</p>
          </li>
          <li href="#" class="list-group-item  list-group-mine bg-warning">
            <Link to="/products/plants"><h4 class="list-group-item-heading text-black-50">Plants</h4></Link>
            <p class="list-group-item-text">List Group Item Text</p>
          </li>
        </div>
  </div>
      
      
    </div>
  );
};

export default Category;