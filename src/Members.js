// src/Products.js

import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Member from "./Member";
// import Product from "./product";

const Members = ({ match }) => {
    const memberData = [
        {
          id: 1,
          name: "Alex Santiago Angel Zambrano",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
          status: "Gestor (Scrum Master)",
        },
        {
          id: 2,
          name: "Cristian Cabarcas torrenegra",
          description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
          status: "Back-end (Tester)",
        },
        {
          id: 3,
          name: "Jorge Duran",
          description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
          status: "Front-end",
        },
        {
          id: 4,
          name: "José Bernardo Pérez Aguirre",
          description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
          status: "Front-end (persistencia)",
        },
        {
          id: 5,
          name: "Sebastian Zapata Ossa",
          description:
            "Petroleum engineer, software development student at UNAD, specialized in front end development",
          status: "front-end, back-end",
        },
      ];

  const { url } = useRouteMatch();    
  

  /* Create an array of `<li>` items for each member */
  const linkList = memberData.map((member) => {
    return (
      <li key={member.id}>
        <Link class= "h5" to={`${url}/${member.id}`}>{member.name}</Link>
      </li>
    );
  });

  return (
    <div class= "container">
      <div class= "row">
        <div class= "col" >
          <h3>Members</h3>
          <ul>{linkList}</ul>
        </div>
        <div class= "col">
          <Route path={`${url}/:memberId`}>
            <Member data={memberData} />
          </Route>
          <Route exact path={url}>
            <p>To know more about our Members Please select one.</p>
          </Route>
      </div>
      </div>
      

     
    </div>
  );
};
export default Members;