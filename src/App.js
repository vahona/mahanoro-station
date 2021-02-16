import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import WhereThePlace from './components/PlaceDestination'
import Profileaccount from './components/Profileaccount'
import NextTripToGo from './components/NextTripToGo'
import SeatsBook from './components/SeatsBook'

import { Conatiner } from "./Style";

export default function App() {
    return (
      <Conatiner>
        <Header />
        <Switch>
          <Route exact path="/">
            <WhereThePlace />
          </Route>
          <Route exact path="/profileaccount">
            <Profileaccount />
          </Route>
          <Route exact path="/NextTripToGo">
            <NextTripToGo />
          </Route>
          <Route exact path="/SeatsBook">
            <SeatsBook />
          </Route>
        </Switch>
      </Conatiner>
    );
}