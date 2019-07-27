import React from "react";
import Rating from "./Rating";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Rating showText={true} initialValue={5} />
    </div>
  );
}

export default App;
