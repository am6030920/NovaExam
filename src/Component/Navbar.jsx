import React from 'react';
import './Navbar.css'; // Ensure path is correct

const Navbar = () => {
  return (
    <>
      <div className="Nav">
          <div className="branding">
        <img
          src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
          alt="NovaExam Logo"
          className="logo"
        />
        <div className="nova">
          Nova<span className="exam">Exam</span>
        </div>
      </div>
        <div>
          <button className="Log">Login</button>
          <button className="signup">Signup</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
