import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Candy from './Candy';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
          <Route path="/soda" exact>
            <Soda />
          </Route>
          <Route path="/candy" exact>
            <Candy />
          </Route>
          <Route path="/chips" exact>
            <Chips />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
