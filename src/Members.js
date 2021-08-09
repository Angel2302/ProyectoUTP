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
            "From Fusagasugá. Systems Engineering Student, Scrum and agile technologies manager certified",
          status: "Gestor (Scrum Master)",
        },
        {
          id: 2,
          name: "Cristian Cabarcas torrenegra",
          description:
            "From Bogotá, Currently in Cartagena. 6th semester in Systems Engineering, with  expierience in several technologies.",
          status: "Back-end (Tester)",
        },
        {
          id: 3,
          name: "Jorrique Duran Ayala",
          description:
            "From Cúcuta. Electronic Engineering Student at UNET, currently in Industrial Internship.",
          status: "Front-end",
        },
        {
          id: 4,
          name: "José Bernardo Pérez Aguirre",
          description:
            "From Medellín. Electronic Technician and Auto Electrician from SENA, currently Manager at Taximeters shop",
          status: "Front-end (persistencia)",
        },
        {
          id: 5,
          name: "Sebastian Zapata Ossa",
          description:
            "From Riosucio. Petroleum engineer, software development student at UNAD, specialized in front end development",
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