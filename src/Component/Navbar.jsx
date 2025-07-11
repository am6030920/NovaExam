import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <div className="branding">
          <img
            className="name"          
            src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
            alt="NovaExam Logo"
          
            
          />
          <div className="nova">
            Nova<span className="exam">Exam</span>
          </div>
        </div>
        <div>
          <Link className="Log" to="/login">Login</Link>
          <Link className="signup" to="/signup">SignUp</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
