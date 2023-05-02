import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </main>
);

export default App;
