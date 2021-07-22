import React from "react";
import Header from "./Components/Header";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/index";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
