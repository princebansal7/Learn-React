import React from "react";

// 3. Avatar ko chahiye Card se passed image property => using props to do it in src={props.image}
// Now we have seperate Avatar component.

// (We can look component and their props tree using react dev tools extension made by Fb)

function Avatar(props) {
  return <img className="circle-img" src={props.image} alt="avatar_img" />;
}

export default Avatar;
