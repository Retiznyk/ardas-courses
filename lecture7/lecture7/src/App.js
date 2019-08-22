import React from "react";

import { Provider as UsersProvider } from "./contexts/UsersContext";

import User from "./components/User";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <User />
      </UsersProvider>
    </div>
  );
}

export default App;
