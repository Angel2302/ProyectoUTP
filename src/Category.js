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

const Category = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/products`}>Tools</Link>
        </li>
        <li>
          <Link to={`${url}/products`}>Seeds</Link>
        </li>
        <li>
          <Link to={`${url}/products`}>Fertilizers</Link>
        </li>
        <li>
          <Link to={`${url}/products`}>plants</Link>
        </li>
      </ul>
      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;