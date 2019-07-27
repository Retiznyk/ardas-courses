import React, { createRef } from "react";
import Test from "./Test";
import "./App.css";

class App extends React.Component {
  state = {
    value: [1, 2, 3, 4, 5]
  };

  addToHead = () => this.setState({ value: [0, ...this.state.value] });

  removeFromHead = () => {
    const [itemToRemove, ...restItems] = this.state.value;
    this.setState({ value: restItems });
  };

  renderTestItems = () =>
    this.state.value.map((item, index) => <Test key={index} value={item} />);

  render() {
    return (
      <div className="App">
        <div className="items">{this.renderTestItems()}</div>
        <button onClick={this.removeFromHead}>Remove first</button>
        <button onClick={this.addToHead}>Add first</button>
      </div>
    );
  }
}

export default App;
