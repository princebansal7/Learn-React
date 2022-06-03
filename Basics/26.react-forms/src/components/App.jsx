import React, { useState } from "react";

// Here we'll learn how to take user input from <input> element and how to use submit button to use the input typed by user
/*
    - onChnage event -> triggered every time value is chnaged in input field.

    - when input element triggers the function in on change it also passes an object,
      this object corresponds to the event that triggers that onChnage.
      => so we can use various things related to that event.
      eg: console.log(event.target.value);

      event: that event which triggers the onChange
      target: element that triggered that event (input element in this case)
      value: values corresponds to different properties/attribues

      eg: console.log(event.target.type);
          console.log(event.target.placeholder);

    - In HTML, elements themselves responsible for handling their own state
      eg: <input value=""/> In Html it's handeled by input element and it set is
          whatever been type inside it.

    - But in React: we should ourself set the value to that varible which comes from
                    event.target.value (=> name) 
      making it 'single source of truth'

      => so that all corresponds to same things and match up =>
        In React this is called controlled component => here below <input/> is controlled component
*/

function App() {
  const [name, setName] = useState("");
  const [headingUpdate, setHeadingUpdate] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);

    setName(event.target.value);
  }

  // Now we want to name added to heading only when we click submit button

  function handleClick(event) {
    setHeadingUpdate(name);

    // at the end of function

    event.preventDefault(); // Now, won't refreshes => will not refreshes
  }
  return (
    <div className="container">
      <h1>Hello {headingUpdate} </h1>

      {/* Works Fine */}
      {/* <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button> */}

      {/*  EXTRA GYAAN: 

          usually we put input, button elements in html form element? Like below:
          But the button elemet when added inside form, as we clicks the button it 
          automatically refreshes the page, this is deafult behaviour.
          It specially happens with submit type buttons.
          why ?
          Beacuse they triggers an event called onSubmit on form.
      */}
      {/* <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form> */}

      {/* Now, to change the default behaviour, use handleClick function */}

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
