import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import home from "./views/home";
import beers from "./views/beers";
import randomBeer from "./views/random-beer";
import newBeer from "./views/new-beer";
import FontAwesome from "react-fontawesome";
import beer from "./views/beer";
import 'bulma/css/bulma.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="flex">
            <NavLink to="/">
              <FontAwesome className="" name="home" /> Home
            </NavLink>
            <NavLink to="/beers">
              <FontAwesome className="" name="beer" /> Beers
            </NavLink>
            <NavLink to="/new-beer">
              <FontAwesome className="" name="star" /> New beer
            </NavLink>
            
            <NavLink to="/random"><FontAwesome className="" name="question" /> Random</NavLink>
          </nav>
        </header>
        <div className="main-content grid">
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/new-beer" component={newBeer} />
            <Route path="/beers" component={beers} />
            <Route path="/beers/:id" component={beer} />
            <Route path="*" component={randomBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}
