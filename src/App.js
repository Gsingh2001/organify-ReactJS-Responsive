import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact1 from './pages/Contact1';
import About1 from './pages/About1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<Contact1 />} />
      </Routes>
    </Router>
  );
}

export default App;
