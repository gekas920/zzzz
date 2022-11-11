import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';
import Footer from './Components/Footer';
import Content from './Components/Content';
import { SWRConfig } from "swr";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const App = (): JSX.Element => {
  return (
      <SWRConfig>
              <div className="app">
                  <Router>
                      <Route path='/'><Navbar /></Route>
                      <Route exact path="/"><Content type='all'/></Route>
                      <Route exact path="/cats"><Content type='cats'/></Route>
                      <Route exact path="/dogs"><Content type='dogs'/></Route>
                      <Route path='/'><Footer /></Route>
                  </Router>
              </div>
      </SWRConfig>
  );
};

export default App;
