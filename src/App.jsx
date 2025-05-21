import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/compnents/navbar';
import Login from './assets/pages/login';
import About from './assets/pages/About';
import New from './assets/compnents/New';
import Carousel from './assets/compnents/Carousel';
import Market from './assets/compnents/Market';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Navbar />
        <div className='m-10'></div>
        <Routes>
          <Route path="/" element={
            <>
              
              <New />
              <Carousel />
              <Market />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
