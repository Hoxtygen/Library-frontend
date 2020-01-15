import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./container/Home";
import NewBook from "./component/NewBook";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new-book">
            <NewBook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
