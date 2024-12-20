import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './page/Home';
import KajianKu from './page/KajianKu';
import KajianMu from './page/KajianMu';
import About from './page/About';
import Header from './page/header';
import Footer from './page/footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/kajian-ku" element={<KajianKu />} />
          <Route path="/kajian-mu" element={<KajianMu />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;