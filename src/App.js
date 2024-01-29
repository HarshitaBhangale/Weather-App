import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentLocation />
      </div>
    </div>
  );
}

export default App;
