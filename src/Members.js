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
          image:"https://i.ibb.co/T2kqPMK/Alex.jpg"
        },
        {
          id: 2,
          name: "Cristian Cabarcas torrenegra",
          description:
            "From Bogotá, Currently in Cartagena. 6th semester in Systems Engineering, with  expierience in several technologies.",
          status: "Back-end (Tester)",
          image:"https://i.ibb.co/BCTBXM2/Cristian.jpg"
        
        },
        {
          id: 3,
          name: "Jorrique Duran Ayala",
          description:
            "From Cúcuta. Electronic Engineering Student at UNET, currently in Industrial Internship.",
          status: "Front-end",
          image:"https://i.ibb.co/x72xHWC/1617133316544.jpg"
        
        },
        {
          id: 4,
          name: "José Bernardo Pérez Aguirre",
          description:
            "From Medellín. Electronic Technician and Auto Electrician from SENA, currently Manager at Taximeters shop",
          status: "Front-end (persistencia)",
          image:"https://i.ibb.co/N3fwwJ2/Bernardo.jpg"
        
        },
        {
          id: 5,
          name: "Sebastian Zapata Ossa",
          description:
            "From Riosucio. Petroleum engineer, software development student at UNAD, specialized in front end development",
          status: "front-end, back-end",
          image:"https://i.ibb.co/FxqBvr6/87587657-10221861804311714-2116297396542504960-n.jpg"
        
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
          <div>  
            <h4>To know more about our Members Please select one.</h4>
            <div className='col'>
            <img class='img-fluid rounded'  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Group_people_icon.jpg" alt="" />
          </div>
          </div>
          </Route>
      </div>
      </div>
      

     
    </div>
  );
};
export default Members;