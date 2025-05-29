import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './assets/compnents/navbar';
import Login from './assets/pages/login';
import About from './assets/pages/About';
import Market from './assets/compnents/Market';
import Footer from './assets/compnents/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              
              
              
              <Market />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
