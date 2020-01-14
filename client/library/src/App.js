import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./container/Home";

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path = "/" component = {Home} />
      </div>
    </Router>
  );
}

export default App;
