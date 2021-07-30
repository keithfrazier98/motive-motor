import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./common/Routes";
import "./App.css"

function App() {
  return (
    <Router>
      <main style={{padding:"0"}} className="grid-container fluid">
          <Routes />
      </main>
    </Router>
  );
}

export default App;
