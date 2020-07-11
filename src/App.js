import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loadable from 'react-loadable';
import {Navbar} from './Components';

const About = Loadable({
  loader: () => import('./Pages/About'),
  loading: Loading
});
const Works = Loadable({
  loader: () => import('./Pages/Works'),
  loading: Loading
});
const Contact = Loadable({
  loader: () => import('./Pages/Contact'),
  loading: Loading
});
function App() {

  useEffect( () => {
    const elm = document.querySelector('#startingLoader');
    window.onload = () => {
      if (elm) {
        elm.remove();
      }
    }
  },[])

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

function Loading() {
  return (
    <div className="relative">
      <h1 className="text-2xl absolute font-bold" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Wait a second…</h1>
    </div>
  );
}

export default App;
