import React from "react";

// 1.Now let's say we want to use <img/> element somewhere else in out webpage, we have to make it another component
// importing that <img/> element as Avatar component

import Avatar from "./Avatar";

// App -> Card -> Avatar

//2. Card se aayi img property props ki help se Avatar ki image property me aayi

// After doing above procedure, make 2 components for email and phone too.

import Telephone from "./Telephone";
import Email from "./Email";

// Adding a Detail component which do work like Email and Telephone component
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        {/* <img className="circle-img" src={props.img} alt="avatar_img" />; */}
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}

        {/* <Telephone tele={props.tel} />
          <Email em={props.email} /> */}

        {/* we can make single component called Detail too, works same as above two compnents */}

        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
