import React from "react";
import ReactDOM from "react-dom";

// props => properties:  it is just a way to dynamically change and provide the values in components
// using "props" keyword is mandatory
// {props.name} => value is JS

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

/* 
   - Here our Card functional component is taking various values as input.
     These attributes in component can be named anything (unlike HTML tags, who have pre-defined attributes):-
     eg: <input type="text" placeholder="enter name" value="Prince" />
     so here, in input tag have 'type', 'placeholder', 'value' etc which are predefined attributes

  - But in <Card/> we can use any name as attribute.

    This Code is repetative and Long. We will see in next folder (13) how we can make it more readable using components and Props
*/

/*  NOTE:
we can't apply style directly using className="my-style" in Custom component like that:
    <Card
      className="my-style"
      name="Prince"
      img="https://media-exp1.licdn.com/dms/image/C5603AQED5r3C-lMJXw/profile-displayphoto-shrink_200_200/0/1621027436416?e=1656547200&v=beta&t=1KuiMVovFdaj-BjBQfyDUcAIIDNQm0ofhOQs8A0zuDY"
      tel="+123 456 789"
      email="M@prince.com"
    />
    It won't work, because it sees it as 'props' and not as an 'html attribute'
    To apply styles, go to Component definition and there use className in relevant HTML tags
*/
ReactDOM.render(
  <div>
    <h1>Hmari Jan Pehchan</h1>
    <Card
      name="Prince"
      img="https://media-exp1.licdn.com/dms/image/C5603AQED5r3C-lMJXw/profile-displayphoto-shrink_200_200/0/1621027436416?e=1656547200&v=beta&t=1KuiMVovFdaj-BjBQfyDUcAIIDNQm0ofhOQs8A0zuDY"
      tel="+123 456 789"
      email="b@prince.com"
    />
    <Card
      name="Wolvrine"
      img="https://img.etimg.com/thumb/msid-69724545,width-200,height-200,imgsize-1032582,overlay-etpanache/photo.jpg"
      tel="+7387384587"
      email="X-men@Wolvi.com"
    />
    <Card
      name="Deadpool"
      img="https://s167.daydaynews.cc/?url=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F11398745474%2F1000"
      tel="+700000087"
      email="X-men@Pool.com"
    />
  </div>,
  document.getElementById("root")
);
