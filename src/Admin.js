
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

const Admin = () => {
  const { url, path } = useRouteMatch();

  return(
    <div>
      <h3>Hello admin</h3>
      
    </div>
  );
};

export default Admin;