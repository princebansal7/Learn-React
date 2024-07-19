import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emj}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.means}</dd>
    </div>
  );
}

export default Entry;
