import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Component/Navbar';
import Welcome from './Component/Welcome';
import Signup from './Component/Signup';
import Login from './Component/Login'; 
import Home from './Component/Home';
import About from './Component/About'; 
import Programming from './Component/Programming'; 
import Gk from './Component/Gk'; 
import Timed from './Component/Timed'; 
import Practice from './Component/Practice';
import Technical from './Component/Technical';
import Trivia from './Component/Trivia';
import Ml from './Component/Ml';
import Contact from './Component/Contact';
import Company from './Component/Company';
import Profile from './Component/Profile';
import Career from './Component/Career';
const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup','/home','/about','/programming','/gk','/timed','/practice','/technical','/trivia' ,'/ml','/contact','/company','/profile','/career'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname.toLowerCase()) && <Navbar />}
   
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programming" element={<Programming />} /> 
        <Route path="/gk" element={<Gk />} />
        <Route path="/timed" element={<Timed />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/ml" element={<Ml />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/Company' element={<Company/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/career' element={<Career/>}/>
      </Routes>
   
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
