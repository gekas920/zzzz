import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';
import Footer from './Components/Footer';
import Content from './Components/Content';
const App = (): JSX.Element => {
  return (
    <div className="content">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
