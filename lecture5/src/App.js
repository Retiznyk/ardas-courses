import React from "react";
import Store from "./store";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Store>
      <Header />
      <Content />
    </Store>
  );
}

export default App;
