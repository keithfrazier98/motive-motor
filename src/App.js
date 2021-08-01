import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./common/AppRoutes";
import "./App.css"

function App() {
  return (
    <Router>
      <main style={{padding:"0"}} className="grid-container fluid">
          <AppRoutes/>
      </main>
    </Router>
  );
}

export default App;
