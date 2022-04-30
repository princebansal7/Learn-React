import React from "react";
import ReactDOM from "react-dom";

const imgRandom = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h4>Here we are using CSS styles and HTML elememt's Attributes too</h4>
    <ul>
      <li>In JSX file instead of writing "class" we use "className"</li>
      <li>Keeping in the mind the camel casing rule.</li>
      <li>We used a contant name as "imgRandom" from picsum website.</li>
      <li>Just like we learnt we used imgRandom in curley braces.</li>
    </ul>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={imgRandom + "?black"} />

    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
    <p>
      NOTE:
      <br />
      We are doing all this in single file index.js which is the entry point of
      react. <br />
      We can break above different functionality to different jsx or js files
      and import those files as components.
      <br />
      Each Tag in JSX or JS file must be either self closig or we seperately
      must close the tag else we'll get error.
      <br />
    </p>
  </div>,
  document.getElementById("root")
);
