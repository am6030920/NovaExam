
import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Welcome from './Component/Welcome';
import Signup from './Component/Signup';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
    </div>
  )
}

export default App
