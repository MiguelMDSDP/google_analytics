import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './global.css';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Other from './pages/Other';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="other" element={<Other />} />
      </Route>
    </Routes>
  </Router>
);
