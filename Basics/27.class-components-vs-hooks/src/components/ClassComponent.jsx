import React from "react";

// In this below example of class component, we are simply making button counter which increases the count,
// like we did in hooks using states
// But here clearly, there is a lot of code being written to implement the same task
// So in 2018, React team introduced hooks and wanted everyone to use them as they makes code 90% cleaner
// NOTE: you can't use hooks inside the class components, but you definetlu can use the mixture of them
//       => using them in single tree => it some app is been written using class components,
//          you can use hooks alongside them.
// I've added the working example of hook (functional component) which does same tasks as this class component

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 }); // here setState is predefined function
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
