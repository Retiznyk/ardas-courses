import React from "react";
import "./App.css";
import Rating from "./Rating";
import EmojiValue from "./EmojiValue";

function App() {
  return (
    <div className="App">
      <Rating showText={true} showIcons={false} />
    </div>
  );
}

export default App;
