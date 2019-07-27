import React from "react";
import "./Test.css";

const COLORS = ["green", "orange", "red"];

export default class Test extends React.PureComponent {
  state = {
    iterations: -1
  };

  getColor() {
    return COLORS[++this.state.iterations] || "gray";
  }

  render() {
    return (
      <div className="item" style={{ backgroundColor: this.getColor() }}>
        Test item {this.props.value}
        <input />
      </div>
    );
  }
}
