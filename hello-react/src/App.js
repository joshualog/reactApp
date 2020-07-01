import React, { Component } from "react";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import EventPractice_Func from "./EventPractice_Func";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrrollBox";
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// const App = () => {
//   // return <Counter />;
//   // return <Say />;
//   // return <EventPractice />;
//   // return <EventPractice_Func />;
//   // return <ValidationSample />;
//   // return (
//   //   <div>
//   //     <ScrollBox ref={(ref) => (this.scrollBox = ref)} />;
//   //     <button onClick={() => this.scrollBox.scrollToBottom()}>Bottom</button>
//   //   </div>
//   // );
//   // return <IterationSample />;
// };

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>RandomColor</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
