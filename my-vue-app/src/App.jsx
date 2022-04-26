import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      {/* <SignInSide /> */}
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
