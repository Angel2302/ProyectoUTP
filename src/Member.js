// src/Product.js

import React from "react";
import { useParams } from "react-router-dom";

const Member = ({ data }) => {
  const { memberId } = useParams();
  const member = data.find(p => p.id === Number(memberId));
  let memberData;

  if (member) {
    memberData = (
      <div>
        <h3> {member.name} </h3>
        <p className="card alert-success alert-dismissible h5 font-italic mb-3">{member.description}</p>
        <hr />
        <div className='col text-center'>
            <img className='img-fluid rounded'  src={ member.image } alt="" />
          </div>
        <h4 className="card alert-success alert-dismissible center-block text-xl-center">{member.status}</h4>
      </div>
    );
  } else {
    memberData = <h2> Sorry. member doesn't exist </h2>;
  }

  return (
    <div>
      <div>{memberData}</div>
    </div>
  );
};

export default Member;
