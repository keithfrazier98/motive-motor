import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppStates from "./common/AppStates";
import "./App.css"

function App() {
  return (
    <Router>
      <main style={{padding:"0"}} className="grid-container fluid">
        <AppStates/>
      </main>
    </Router>
  );
}

export default App;
