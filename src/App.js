import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {About, Works, Repository, Contact} from './Pages';
import {Navbar} from './Components';
function App() {
  return (
    <Router>
      <Navbar pos="top"/>
      <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route path="/works">
          <Works/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Navbar pos="bottom"/>
    </Router>
  );
}

export default App;
