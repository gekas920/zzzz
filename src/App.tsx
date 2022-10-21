import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';
import Footer from './Components/Footer';
import Content from './Components/Content';
import { SWRConfig } from "swr";
const App = (): JSX.Element => {
  return (
      <SWRConfig>
          <div className="app">
              <Navbar />
              <Content />
              <Footer />
          </div>
      </SWRConfig>
  );
};

export default App;
