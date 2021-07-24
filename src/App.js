import React from "react";
import Header from "./Components/Header";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/index";
import Category from "./Components/Category";
import Checkout from "./Components/Checkout/index";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:categoryId" component={Category} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
