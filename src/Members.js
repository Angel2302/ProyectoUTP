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
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
          status: "back-end",
        },
      ];

  const { url } = useRouteMatch();    
  

  /* Create an array of `<li>` items for each member */
  const linkList = memberData.map((member) => {
    return (
      <li key={member.id}>
        <Link to={`${url}/${member.id}`}>{member.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div >
          <h3>Members</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:memberId`}>
        <Member data={memberData} />
      </Route>
      <Route exact path={url}>
        <p>know more about our Members Please select a member.</p>
      </Route>
    </div>
  );
};
export default Members;