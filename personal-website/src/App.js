import React from 'react';
import './CSS/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import DocPage from './Documentation/Documentation';

function Home() {
  return (
    <>
      <header className="App-header">
        <p>A portfolio made by Yin Wah</p>
        For you
      </header>

      <div id="Welcome-Information">
        <p>All About Yin Wah</p>
      </div>

      <div id="Quick-Fact-Boxes">
        <h1>Quick Fact Boxes</h1>
      </div>

      <div id="Connect With Me"></div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<DocPage />} />
      </Routes>

    </div>
  );
}

export default App;
