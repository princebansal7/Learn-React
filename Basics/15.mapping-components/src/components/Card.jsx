import React from "react";

import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* Error, as 'key' is not for us to use, it's for react */}
        {/* <p>{props.key}</p> */}

        {/* So, we can use another prop name (we created named 'unique') to use array object key named 'id' in Card  */}
        <p>{props.unique}</p>
        <h2 className="name">{props.name}</h2>

        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
