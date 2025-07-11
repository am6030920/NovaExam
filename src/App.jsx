import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Welcome from './Component/Welcome';
import Signup from './Component/Signup';

const App = () => {
  return (
    
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
