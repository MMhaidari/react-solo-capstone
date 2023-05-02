import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import DetailScreen from './components/Details';

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details:country" exact element={<DetailScreen />} />
    </Routes>
  </main>
);

export default App;
